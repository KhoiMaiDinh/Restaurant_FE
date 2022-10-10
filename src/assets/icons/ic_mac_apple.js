import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={115}
    height={99}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="#fff" d="M0 0h115v98.571H0z" />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
