import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { CUSTOM_COLOR } from "../../constants/color"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.25 5.395a.444.444 0 0 0 .438-.45.444.444 0 0 0-.438-.45.444.444 0 0 0-.438.45c0 .248.196.45.438.45ZM12 5.395a.444.444 0 0 0 .438-.45.444.444 0 0 0-.438-.45.444.444 0 0 0-.438.45c0 .248.196.45.438.45ZM13.75 5.395a.444.444 0 0 0 .438-.45.444.444 0 0 0-.438-.45.444.444 0 0 0-.438.45c0 .248.196.45.438.45Z"
      stroke={props.stroke}
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M17.25 5.431c.962 0 1.75.874 1.75 1.945v11.679C19 20.127 18.212 21 17.25 21H6.75C5.787 21 5 20.127 5 19.055V7.376c0-1.071.787-1.945 1.75-1.945M7.188 10.789h4.375M7.188 13.706h7.437M7.188 16.633h4.375"
      stroke={props.stroke}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Path
      d="M15.867 4.945c0-1.072-.778-1.945-1.74-1.945H9.873c-.963 0-1.75.873-1.75 1.945S8.91 6.89 9.874 6.89h4.243c.963 0 1.75-.873 1.75-1.945Z"
      stroke={props.stroke}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
