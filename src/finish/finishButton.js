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
    const { styles, icon, onClick, pointsToUnlock } = this.props;

    if (pointsToUnlock > this.getPoints()) {
      return (
        <RNCustomView styles={styles}>
          <Image
            style={{ width: 50, height: 50 }}
            source={asset(`icons/cross.png`)}
          />
          <Text style={STYLES.text}>
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
        <VrButton onClick={onClick}>
          <Image
            onEnter={() => this.setState({ hover: true })}
            onExit={() => this.setState({ hover: false })}
            style={iconSize}
            source={asset(`icons/check.png`)}
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
    bottom: 12,
    fontWeight: "bold",
    left: 12,
  },
};
