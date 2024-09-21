import {ROUTES} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {UseTodosList} from '@services';
import { useMemo, useState} from 'react';
import {FieldValues, useForm} from 'react-hook-form';

export const useAddTodo = () => {
  const {control, formState, handleSubmit} = useForm({
    mode: 'all',
  });
  const [loading, setLoading] = useState(false);
  const {addTodo} = UseTodosList();
  const navigation: any = useNavigation();
  const addNewTodo = (formValues: FieldValues) => {
    try {
      if (loading) return;

      setLoading(true);
      const {title, description, datepicker} = formValues;

      let item = {
        title,
        description,
        id: new Date().getTime(),
        date: datepicker,
        completed: false,
      };
      addTodo(item);
    } catch (error) {
      console.log('[Err in Adding the Todo]', error);
    } finally {
      setLoading(false);
      navigation.navigate(ROUTES.HOME);
    }
  };

  return useMemo(
    () => ({control, formState, handleSubmit, loading, addNewTodo}),
    [control, formState, handleSubmit, addNewTodo, loading],
  );
};
