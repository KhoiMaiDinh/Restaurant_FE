import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m19.216 10.716.555-.504a.75.75 0 0 0-.555-.246v.75Zm3.5 3.857h.75a.75.75 0 0 0-.195-.504l-.555.504Zm0 4.143v.75a.75.75 0 0 0 .75-.75h-.75Zm-2.086 0-.707.25.707-.25Zm-2.83 0 .708.25-.707-.25Zm-2.084-8v-.75a.75.75 0 0 0-.75.75h.75Zm-14-4.75a.75.75 0 1 0 0 1.5v-1.5Zm14 .75h.75a.75.75 0 0 0-.75-.75v.75Zm-11 11.25a.75.75 0 0 0 0 1.5v-1.5Zm.5-4.5a.75.75 0 0 0 0-1.5v1.5Zm-1.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm1.5 4.5a.75.75 0 0 0 0-1.5v1.5Zm-.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm.5-4.5a.75.75 0 0 0 0-1.5v1.5Zm-2.5-1.5a.75.75 0 1 0 0 1.5v-1.5ZM18.66 11.22l3.5 3.857 1.111-1.008-3.5-3.857-1.11 1.008Zm3.306 3.353v4.143h1.5v-4.143h-1.5Zm.75 3.393H20.63v1.5h2.086v-1.5Zm-1.379.5a2.25 2.25 0 0 0-2.121-1.5v1.5a.75.75 0 0 1 .707.5l1.415-.5Zm-2.121-1.5a2.25 2.25 0 0 0-2.122 1.5l1.414.5a.75.75 0 0 1 .708-.5v-1.5Zm-1.415 1h-2.085v1.5H17.8v-1.5Zm-1.335.75v-8h-1.5v8h1.5Zm-.75-7.25h3.5v-1.5h-3.5v1.5Zm-14-4h14v-1.5h-14v1.5Zm13.25-.75v12h1.5v-12h-1.5Zm.75 11.25H8.63v1.5h7.086v-1.5Zm-6.378.5a2.25 2.25 0 0 0-2.122-1.5v1.5a.75.75 0 0 1 .707.5l1.415-.5Zm-2.122-1.5a2.25 2.25 0 0 0-2.122 1.5l1.414.5a.75.75 0 0 1 .708-.5v-1.5Zm-1.415 1H4.716v1.5H5.8v-1.5Zm13.415.5a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm-11.25-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm-1.25-7.25h-1.5v1.5h1.5v-1.5Zm0 3h-.5v1.5h.5v-1.5Zm0-6h-2.5v1.5h2.5v-1.5Zm11.878 9.5a2.249 2.249 0 0 0-.128.75h1.5c0-.09.015-.173.042-.25l-1.414-.5Zm4.372.75c0-.262-.045-.515-.129-.75l-1.414.5c.027.077.043.16.043.25h1.5Zm-16.372-.75a2.247 2.247 0 0 0-.128.75h1.5c0-.09.015-.173.042-.25l-1.414-.5Zm4.372.75c0-.262-.045-.515-.128-.75l-1.415.5c.027.077.043.16.043.25h1.5Z"
      fill={props.fill}
    />
  </Svg>
)

export default SvgComponent