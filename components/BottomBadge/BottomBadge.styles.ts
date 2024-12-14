import { fonts, fontWeights } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flex: 0.9,
  },
  buttonText: {
    fontSize: fonts.small.fontSize,
    fontWeight: fontWeights.bold,
  },
});
