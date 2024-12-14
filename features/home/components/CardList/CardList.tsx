import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { normalize } from '@/utils/layout-utils';
import { ActivityIndicator } from 'react-native';
import { colors } from '@/theme';
import { Product } from '@/features/home/service/products';
import { CardItem } from '../CardItem/CardItem';

type CardListProps = {
  products: Array<Product & { isFavorite: boolean }>;
  onAddToCart: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onPress: (product: Product) => void;
  loadMore: () => void;
  isLoading: boolean;
};

export const CardList: React.FC<CardListProps> = ({
  products,
  onAddToCart,
  onToggleFavorite,
  onPress,
  loadMore,
  isLoading,
}) => {
  return (
    <FlashList
      keyExtractor={(item, index) => `${item.id}_${index}`}
      contentContainerStyle={{ paddingHorizontal: normalize(4.5) }}
      data={products}
      renderItem={({ item }) => (
        <CardItem
          {...item}
          onAddToCart={() => onAddToCart(item.id)}
          onToggleFavorite={() => onToggleFavorite(item.id)}
          onPress={() => onPress(item)}
        />
      )}
      estimatedItemSize={150}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading ? (
          <ActivityIndicator size="small" color={colors.blue} />
        ) : null
      }
    />
  );
};
