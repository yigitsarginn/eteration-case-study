import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  favoriteButton: {
    position: 'absolute',
    top: normalize(6),
    right: normalize(4),
  },
});
