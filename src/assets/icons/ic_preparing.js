import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="m13.079 11.134-.783.783 6.482 6.481-1.296 1.297L11 13.214l-6.482 6.48-1.296-1.296 8.56-8.56c-.538-1.336.02-3.26 1.486-4.728 1.79-1.789 4.257-2.224 5.51-.971 1.253 1.253.818 3.72-.972 5.509-1.468 1.468-3.392 2.026-4.727 1.486ZM3.87 3.49l6.157 6.157-2.592 2.593-3.566-3.566a3.667 3.667 0 0 1 0-5.184h.001Zm12.64 4.86c1.152-1.152 1.39-2.499.972-2.917-.418-.418-1.765-.18-2.917.972-1.152 1.153-1.39 2.5-.972 2.917.417.418 1.764.18 2.916-.972Z"
        fill={props.fill}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent