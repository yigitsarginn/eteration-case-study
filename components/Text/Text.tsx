import React, { type ReactElement } from 'react';
import { type TextProps as RNTextProps, Text as RnText } from 'react-native';

import {
  type Colors,
  type FontWeightOptions,
  type Fonts,
  colors,
  fontFamily,
  fontWeights,
  fonts,
} from '@/theme';

import { styles } from './Text.styles';

export interface TextProps extends RNTextProps {
  variant?: Fonts;
  weight?: FontWeightOptions;
  color?: Colors;
  center?: boolean;
}

export const Text = ({
  variant = 'medium',
  color = 'black',
  weight,
  center,
  style,
  ...rest
}: TextProps): ReactElement => (
  <RnText
    style={[
      {
        fontFamily: fontFamily.regular,
        fontSize: fonts[variant]?.fontSize || fonts.medium.fontSize,
        color: colors[color],
        fontWeight:
          weight !== undefined
            ? fontWeights[weight]
            : fonts[variant]?.fontWeight || fonts.medium.fontWeight,
        lineHeight: fonts[variant]?.lineHeight || fonts.medium.lineHeight,
      },
      (center ?? false) && styles.center,
      style,
    ]}
    {...rest}
  />
);
