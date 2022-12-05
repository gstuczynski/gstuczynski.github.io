import React from "react";
import { Image, VrButton, asset, NativeModules } from "react-360";
import { extend } from "lodash";
import RNCustomView from "../rnCustomView/RnCustomView";

class InfoPanelButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const { styles, icon, onClick } = this.props;

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
            source={asset(`icons/${icon}`)}
          />
        </VrButton>
      </RNCustomView>
    );
  }
}

export default InfoPanelButton;
