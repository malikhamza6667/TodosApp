import {Controller} from 'react-hook-form';
import {View, Text, TextInput as RNTextInput} from 'react-native';
import {AppTextInputType} from '../types';
import {useStyles} from './styles';
import React from 'react';
export const TextInput = React.memo(
  ({
    control,
    rules,
    name,
    label,
    placeholder,
    isEditable,
    hidePassword,
    multiline,
  }: AppTextInputType) => {
    const {styles, placeHolderColor} = useStyles();
    return (
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: {value, onChange, onBlur, disabled},
          fieldState: {error},
        }) => {
          return (
            <View style={styles.wrapper}>
              <View>
                {label && <Text style={styles.title}>{label}</Text>}
                <RNTextInput
                  value={value}
                  multiline={multiline ?? false}
                  style={styles.textInput}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  placeholderTextColor={placeHolderColor}
                  editable={isEditable ?? true}
                  secureTextEntry={hidePassword}
                />
              </View>
              {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
          );
        }}
      />
    );
  },
);
