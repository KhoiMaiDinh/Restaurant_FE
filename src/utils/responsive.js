const designWidth = 414;
import { Dimensions } from "react-native";

function scale(number) {
  let scaleNumberWidth;
  const currentDevice = Dimensions.get('window').width;
  scaleNumberWidth = (number / designWidth) * currentDevice;
  return scaleNumberWidth;
}

export default scale;

