import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"
import { memo } from "react"
import { CUSTOM_COLOR } from "../../constants/color"

const SvgComponent = (props) => (
  <Svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipRule="evenodd" fillRule="evenodd">
      <Circle cx={256} cy={256.007} fill={CUSTOM_COLOR.Primary} r={256} />
      <Path
        d="M229.939 510.689c8.571.87 17.265 1.317 26.061 1.317 124.453 0 228.428-89.271 251.302-207.138L402.155 199.722a11.994 11.994 0 0 0-1.814-1.548L278.698 113.78c-13.936-9.668-31.253-9.668-45.185 0l-121.754 84.485a12.002 12.002 0 0 0-5.158 9.865l.102 166.119c0 8.89 3.62 16.927 9.421 22.625z"
        fill={CUSTOM_COLOR.Primary}
      />
      <Path
        d="M247.198 133.498c5.741-3.985 12.073-3.985 17.822 0l105.274 73.04-92.097 73.607h-44.385l-94.859-71.538zm53.68 159.244 80.624 73.459V228.307zm-66.434 11.4h43.314l84.908 77.365h-213.13zm-103.747 62.067 80.328-73.192-80.41-60.639zm269.644-168.034L278.698 113.78c-13.936-9.668-31.253-9.668-45.185 0l-121.754 84.485a12.002 12.002 0 0 0-5.158 9.865l.102 166.119c0 17.235 13.604 31.261 30.33 31.261H375.17c16.722 0 30.33-14.026 30.33-31.261V208.031a12.003 12.003 0 0 0-5.159-9.856z"
        fill="#fff"
      />
    </G>
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
