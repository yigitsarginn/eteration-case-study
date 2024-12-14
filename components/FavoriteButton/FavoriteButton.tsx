import { StarIcon } from '@/assets/icons/StarIcon';
import { colors } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './FavoriteButton.styles';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <TouchableOpacity
      onPress={onToggleFavorite}
      style={styles.favoriteButton}
      accessibilityRole="button"
    >
      <StarIcon
        width={normalize(24)}
        height={normalize(24)}
        color={isFavorite ? colors.yellow : colors.lightGrey}
      />
    </TouchableOpacity>
  );
};
