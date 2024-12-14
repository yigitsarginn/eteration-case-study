import { SearchIcon } from '@/assets/icons/SearchIcon';
import { rgba } from '@/theme';
import React, { type ReactElement } from 'react';
import {
  TextInput,
  type TextInputProps,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { styles } from './SearchBar.styles';
import { Box } from '../Box/Box';

interface SearchBarProps extends Omit<TextInputProps, 'style'> {
  placeholderText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const SearchBar = ({
  placeholderText = 'Search',
  containerStyle,
  inputStyle,
  ...rest
}: SearchBarProps): ReactElement => {
  return (
    <Box
      testID="search-bar-container"
      style={[styles.container, containerStyle]}
    >
      <SearchIcon style={styles.icon} />
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={rgba('black', 0.3)}
        style={[styles.input, inputStyle]}
        {...rest}
      />
    </Box>
  );
};
