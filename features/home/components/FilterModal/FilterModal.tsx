import {
  Box,
  Button,
  Checkbox,
  RadioButton,
  SearchBar,
  Text,
} from '@/components';
import React, { useState } from 'react';
import { Modal, View, ScrollView, Pressable, Platform } from 'react-native';
import { styles } from './FilterModal.styles';
import { Product } from '@/features/home/service/products';
import { CloseIcon } from '@/assets/icons/CloseIcon';
import { normalize } from '@/utils/layout-utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { t } from '@/lang';

export enum SortOptions {
  OldToNew = 'Old to new',
  NewToOld = 'New to old',
  PriceHighToLow = 'Price high to low',
  PriceLowToHigh = 'Price low to High',
}

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: {
    sortBy: SortOptions | '';
    brands: Product['brand'][];
    models: Product['model'][];
  }) => void;
  availableBrands: Product['brand'][];
  availableModels: Product['model'][];
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  onApply,
  availableBrands,
  availableModels,
}) => {
  const insets = useSafeAreaInsets();
  const [selectedSort, setSelectedSort] = useState<SortOptions | ''>('');
  const [selectedBrands, setSelectedBrands] = useState<Product['brand'][]>([]);
  const [selectedModels, setSelectedModels] = useState<Product['model'][]>([]);
  const [brandSearchQuery, setBrandSearchQuery] =
    useState<Product['brand']>('');
  const [modelSearchQuery, setModelSearchQuery] =
    useState<Product['model']>('');

  const handleCheckboxChange = (
    value: Product['brand'] | Product['model'],
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const updatedSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(Array.from(new Set(updatedSelected)));
  };

  const applyFilters = () => {
    onApply({
      sortBy: selectedSort,
      brands: selectedBrands,
      models: selectedModels,
    });
    onClose();
  };

  const filteredBrands = availableBrands.filter((brand) =>
    brand.toLowerCase().includes(brandSearchQuery.toLowerCase()),
  );

  const filteredModels = availableModels.filter((model) =>
    model.toLowerCase().includes(modelSearchQuery.toLowerCase()),
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <Box style={styles.modalContainer}>
        {/* Header */}
        <Box
          p={normalize(16)}
          style={[styles.header, { paddingTop: insets.top }]}
          centerY
          color="white"
          row
        >
          <Pressable style={styles.closeButton} onPress={onClose}>
            <CloseIcon width={normalize(25)} height={normalize(25)} />
          </Pressable>
          <Text
            style={styles.title}
            weight={Platform.OS === 'android' ? 'bold' : 'regular'}
            variant="regularPlus"
            center
          >
            {t('filter')}
          </Text>
          <Box flex={1} />
        </Box>
        <Box flex={1} px={normalize(16)}>
          {/* Sort By */}
          <Box flex={1} centerY>
            <Box flex={2} centerY>
              <Text
                variant="tiny"
                weight={Platform.OS === 'android' ? 'bold' : 'light'}
                color="black"
              >
                {t('sortBy')}
              </Text>
            </Box>
            <Box flex={5} px={normalize(15)}>
              <RadioButton
                options={Object.values(SortOptions)}
                selected={selectedSort}
                onSelect={(value) => setSelectedSort(value as SortOptions)}
              />
            </Box>
          </Box>
          <View style={styles.separator} />
          {/* Brand */}
          <Box flex={1}>
            <Box flex={2} centerY>
              <Text
                variant="tiny"
                weight={Platform.OS === 'android' ? 'bold' : 'light'}
                color="black"
              >
                {t('brand')}
              </Text>
            </Box>
            <Box flex={5} px={normalize(15)}>
              <SearchBar
                placeholder={t('search')}
                value={brandSearchQuery}
                onChangeText={(text) => setBrandSearchQuery(text)}
              />
              <ScrollView style={styles.subtitle}>
                <Checkbox
                  options={filteredBrands}
                  selected={selectedBrands}
                  onChange={(value) =>
                    handleCheckboxChange(
                      value,
                      selectedBrands,
                      setSelectedBrands,
                    )
                  }
                />
              </ScrollView>
            </Box>
          </Box>
          <View style={styles.separator} />
          {/* Model */}
          <Box flex={1}>
            <Box flex={2} centerY>
              <Text
                variant="tiny"
                weight={Platform.OS === 'android' ? 'bold' : 'light'}
                color="black"
              >
                {t('model')}
              </Text>
            </Box>
            <Box flex={5} px={normalize(15)}>
              <SearchBar
                placeholder={t('search')}
                value={modelSearchQuery}
                onChangeText={(text) => setModelSearchQuery(text)}
              />
              <ScrollView style={styles.subtitle}>
                <Checkbox
                  options={filteredModels}
                  selected={selectedModels}
                  onChange={(value) =>
                    handleCheckboxChange(
                      value,
                      selectedModels,
                      setSelectedModels,
                    )
                  }
                />
              </ScrollView>
            </Box>
          </Box>
          <Box flex={0.5} centerY>
            <Button onPress={applyFilters} title="Apply" />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
