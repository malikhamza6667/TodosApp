import {Text, TouchableOpacity, View} from 'react-native';
import {useStyles} from './styles';
import {Add} from '@assets';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants';
import React from 'react';

const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return 'Good Morning 🌅 ';
  } else if (currentHour < 18) {
    return 'Good Afternoon 🌞 ';
  } else {
    return 'Good Evening 🌙 ';
  }
};

export const HomeHeader = React.memo(() => {
  const {styles, iconColor, iconSize} = useStyles();
  const navigation:any=useNavigation()
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{getGreeting()}</Text>

      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.ADDTODO)}>
        <Add height={iconSize} width={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
})
