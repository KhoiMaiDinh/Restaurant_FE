import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m256 13.554-78.779 159.624L0 198.769l128.544 124.248-30.088 175.429L256 415.624l157.544 82.822-30.088-175.429L512 198.769l-177.221-25.591z"
      style={{
        fill: "#eedc11",
      }}
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
