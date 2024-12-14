import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const CloseIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="-0.5 0 25 25" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 21.32 18-18M3 3.32l18 18"
    />
  </Svg>
);
