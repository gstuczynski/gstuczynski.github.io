import React from "react";
import { View, Environment, asset, NativeModules } from "react-360";
import scenesConfig from "../tourContent/scenesConfig";
import QuestionButton from "../question/questionButton";
import { observer, inject } from "mobx-react";
import { decorate, observable, computed } from "mobx";
import Peak from "../peak/peak";
import DoorButton from "../door/doorButton";
import { filter, groupBy, countBy } from "lodash";

const RCTDeviceEventEmitter = require("RCTDeviceEventEmitter");
const Controller = NativeModules.Controller;

class Scene extends React.Component {
  constructor(props) {
    super(props);
    props.initialScene && props.store.changeCurrentScene(props.initialScene);
    this.state = {
      scene: props.store.currentScene,
      showPeaks: false,
      showInfoPanels: true,
      points: props.store.points,
      questions: scenesConfig[this.getCurrentScene()].questions,
      doors: scenesConfig[this.getCurrentScene()].doors,
      wrongAnswers: [],
    };
    Environment.setBackgroundImage(
      asset(scenesConfig[props.store.currentScene].backgroundImage)
    );
    RCTDeviceEventEmitter.addListener("show-peaks", (e) => {
      this.setState({
        showPeaks: !this.state.showPeaks,
      });
    });

    RCTDeviceEventEmitter.addListener("show-info-panels", (e) => {
      this.setState({
        showInfoPanels: !this.state.showInfoPanels,
      });
    });

    RCTDeviceEventEmitter.addListener("disable-all-questions", (e) => {
      const questions = this.state.questions.map((q) => {
        q.disabled = true;
        return q;
      });
      this.setState({
        questions,
      });
    });

    RCTDeviceEventEmitter.addListener("enable-all-questions", (e) => {
      const questions = this.state.questions.map((q) => {
        q.disabled = false;
        return q;
      });
      this.setState({
        questions,
      });
    });

    RCTDeviceEventEmitter.addListener("answer", ({ isCorrect, id }) => {
      const questions = this.state.questions.map((q) => {
        if (q.id === id) {
          q.isAnsweredCorrect = isCorrect;
        }
        return q;
      });
      this.setState({
        questions,
      });

      isCorrect ? props.store.addPoint() : props.store.addWrongAnswers();

      if (!countBy(questions, "isAnsweredCorrect").undefined) {
        isCorrect && Controller.updatePoints(this.getPoints());
        // Controller.displayResults({
        //   maxPoints: this.state.maxPoints,
        //   userPoints: props.store.points,
        //   wrongAnswers: this.state.wrongAnswers,
        // });
      }
    });
  }

  disableAllQuestions() {
    const questions = this.state.questions.map((q) => {
      q.disabled = true;
      return q;
    });
    this.setState({
      questions,
    });
  }

  getCurrentScene() {
    return this.props.store.currentScene;
  }

  getPoints() {
    return this.props.store.points;
  }

  getAvailaiblePoints() {
    return this.props.store.availablePoints;
  }

  getWrongAnswers() {
    return this.props.store.wrongAnswersCount;
  }

  componentWillUpdate() {}

  componentDidUpdate(prevProps, prevState) {
    Controller.updatePoints(this.getPoints());
    if (prevState.scene !== this.getCurrentScene()) {
      this.setState({
        scene: this.props.store.currentScene,
        points: this.props.store.points,
        questions: scenesConfig[this.getCurrentScene()].questions,
        doors: scenesConfig[this.getCurrentScene()].doors,
        wrongAnswers: [],
      });
      Environment.setBackgroundImage(
        asset(scenesConfig[this.props.store.currentScene].backgroundImage)
      );
      this.props.store.setAvailablePoints(
        scenesConfig[this.getCurrentScene()].availablePoints
      );
    }
    const pointsToUnlock = scenesConfig[this.getCurrentScene()].doors.filter(
      (d) => !!d.pointsToUnlock
    )[0].pointsToUnlock;

    if (
      this.getAvailaiblePoints() ===
        this.getWrongAnswers() + this.getPoints() &&
      this.getPoints() < pointsToUnlock
    ) {
      Controller.gameOver(this.getPoints());
    }
  }

  renderQuestionButtons = (questions = []) => {
    return questions.map(
      (
        {
          id,
          styles,
          questionText,
          correctAnswers,
          isAnsweredCorrect,
          questionType,
          disabled,
          answers,
        },
        idx
      ) => {
        const questionProps = {
          id,
          questionText,
          questionType,
          correctAnswers,
          answers: questionType === "multiple" ? answers : false,
        };

        return (
          <QuestionButton
            key={idx}
            styles={styles}
            isAnsweredCorrect={isAnsweredCorrect}
            disabled={disabled}
            onClick={() => {
              Controller.startTimer();
              Controller.displayQuestion(questionProps);
              this.disableAllQuestions();
            }}
          />
        );
      }
    );
  };

  renderDoors = (doors) => {
    return doors.map(
      ({ styles, icon, nextScene, pointsToUnlock, finish }, idx) => {
        return (
          <DoorButton
            key={idx}
            styles={styles}
            onClick={() => {
              finish
                ? Controller.finishGame({ userPoints: this.getPoints() })
                : this.props.store.changeCurrentScene(nextScene);
            }}
            icon={icon}
            pointsToUnlock={pointsToUnlock}
            finish={finish}
          />
        );
      }
    );
  };

  renderPeaks = (peaks) =>
    peaks.map(({ styles, peakImage }) => {
      if (!peakImage) return;
      return <Peak styles={styles} peakImage={peakImage} />;
    });

  render() {
    Controller.updatePoints(this.getPoints());
    const userPoints = this.getPoints();
    const currentScene = scenesConfig[this.getCurrentScene()];
    // const questions = currentScene.questions;
    // const peaks = currentScene.peaks;

    return (
      <View style={{ flex: 1, zIndex: 2 }}>
        {this.state.questions &&
          this.renderQuestionButtons(this.state.questions)}
        {this.state.doors && this.renderDoors(this.state.doors)}
      </View>
    );
  }
}

decorate(Scene, {
  getCurrentScene: observable,
  getPoints: observable,
  getAvailaiblePoints: observable,
  getWrongAnswers: observable,
});

export default inject("store")(observer(Scene));
