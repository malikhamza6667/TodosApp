import {useAppTheme} from '@contexts';
import {hp} from '@utils';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();

  const styles = StyleSheet.create({
    wrapper: {
      margin: hp(1),
    },
    textInput: {
      borderWidth: 2,
      height: hp(4.5),
      marginHorizontal: hp(1),
      borderRadius: hp(3),
      paddingHorizontal: hp(2),
      borderColor: colors.borderColor,
      color: colors.textColor,
      fontFamily: "Poppins-Regular"
    },
  });
  return {styles}
};
