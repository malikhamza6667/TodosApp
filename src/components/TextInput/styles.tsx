import {useAppTheme} from '@contexts';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {hp} from '@utils';

export const useStyles = () => {
  const {colors} = useAppTheme();
const placeHolderColor= colors.textColor
const {fontScale}=useWindowDimensions()
  const styles = StyleSheet.create({
    wrapper: {
      marginVertical: hp(1),
      marginHorizontal: hp(2),
    },
    title: {
      fontFamily: 'Poppins-SemiBold',
      marginVertical: hp(1),
      color: colors.primaryForeground,
      fontSize:18/fontScale,
    },
    textInput: {
      fontFamily: 'Poppins-Regular',
      borderWidth: 1,
      padding: hp(1),
      borderRadius: hp(1),
      borderColor: colors.borderColor,
      color: colors.textColor
    },
    error:{
        fontFamily: 'Poppins-SemiBold',
        color: colors.error,
        marginTop: hp(1)

    },
    dateText:{
        fontFamily: 'Poppins-Regular',
        color: colors.textColor
    }
  });

  return {styles,placeHolderColor};
};
