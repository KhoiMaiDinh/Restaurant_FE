import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import { CUSTOM_COLOR } from "../../constants/color"

const SvgComponent = (props) => (
  <Svg
    width={18}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.766 2.238A4.21 4.21 0 0 0 12.79 1 4.198 4.198 0 0 0 9.81 2.238L9 3.052l-.812-.814a4.204 4.204 0 0 0-5.955 0 4.231 4.231 0 0 0 0 5.974l.812.814L9 15l5.955-5.974.811-.814A4.225 4.225 0 0 0 17 5.225a4.237 4.237 0 0 0-1.234-2.987v0Z"
      stroke={CUSTOM_COLOR.Red}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
