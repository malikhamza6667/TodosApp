import {useAppTheme} from '@contexts';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {hp} from '@utils';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const ActivityIndicatorColor= colors.primarybackground
  const {fontScale}=useWindowDimensions()
  const styles = ({disabled}:{disabled?:boolean})=> StyleSheet.create({
    buttonWrapper: {
      marginVertical: hp(1),
      marginHorizontal: hp(2),
      padding:hp(1.5),
      justifyContent:"center",
      backgroundColor:disabled ? colors.borderColor: colors.buttonColor,
      borderRadius: hp(5),
      alignItems:"center"
    },
    title: {
      fontFamily: 'Poppins-Regular',
      color: colors.textColor,
      fontSize:16/fontScale,
    },
  });

  return {styles,ActivityIndicatorColor};
};
