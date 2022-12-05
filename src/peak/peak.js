import React from "react";
import { Image, asset, NativeModules } from "react-360";
import { extend } from "lodash";
import RNCustomView from "../rnCustomView/RnCustomView";

class Peak extends React.Component {

  render() {
    const { styles, peakImage } = this.props;

    return (
      <RNCustomView styles={styles}>
        <Image
          style={peakImage.styles}
          source={asset(`icons/${peakImage.img}`)}
        />
      </RNCustomView>
    );
  }
}

export default Peak;
