import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
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
      d="M12 16v3H5V5h7v3"
      stroke={CUSTOM_COLOR.Primary}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M17 12H9h8Z"
      stroke={CUSTOM_COLOR.Primary}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m16 9 2 3-2 3"
      stroke={CUSTOM_COLOR.Primary}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
