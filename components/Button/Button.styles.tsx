import { StyleSheet } from 'react-native';

import { colors } from '@/theme';
import { normalize } from '@/utils/layout-utils';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(11),
    borderRadius: normalize(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});
