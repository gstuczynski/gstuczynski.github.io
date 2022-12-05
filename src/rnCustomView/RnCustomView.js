import React from "React";
import ReactNative from "ReactNative";
import requireNativeComponent from "requireNativeComponent";
import { Image, VrButton, asset, NativeModules } from "react-360";

export type Shape =
  | { type: "quad" } // A flat quad
  | { type: "cylinder", radius: number }; // A cylinder shape, curvature is defined by the radius

export type Props = ViewProps & {
  /**
   * The shape of the surface. This can be quad, cylinder, etc...
   */
  shape: Shape,

  /**
   * The height of the surface measured in device independent pixels
   */
  surfaceHeight: number,

  /**
   * The width of the surface measured in device independent pixels
   */
  surfaceWidth: number
};

export default class InfoPanelRn extends ReactNative.NativeComponent {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const iconSize = this.state.hover
      ? { width: 80, height: 80 }
      : { width: 50, height: 50 };
    const { styles, onClick, icon, children } = this.props;
    return (
      <RKSurface style={styles}>
        {children}
      </RKSurface>
    );
  }
}

const cfg = {
  nativeOnly: {}
};
const RKSurface = requireNativeComponent(
  "RCTWorkInProgressSurface",
  InfoPanelRn,
  cfg
);
