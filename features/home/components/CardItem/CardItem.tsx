import React from 'react';
import { Box, Text, Button, FavoriteButton } from '@/components';
import { t } from '@/lang';
import { styles } from './CardItem.styles';
import { Image } from 'expo-image';
import { Pressable } from 'react-native';
import { Product } from '@/features/home/service/products';
import { Platform } from 'react-native';

export interface CardItemProps extends Product {
  isFavorite: boolean;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
  onPress: () => void;
}

export const CardItem: React.FC<CardItemProps> = React.memo(
  ({
    name,
    price,
    image,
    isFavorite,
    onAddToCart,
    onToggleFavorite,
    onPress,
  }) => (
    <Pressable onPress={onPress} style={styles.container}>
      <Box style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </Box>
      <Text
        numberOfLines={2}
        style={styles.price}
        color="blue"
        variant="xSmall"
        weight={Platform.OS === 'android' ? 'bold' : 'medium'}
      >
        {`${price} ${t('currency')}`}
      </Text>
      <Box flex={1} style={styles.titleWrapper}>
        <Text
          numberOfLines={2}
          weight={Platform.OS === 'android' ? 'bold' : 'medium'}
          variant="xSmall"
        >
          {name}
        </Text>
      </Box>
      <Button onPress={onAddToCart} title={t('addToCard')} />
    </Pressable>
  ),
);
