import {useAppTheme} from '@contexts';
import {hp} from '@utils';
import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {colors} = useAppTheme();
  const {fontScale} = useWindowDimensions();
  const iconColor = colors.textColor;
  const iconSize = hp(4);

  const styles = StyleSheet.create({
    wrapper: {
      margin: hp(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: 'Poppins-SemiBold',
      color: colors.textColor,
      fontSize: 20 / fontScale,
    },
  });

  return {styles, iconColor, iconSize};
};
