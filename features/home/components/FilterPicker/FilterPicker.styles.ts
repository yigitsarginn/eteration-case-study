import { colors, fonts, fontWeights } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingBottom: normalize(10),
  },
  button: {
    backgroundColor: colors.lightGrey,
    borderRadius: 0,
  },
  buttonText: {
    paddingHorizontal: normalize(30),
    fontSize: fonts.xSmall.fontSize,
    color: colors.black,
    fontWeight: Platform.OS === 'android' ? 'bold' : 'medium',
  },
});
