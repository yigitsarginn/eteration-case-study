import React, {
  type ForwardedRef,
  type ReactElement,
  forwardRef,
  useMemo,
} from 'react';
import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';
import { type Colors, colors } from '@/theme';
import { styles } from './Box.styles';

export interface BoxProps extends ViewProps {
  space?: number;
  row?: boolean;
  flex?: number;
  px?: number;
  py?: number;
  p?: number;
  m?: number;
  mx?: number;
  my?: number;
  radius?: number;
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;
  color?: Colors;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  width?: ViewStyle['width'];
}

export const Box = forwardRef<View, BoxProps>(
  (
    {
      flex,
      row,
      radius,
      p,
      px,
      py,
      m,
      mx,
      my,
      space,
      center,
      centerX,
      centerY,
      justifyContent,
      alignItems,
      alignSelf,
      width,
      color = 'transparent',
      style,
      ...rest
    }: BoxProps,
    ref: ForwardedRef<View>,
  ): ReactElement => {
    const combinedStyle = useMemo(
      () =>
        StyleSheet.flatten([
          {
            flex,
            padding: p,
            paddingHorizontal: px,
            paddingVertical: py,
            margin: m,
            marginHorizontal: mx,
            marginVertical: my,
            gap: space,
            borderRadius: radius,
            backgroundColor: colors[color],
            justifyContent,
            alignItems,
            alignSelf,
            width,
          },
          row ? styles.row : undefined,
          center ? styles.center : undefined,
          centerX ? styles.centerX : undefined,
          centerY ? styles.centerY : undefined,
          style,
        ]),
      [
        flex,
        row,
        radius,
        p,
        px,
        py,
        m,
        mx,
        my,
        space,
        center,
        centerX,
        centerY,
        justifyContent,
        alignItems,
        alignSelf,
        width,
        color,
        style,
      ],
    );

    return <View ref={ref} style={combinedStyle} {...rest} />;
  },
);
