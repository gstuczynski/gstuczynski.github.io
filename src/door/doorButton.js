import React from "react";
import { Image, VrButton, asset, Text } from "react-360";
import { extend } from "lodash";
import RNCustomView from "../rnCustomView/RnCustomView";
import { observer, inject } from "mobx-react";
import { decorate, observable } from "mobx";

class DoorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  getPoints() {
    return this.props.store.points;
  }

  render() {
    const { styles, icon, onClick, pointsToUnlock, finish } = this.props;

    const finishIconSize = this.state.hover
    ? { width: 130, height: 130 }
    : { width: 100, height: 100 };

    if (pointsToUnlock > this.getPoints()) {
      return (
        <RNCustomView styles={styles}>
          <Image
            style={finish ? finishIconSize :{ width: 50, height: 50 }}
            source={
              finish ? asset(`icons/finish_lock.png`) : asset(`icons/close.png`)
            }
          />
          <Text style={finish ? STYLES.textFinish : STYLES.text}>
            {this.getPoints()}/{pointsToUnlock}
          </Text>
        </RNCustomView>
      );
    }

    const iconSize = this.state.hover
      ? { width: 80, height: 80 }
      : { width: 50, height: 50 };



    return (
      <RNCustomView styles={styles}>
        <VrButton onClick={onClick} onLongClick={onClick}>
          <Image
            onEnter={() => this.setState({ hover: true })}
            onExit={() => this.setState({ hover: false })}
            style={finish ?finishIconSize: iconSize}
            source={
              finish
                ? asset(`icons/finish_unlock.png`)
                : asset(`icons/open.png`)
            }
          />
        </VrButton>
      </RNCustomView>
    );
  }
}

decorate(DoorButton, {
  getPoints: observable,
});

export default inject("store")(observer(DoorButton));

const STYLES = {
  text: {
    color: "white",
    position: "absolute",
    bottom: 5,
    fontWeight: "bold",
    left: 12,
  },
  textFinish: {
    color: "red",
    position: "absolute",
    bottom: 5,
    fontWeight: "bold",
    left: 12,
    fontSize: 40
  },
};
