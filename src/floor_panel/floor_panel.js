import React from "react";
import {
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset,
  NativeModules,
} from "react-360";

const Controller = NativeModules.Controller;

const FloorPanel = () => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>Geotraf</Text>
    <View style={styles.buttonsContainer}>
      <VrButton
        onClick={() => Controller.openUrl("https://www.facebook.com/geotraf")}
      >
        <Image style={styles.icon} source={asset(`icons/fb.png`)} />
      </VrButton>
      <VrButton onClick={() => Controller.openUrl("https://geotraf.pl/")}>
        <Image style={styles.icon} source={asset(`icons/dalej.png`)} />
      </VrButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    transform: [{ rotateX: "-90deg" }, { translateZ: -100 }],
    borderColor: "#303050",
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    borderRadius: 50,
    padding: 10,
  },
  title: {
    fontSize: 5,
    textAlign: "center",
    marginTop: 20,
  },
  author: {
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});

export default FloorPanel;
