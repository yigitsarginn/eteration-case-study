import { colors, fonts, fontWeights, rgba } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
    marginBottom: normalize(10),
  },
  buttonText: {
    fontSize: fonts.small.fontSize,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  incDecButton: {
    backgroundColor: rgba('lightGrey', 0.6),
    width: normalize(45),
    height: normalize(40),
  },
  quantity: {
    width: normalize(55),
    height: normalize(45),
  },
  counterWrapper: {
    justifyContent: 'flex-end',
  },
});
