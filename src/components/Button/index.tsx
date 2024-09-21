import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {useStyles} from './styles';
import {ButtonPropsWithIcon, ButtonPropsWithTitle} from '../types';

export const Button: React.FC<ButtonPropsWithTitle | ButtonPropsWithIcon> = 
React.memo(



({
  title,
  Icon,
  onPress,
  loading,
  disabled,
}) => {
  const {styles, ActivityIndicatorColor} = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      accessible={true}
      style={styles({disabled}).buttonWrapper}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={ActivityIndicatorColor} />
      ) : (
        <>
          {title && !Icon && <Text style={styles({}).title}>{title}</Text>}
          {Icon && !title && <Icon />}
        </>
      )}
    </TouchableOpacity>
  );
})
