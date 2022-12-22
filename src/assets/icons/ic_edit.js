import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { memo } from "react"
import { CUSTOM_COLOR } from "../../constants/color"

const SvgComponent = (props) => (
  <Svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M255.997 477.327 303 466.48l-36.157-36.156zM246.722 446.363l7.777-33.7c.019-.083.047-.161.069-.242.037-.139.074-.278.118-.415s.088-.252.135-.376.088-.234.138-.349a7.01 7.01 0 0 1 .19-.4c.049-.1.1-.195.151-.29a8.276 8.276 0 0 1 .883-1.283c.1-.123.213-.241.323-.357.045-.047.085-.1.131-.144L361.442 304C332.184 243.819 278.08 208 216 208c-45.522 0-87.578 19.485-118.421 54.865-31.062 35.633-48.565 85.3-49.536 140.291C66.407 412.417 141.812 448 216 448a298.024 298.024 0 0 0 30.722-1.637z"
      style={{
        fill: CUSTOM_COLOR.Primary,
      }}
    />
    <Path
      d="M270.461 342.863h176v64h-176z"
      transform="rotate(-45 358.42 374.958)"
      style={{
        fill: CUSTOM_COLOR.Primary,
      }}
    />
    <Circle
      cx={216}
      cy={112}
      r={80}
      style={{
        fill: CUSTOM_COLOR.Primary,
      }}
    />
    <Path
      d="M464 301.324a32 32 0 0 0-54.627-22.624l45.254 45.254a31.785 31.785 0 0 0 9.373-22.63z"
      style={{
        fill: CUSTOM_COLOR.Primary,
      }}
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
