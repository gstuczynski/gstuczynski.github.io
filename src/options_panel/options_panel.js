import React from "react";
import {
  View,
  Environment,
  asset,
  NativeModules,
  Text,
  VrButton,
  Image
} from "react-360";
import { observer, inject } from "mobx-react";

const Controller = NativeModules.Controller;


class OptionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
  }

  componentDidMount() {
    Controller.checkMobile((swidth, sheight) => {
    });
  }

  render() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // width: 20,
          // height: 40,
          top: 50,
          backgroundColor: "black",
          transform: [{ translate: [0, 0, -1] }]
        }}
      >
        <VrButton
          onClick={() => {
            this.props.store.changeShowPeaks();
          }}
        >
          <Image
            source={asset("icons/peak.png")}
            style={{ width: 50, height: 50 }}
          />
        </VrButton>
        <VrButton
          onClick={() => {
            Controller.displayMap();
          }}
        >
          <Image
            source={asset("icons/map.png")}
            style={{ width: 50, height: 50, marginLeft: 30 }}
          />
        </VrButton>
        <VrButton
          onClick={() => {
            Controller.openUrl("https://www.facebook.com/");
          }}
        >
          <Image
            source={asset("icons/fb.png")}
            style={{ width: 50, height: 50, marginLeft: 30 }}
          />
        </VrButton>
      </View>
    );
  }
}

export default inject("store")(observer(OptionsPanel));
