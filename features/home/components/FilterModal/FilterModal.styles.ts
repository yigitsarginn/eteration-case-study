import { colors } from '@/theme';
import { normalize } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  closeButton: {
    flex: 1,
  },
  title: {
    flex: 5,
  },
  subtitle: {
    marginTop: normalize(10),
  },
  header: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  applyButton: {
    backgroundColor: '#2A59FE',
    alignItems: 'center',
    borderRadius: 8,
  },
});
