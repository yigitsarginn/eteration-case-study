import React, { useCallback } from 'react';
import { BottomBadge, Box, FavoriteButton, Header, Text } from '@/components';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { styles } from './Detail.styles';
import { BackIcon } from '@/assets/icons/BackIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from '@/utils/layout-utils';
import { Platform, ScrollView } from 'react-native';
import { Product } from '@/features/home/service/products';
import { useFileStorage } from '@/hooks/useFileStorage';
import { useFavoritesStorage } from '@/hooks/useFavorites';
import { t } from '@/lang';

export const Detail: React.FC = () => {
  const product = useLocalSearchParams<Product>();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { addItemToCart } = useFileStorage();
  const { favorites, toggleFavorite } = useFavoritesStorage();

  const isFavorite = !!favorites[product.id];

  const handleAddToCart = useCallback(() => {
    addItemToCart(product);
    alert(t('addedSuccess'));
  }, [addItemToCart, product]);

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(product);
  }, [toggleFavorite, product]);

  const handleBack = useCallback(() => {
    router.replace('/(tabs)/(home)');
  }, [router]);

  return (
    <Box color="white" flex={1}>
      <Header
        titleFontSize="regularPlus"
        onLeftElementPress={handleBack}
        title={product.name}
        leftElement={<BackIcon width={normalize(35)} height={normalize(35)} />}
        style={{
          paddingTop: insets.top + normalize(6),
          paddingBottom: normalize(6),
        }}
      />
      <Box flex={1.2} m={normalize(16)}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </Box>
      <Box px={normalize(16)} style={styles.content}>
        <Text weight="bold" variant="medium">
          {product.name}
        </Text>
        <ScrollView contentContainerStyle={{ marginVertical: normalize(10) }}>
          <Text
            color="black"
            weight={Platform.OS === 'android' ? 'bold' : 'medium'}
            variant="small"
          >
            {product.description}
          </Text>
        </ScrollView>
        <BottomBadge
          onPress={handleAddToCart}
          price={`${Number(product.price).toFixed(2)}`}
        />
      </Box>
    </Box>
  );
};
