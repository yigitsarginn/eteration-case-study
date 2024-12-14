import { colors } from '@/theme';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const CheckIcon = (props: SvgProps) => (
  <Svg
    testID="CheckIcon"
    width={24}
    height={24}
    viewBox="0 0 479.104 479.104"
    {...props}
  >
    <Path
      stroke={props.color ?? colors.white}
      fill={props.color ?? colors.white}
      d="m471.121 113.606-50.758-50.741c-10.642-10.644-27.881-10.644-38.522 0L180.146 264.574 97.303 181.73c-10.644-10.643-27.898-10.658-38.538-.017L7.99 232.504c-10.643 10.642-10.658 27.896-.016 38.539L148.14 411.226c17.287 17.284 45.31 17.333 62.659.11 64.093-63.647 208.114-207.158 260.291-259.145a27.21 27.21 0 0 0 8.014-19.275c.016-7.248-2.869-14.18-7.983-19.31z"
    />
  </Svg>
);
