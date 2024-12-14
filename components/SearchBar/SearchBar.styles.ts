import { fonts, fontWeights, rgba } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: rgba('black', 0.03),
    borderRadius: normalize(8),
  },
  icon: {
    marginRight: normalize(8),
    marginLeft: normalize(12),
  },
  input: {
    flex: 1,
    fontSize: fonts.regular.fontSize,
    paddingVertical: normalize(9),
    fontWeight: fontWeights.regular,
  },
});
