import { colors } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(12),
  },
  radioCircle: {
    width: normalize(18),
    height: normalize(18),
    borderRadius: normalize(9),
    borderWidth: 2,
    borderColor: colors.blue,
    marginRight: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    backgroundColor: colors.blue,
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(4),
  },
});
