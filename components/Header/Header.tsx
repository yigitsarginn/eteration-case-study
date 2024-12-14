import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from '../Text/Text';
import { Colors, Fonts, FontWeightOptions } from '@/theme';
import { Box } from '../Box/Box';
import { styles } from './Header.styles';

interface HeaderProps {
  title: string;
  leftElement?: React.ReactNode;
  titleAlignment?: 'left' | 'center';
  onLeftElementPress?: () => void;
  titleFontSize?: Fonts;
  titleFontWeight?: FontWeightOptions;
  titleFontColor?: Colors;
  bottomShadow?: boolean;
  style?: ViewStyle;
  bgColor?: Colors;
  testID?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftElement,
  titleAlignment = 'center',
  onLeftElementPress,
  titleFontSize = 'medium',
  titleFontWeight = 'extraBold',
  titleFontColor = 'white',
  bottomShadow = false,
  bgColor = 'blue',
  style,
  testID,
}) => {
  return (
    <Box
      testID={testID}
      row
      color={bgColor}
      style={[bottomShadow ? styles.shadow : null, style]}
    >
      {leftElement && (
        <TouchableOpacity
          onPress={onLeftElementPress}
          style={styles.leftElementContainer}
        >
          {leftElement}
        </TouchableOpacity>
      )}
      {!leftElement && titleAlignment === 'center' && <Box flex={1} />}
      <Box flex={3} style={[styles.titleContainer]}>
        <Text
          weight={titleFontWeight}
          color={titleFontColor}
          variant={titleFontSize}
          numberOfLines={1}
          center={titleAlignment === 'center'}
          style={{
            alignSelf: titleAlignment === 'left' ? 'flex-start' : 'center',
          }}
        >
          {title}
        </Text>
      </Box>
      {titleAlignment === 'center' && <Box flex={1} />}
    </Box>
  );
};
