import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props) => (
  <Svg
    width={16}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20.5c4.418 0 8-3.806 8-8.5s-3.582-8.5-8-8.5S0 7.306 0 12s3.582 8.5 8 8.5Z"
        fill="#D8D8D8"
      />
      <Path
        d="m9.925 16-1.604-2.878L6.717 16h-.974l2.102-3.75L5.743 8.5h.974l1.604 2.878L9.925 8.5h.974l-2.094 3.75L10.899 16h-.974Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .5)" d="M0 0h16v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
