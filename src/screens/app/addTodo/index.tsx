import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Button, RNDatePicker, TextInput} from '@components';
import {FormValidationsNewTodo} from '@utils';
import {useAddTodo} from '@hooks';
import {ScreenWrapper} from '@layouts';
import {useStyles} from './styles';
import {Cross} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '@constants';

const AddTodo = React.memo(() => {
  const {control, formState, handleSubmit, addNewTodo, loading} = useAddTodo();
  const {styles, ICONSIZE, ICONCOLOR} = useStyles();
  const navigation: any = useNavigation();

  const handleNavigateHome = () => navigation.navigate(ROUTES.HOME);

  return (
    <ScreenWrapper>
      <View style={styles.headerView}>
        <Text style={styles.title}>Add A New Todo</Text>
        <TouchableOpacity
          onPress={handleNavigateHome}
          accessible={true}
          accessibilityLabel="Go back to home">
          <Cross height={ICONSIZE} width={ICONSIZE} color={ICONCOLOR} />
        </TouchableOpacity>
      </View>

      <View style={styles.bodyView}>
        <TextInput
          name="title"
          rules={FormValidationsNewTodo.title}
          label="Title"
          control={control}
          placeholder="Name your todo (max 15 characters)"
        />
        <TextInput
          name="description"
          rules={FormValidationsNewTodo.description}
          multiline
          label="Description"
          control={control}
          placeholder="Add a short desc"
        />
        <RNDatePicker label="Date" name="datepicker" control={control} />

        <View style={styles.buttonView}>
          <Button
            title="Add Todo"
            disabled={!formState.isValid || loading}
            loading={loading}
            onPress={handleSubmit(addNewTodo)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
});

export default AddTodo;
