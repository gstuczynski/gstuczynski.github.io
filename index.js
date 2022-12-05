import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";
import { Provider } from "mobx-react";
import AppStore from "./src/stores/appStore";
import { createMemoryHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import OptionsPanel from "./src/options_panel/options_panel";
import InfoPanelButton from "./src/infoPanel/infoPanelButton3d";
import FloorPanel from "./src/floor_panel/floor_panel";

const history = createMemoryHistory();

import Scene from "./src/scene/scene";

const store = AppStore.create();

export default class beskidy_tour extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Scene initialScene={this.props.initialScene} />
      </Provider>
    );
  }
}

class optionsPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <OptionsPanel />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("beskidy_tour", () => beskidy_tour);
AppRegistry.registerComponent("OptionsPanel", () => optionsPanel);
AppRegistry.registerComponent("InfoPanelButton", () => InfoPanelButton);
AppRegistry.registerComponent("FloorPanel", () => FloorPanel);
