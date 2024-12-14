import React from 'react';
import { FlatList } from 'react-native';
import { normalize } from '@/utils/layout-utils';
import { CartItem, CartItemProps } from '../CartItem/CartItem';

export type CartListProps = {
  items: Omit<CartItemProps, 'onUpdateQuantity'>[];
  onUpdateQuantity: (id: string, quantity: number) => void;
};

export const CartList: React.FC<CartListProps> = ({
  items,
  onUpdateQuantity,
}) => (
  <FlatList
    data={items}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <CartItem {...item} onUpdateQuantity={onUpdateQuantity} />
    )}
    contentContainerStyle={{ paddingVertical: normalize(20) }}
  />
);
