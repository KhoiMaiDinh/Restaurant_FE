import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import { CUSTOM_COLOR } from "../../constants/color"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22 4a5 5 0 0 0-5 5v2a5 5 0 0 0 4 4.9v2.28A3 3 0 0 0 19 21v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-2-2.82V15.9a5 5 0 0 0 4-4.9V9a5 5 0 0 0-5-5ZM14 4a1 1 0 0 0-1 1v4a1 1 0 0 1-2 0V5a1 1 0 0 0-2 0v4a1 1 0 0 1-2 0V5a1 1 0 0 0-2 0v6a5 5 0 0 0 4 4.9v2.28A3 3 0 0 0 7 21v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-2-2.82V15.9a5 5 0 0 0 4-4.9V5a1 1 0 0 0-1-1Z"
      fill={CUSTOM_COLOR.Primary}
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
