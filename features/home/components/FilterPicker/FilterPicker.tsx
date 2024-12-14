import { Box, Button, Text } from '@/components';
import { t } from '@/lang';
import { normalize } from '@/utils/layout-utils';
import React from 'react';
import { styles } from './FilterPicker.styles';
import { Platform } from 'react-native';

type FilterPickerProps = {
  onPress: () => void;
};

export const FilterPicker = ({ onPress }: FilterPickerProps) => {
  return (
    <Box row centerX px={normalize(17)} style={styles.container}>
      <Text
        variant="regular"
        weight={Platform.OS === 'android' ? 'bold' : 'medium'}
      >
        {`${t('filters')}:`}
      </Text>
      <Button
        style={styles.button}
        textProps={{
          style: styles.buttonText,
          numberOfLines: 1,
        }}
        onPress={onPress}
        title={t('selectFilter')}
      />
    </Box>
  );
};
