import React from 'react';
import { Box, Button, Text } from '@/components';
import { styles } from './CartItem.styles';
import { Platform } from 'react-native';

export type CartItemProps = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  onUpdateQuantity,
}) => (
  <Box style={styles.cartItem}>
    <Box flex={1}>
      <Text
        numberOfLines={1}
        weight={Platform.OS === 'android' ? 'bold' : 'regular'}
      >
        {name}
      </Text>
      <Text
        weight={Platform.OS === 'android' ? 'bold' : 'regular'}
        numberOfLines={1}
        variant="small"
        color="blue"
      >{`${price} ₺`}</Text>
    </Box>
    <Box flex={1} centerX style={styles.counterWrapper} row>
      <Button
        style={styles.incDecButton}
        textProps={{
          style: styles.buttonText,
        }}
        title="-"
        onPress={() => onUpdateQuantity(id, quantity - 1)}
      />
      <Box center color="blue" style={styles.quantity}>
        <Text
          weight={Platform.OS === 'android' ? 'bold' : 'medium'}
          color="white"
        >
          {quantity}
        </Text>
      </Box>
      <Button
        style={styles.incDecButton}
        textProps={{
          style: styles.buttonText,
        }}
        title="+"
        onPress={() => onUpdateQuantity(id, quantity + 1)}
      />
    </Box>
  </Box>
);
