import {hp} from '@utils';
import {TextInput, View} from 'react-native';
import {useStyles} from './styles';
import React from 'react';

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
};
export const SearchBar: React.FC<SearchBarProps> =React.memo( ({value, onChange}) => {
  const {styles} = useStyles();
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.textInput}
        placeholder="Search a todo"
      />
    </View>
  );
})
