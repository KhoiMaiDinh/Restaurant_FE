import * as React from 'react';
import Svg, {Path, Mask, G, Defs, Pattern, Use, Image} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path fill="url(#a)" d="M0 0h30v30H0z" />
    <Mask
      id="c"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={30}
      height={30}>
      <Path fill="url(#b)" d="M0 0h30v30H0z" />
    </Mask>
    <G mask="url(#c)">
      <Path fill="#4A4A4A" d="M0 0h30v30H0z" />
    </G>
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#d" transform="scale(.01)" />
      </Pattern>
      <Pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#d" transform="scale(.01)" />
      </Pattern>
      <Image
        id="d"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABGdBTUEAALGOfPtRkwAAATpJREFUeAHt2kENAkEMBdBCUIIPbCABMygAGfjgjgKyArjDjoHJniYd+vY6m/z29fojfAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQGCuzWrOPAPFF9gXc7yLf/j9eBAqf9wDBRGwQcZAPSyF8Oa9hzZKCsrsCn++qRAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMLtDK1pfZl/ij+R/a77muqf2e6x4R2u/JLtLa7/dkM1UeZ6m8vN0JECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoIBAK1vfCuw5y4pX7fdcp9J+z3UP7fds94jWfj+nm6ruQK+6q9ucAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGIH8UMC4gSJhgHAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
