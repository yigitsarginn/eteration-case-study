import { colors } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(8),
  },
  checkboxSquare: {
    width: normalize(16),
    height: normalize(16),
    borderWidth: 2,
    borderColor: colors.blue,
    marginRight: normalize(8),
    borderRadius: normalize(4),
  },
  checkboxSquareSelected: {
    backgroundColor: colors.blue,
  },
});
