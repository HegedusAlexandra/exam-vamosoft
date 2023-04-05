import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg height="16.7%" width="100%" viewBox="0 0 400 100" {...props}>
      <Circle cx="50%" cy="-220%" r="410" fill="#006EE9" />
    </Svg>
  );
}
