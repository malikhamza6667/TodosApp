import {useAppTheme} from '@contexts';
import {hp, wp} from '@utils';
import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const IconSize = hp(5);
  const checkedColor = colors.success;
  const uncheckedColor = colors.borderColor;
  const deleteColor = colors.error;
  const {fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    wrapper: {
      elevation: 6,
      borderColor: colors.borderColor,
      marginVertical:hp(1),
      marginHorizontal: wp(2),
      padding: hp(1),
      borderRadius: hp(1),
      shadowColor: colors.borderColor,
      backgroundColor: colors.secondaryBackground,
    },

    title: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18 / fontScale,
      lineHeight:hp(5),
      color: colors.textColor,
      textTransform:"capitalize"
    },

    date: {
      fontFamily: 'Poppins-Bold',
      fontSize: 12 / fontScale,
      color: colors.success,


    },
    dateMainText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14 / fontScale,
        color: colors.error,
        marginHorizontal: hp(0.5),
  
      },
    desc: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14 / fontScale,
      color: colors.textColor,
    },
  
    buttonRow:{
        flexDirection:"row", 
        top:hp(1),
        marginVertical:hp(1),
        alignItems:"center",justifyContent:"space-between"},
        contentArea:{
           
            marginHorizontal:hp(0.5),
            marginVertical: hp(1)
        }
  });

  return {IconSize, checkedColor, uncheckedColor, styles, deleteColor};
};
