import { colors } from '@/theme';
import { moderateScale } from '@/utils/layout-utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: colors.white,
    marginVertical: moderateScale(7),
    marginHorizontal: moderateScale(10.5),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleWrapper: {
    height: moderateScale(50),
    marginTop: moderateScale(10),
  },
  price: {
    marginTop: moderateScale(15),
  },
});
