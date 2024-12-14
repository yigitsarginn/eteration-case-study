import React from 'react';
import { Box } from '../Box/Box';
import { normalize } from '@/utils/layout-utils';
import { Text } from '../Text/Text';
import { t } from '@/lang';
import { Button } from '../Button/Button';
import { styles } from './BottomBadge.styles';
import { Platform } from 'react-native';

type BottomBadgeProps = {
  price: string;
  onPress: () => void;
  buttonLabel?: string;
  priceLabel?: string;
};

export const BottomBadge: React.FC<BottomBadgeProps> = ({
  price,
  onPress,
  buttonLabel = t('addToCard'),
  priceLabel = t('price'),
}) => {
  return (
    <Box
      py={normalize(16)}
      row
      style={{ justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Box flex={1}>
        <Text
          color="blue"
          weight={Platform.OS === 'android' ? 'bold' : 'regular'}
        >
          {`${priceLabel}: `}
        </Text>
        <Text
          style={{ paddingLeft: normalize(10) }}
          color="black"
          weight="bold"
          variant="regular"
          numberOfLines={1}
        >
          {`${price} ${t('currency')}`}
        </Text>
      </Box>
      <Button
        onPress={onPress}
        style={styles.button}
        title={buttonLabel}
        textProps={{
          style: styles.buttonText,
          numberOfLines: 1,
        }}
      />
    </Box>
  );
};
