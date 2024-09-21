import {useAppTheme} from '@contexts';
import React from 'react';
import { SafeAreaView, View} from 'react-native';
import {ScreenWrapperTypes} from '../types'
import { useStyles } from './styles';

export const ScreenWrapper: React.FC<ScreenWrapperTypes> = ({
  style,
  children,
}) => {
  const {styles} = useStyles();
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

export const SafeAreaWrapper: React.FC<ScreenWrapperTypes> = ({
    style,
    children,
  }) => {
    const {styles} = useStyles();
    return <SafeAreaView style={[styles.wrapper, style]}>{children}</SafeAreaView>;
  };
  