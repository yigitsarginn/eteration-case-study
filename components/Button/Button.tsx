import React, { type ReactElement } from 'react';
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  Platform,
} from 'react-native';

import { Box } from '../Box/Box';
import { Text, type TextProps } from '../Text/Text';
import { styles } from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textProps?: TextProps;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({
  title,
  textProps,
  style,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      {...rest}
      testID="TouchableOpacity"
    >
      <Box row center>
        <Text
          color="white"
          variant="small"
          weight={Platform.OS === 'android' ? 'bold' : 'regular'}
          style={textProps?.style}
          numberOfLines={1}
        >
          {title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
