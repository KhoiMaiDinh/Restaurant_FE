import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={113}
    height={97}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#fff" d="M0 0h113v96.373H0z" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
