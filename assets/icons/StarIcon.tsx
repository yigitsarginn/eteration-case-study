import { colors } from '@/theme';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const StarIcon = (props: SvgProps) => (
  <Svg
    testID="StarIcon"
    width={32.31}
    height={30}
    viewBox="0 0 35 32"
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color ?? colors.black}
      fill={props.color ?? colors.black}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M33.762 12.539H21.358L17.608 1l-3.75 11.539H1.454l10.096 6.923L7.656 31l9.952-7.212L27.56 31l-3.894-11.538 10.096-6.923Z"
    />
  </Svg>
);
