import { colors } from '@/theme';
import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

export const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        stroke={props.color ?? colors.white}
        fill={props.color ?? colors.white}
        d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"
        data-name="arrow-back"
      />
    </G>
  </Svg>
);
