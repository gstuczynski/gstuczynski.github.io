import React from "react";
import { Image, VrButton, asset, NativeModules, View } from "react-360";
import { extend } from "lodash";
import RNCustomView from "../rnCustomView/RnCustomView";

class QuestionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      disabled: false,
    };
  }

  render() {
    const { styles, onClick } = this.props;
    const iconSize = this.state.hover
      ? { width: 50, height: 50 }
      : { width: 30, height: 30 };

    let icon;

    if (typeof this.props.isAnsweredCorrect === "undefined")
      icon = "pytajnik.png";
    else if (this.props.isAnsweredCorrect) icon = "check.png";
    else icon = "cross.png";

    onButtonClick = () => {
      onClick();
    };
    return (
      <RNCustomView styles={styles}>
        <VrButton
          disabled={
            typeof this.props.isAnsweredCorrect !== "undefined" ||
            this.props.disabled
          }
          onClick={onClick}
          onLongClick={onClick}
        >
          <Image
            onEnter={
              typeof this.props.isAnsweredCorrect === "undefined"
                ? () => this.setState({ hover: true })
                : undefined
            }
            onExit={() => this.setState({ hover: false })}
            style={this.props.disabled ? { width: 30, height: 30 } : iconSize}
            source={asset(`icons/${icon}`)}
          />
        </VrButton>
      </RNCustomView>
    );
  }
}

export default QuestionButton;

const stylesx = {
  button: {
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
};
