import { colors, fonts, fontWeights, rgba } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
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
