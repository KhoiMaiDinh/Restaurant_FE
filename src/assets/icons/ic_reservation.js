import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import { CUSTOM_COLOR } from "../../constants/color"

const SvgComponent = (props) => (
  <Svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m20.19 8.46-12 12a2.06 2.06 0 0 1-1 .54l-3.54.71a2 2 0 0 1-2.35-2.35l.7-3.51a2.06 2.06 0 0 1 .54-1L14.38 3a4.15 4.15 0 0 1 5.94 0 4 4 0 0 1-.13 5.51v-.05Z"
      stroke={CUSTOM_COLOR.Primary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
