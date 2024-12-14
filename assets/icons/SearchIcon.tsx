import { colors } from '@/theme';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2A59FE"
      fillOpacity={0.3}
      fillRule="evenodd"
      d="M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
  </Svg>
);
