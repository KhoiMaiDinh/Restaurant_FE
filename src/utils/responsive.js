const designWidth = 375;
const designHeight = 812;
import { Dimensions } from "react-native";

function scale(number) {
  let scaleNumberWidth;
  let scaleNumberHeight;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  const currentDeviceHeight = Dimensions.get('window').height;
  scaleNumber = (number / designHeight) * currentDeviceHeight;
  return scaleNumberWidth, scaleNumberHeight;
}

export default scale;
