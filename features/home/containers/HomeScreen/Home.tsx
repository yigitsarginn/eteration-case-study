import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Box, Text, Header, SearchBar } from '@/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from '@/utils/layout-utils';
import { t } from '@/lang';
import { ActivityIndicator } from 'react-native';
import { colors } from '@/theme';
import { Product, useFetchProductsQuery } from '../../service/products';
import { FilterPicker } from '../../components/FilterPicker/FilterPicker';
import { CardList } from '../../components/CardList/CardList';
import {
  FilterModal,
  SortOptions,
} from '../../components/FilterModal/FilterModal';
import { useRouter } from 'expo-router';
import { sortProducts } from '@/utils/sort-products';
import { filterProducts } from '@/utils/filter-products';
import {
  extractAvailableBrands,
  extractAvailableModels,
} from '@/utils/extract-availableItems';
import { useFileStorage } from '@/hooks/useFileStorage';
import { useFavoritesStorage } from '@/hooks/useFavorites';

export const Home = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { favorites, toggleFavorite } = useFavoritesStorage();
  const { addItemToCart, storedCart } = useFileStorage();
  const [isFilterModalVisible, setFilterModalVisible] =
    useState<boolean>(false);
  const [filters, setFilters] = useState<{
    sortBy: SortOptions | '';
    brands: Product['brand'][];
    models: Product['model'][];
  }>({
    sortBy: '',
    brands: [],
    models: [],
  });

  const {
    data: products = [],
    isLoading,
    error,
    refetch,
  } = useFetchProductsQuery({ page, limit: 12 });

  const handleLoadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const handleCloseModal = useCallback(() => {
    setFilterModalVisible(false);
    if (products.length === 0) {
      refetch();
    }
  }, [products, refetch]);

  const handleApplyFilters = useCallback((appliedFilters: typeof filters) => {
    setFilters(appliedFilters);
    setPage(1);
  }, []);

  const handleAddToCart = useCallback(
    (id: string) => {
      const product = products.find((product) => product.id === id);
      if (product) {
        addItemToCart(product);
        alert(t('addedSuccess'));
      }
    },
    [products, addItemToCart],
  );

  const handleToggleFavorite = useCallback(
    (id: string) => {
      const product = products.find((product) => product.id === id);
      if (product) toggleFavorite(product);
    },
    [products, toggleFavorite],
  );

  const handleNavigateToDetail = useCallback(
    (product: Product) => {
      router.push({ pathname: '/detail', params: product });
    },
    [router],
  );

  const availableBrands = useMemo(
    () => extractAvailableBrands(products),
    [products],
  );

  const availableModels = useMemo(
    () => extractAvailableModels(products),
    [products],
  );

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(
      products,
      searchQuery,
      filters.brands,
      filters.models,
    );
    const sorted = sortProducts(filtered, filters.sortBy);

    return Array.from(new Set(sorted.map((product) => product.id))).map((id) =>
      sorted.find((product) => product.id === id),
    );
  }, [products, searchQuery, filters]);

  const mappedProducts = useMemo(() => {
    return filteredProducts
      .filter((product): product is Product => !!product)
      .map((product) => ({
        ...product,
        isFavorite: !!favorites[product.id],
      }));
  }, [filteredProducts, favorites]);

  if (isLoading && page === 1) {
    return (
      <Box center flex={1}>
        <ActivityIndicator size="small" color={colors.blue} />
      </Box>
    );
  }

  if (error && page === 1) {
    return (
      <Box center flex={1}>
        <Text>{t('errorLoading')}</Text>
      </Box>
    );
  }

  return (
    <Box color="white" style={{ flex: 1 }}>
      <Header
        title={t('eMarket')}
        titleAlignment="left"
        style={{
          paddingTop: insets.top + normalize(6),
          paddingBottom: normalize(14),
          paddingHorizontal: normalize(16),
        }}
      />
      <Box m={normalize(16)}>
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      </Box>
      <FilterPicker onPress={() => setFilterModalVisible(true)} />
      <CardList
        products={mappedProducts}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
        onPress={handleNavigateToDetail}
        loadMore={handleLoadMore}
        isLoading={isLoading}
      />
      <FilterModal
        visible={isFilterModalVisible}
        onClose={handleCloseModal}
        onApply={handleApplyFilters}
        availableBrands={availableBrands}
        availableModels={availableModels}
      />
    </Box>
  );
};
