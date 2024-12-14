import type { TextStyle } from 'react-native';

import { moderateScale } from '@/utils/layout-utils';

export type Fonts =
  | 'tiny'
  | 'xSmall'
  | 'small'
  | 'regular'
  | 'medium'
  | 'regularPlus';

export type FontWeightOptions =
  | 'light' // 300
  | 'regular' // 400
  | 'medium' // 500
  | 'semibold' // 600
  | 'bold' // 700
  | 'extraBold' // 800
  | 'black'; // 900

export type FontWeightValue = TextStyle['fontWeight'];

export type FontProps = {
  [key in Fonts]: {
    fontSize: number;
    fontWeight: FontWeightValue;
    lineHeight: number;
  };
};

export type FontWeightStyles = {
  [key in FontWeightOptions]: FontWeightValue;
};

export const fontFamily = {
  regular: 'Montserrat',
};

export const fonts: FontProps = {
  tiny: {
    fontWeight: '400',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(14),
  },
  xSmall: {
    fontWeight: '400',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.07),
  },
  small: {
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(19.5),
  },
  regular: {
    fontWeight: '400',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(21.94),
  },
  regularPlus: {
    fontWeight: '400',
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
  },
  medium: {
    fontWeight: '400',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(29.26),
  },
};

export const fontWeights: FontWeightStyles = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};
