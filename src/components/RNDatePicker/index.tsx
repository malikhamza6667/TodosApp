import {Alert, TouchableOpacity, View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TextInput} from '../TextInput';
import {
  Control,
  Controller,
  useController,
  useFormContext,
} from 'react-hook-form';
import React, {useState} from 'react';
import {useStyles} from '../TextInput/styles';
export type DatePickerTypes = {
  name: string;
  control: Control;
  placeHolder?: string;
  label: string;
};

export const RNDatePicker: React.FC<DatePickerTypes> = React.memo(({
  name,
  control,
  placeHolder,
  label,
}) => {
  const {styles} = useStyles();
  const [openPicker, setOpenPicker] = useState(false);

  return (
    <>
      <Controller
        control={control}
        rules={{required: true}}
        name={name}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
          return (
            <View style={styles.wrapper}>
              <View>
                {label && <Text style={styles.title}>{label}</Text>}
                <View style={styles.textInput}>
                  <TouchableOpacity onPress={() => setOpenPicker(true)}>
                    <Text style={styles.dateText}>{value ?? "Pick a Date"}</Text>
                  </TouchableOpacity>

                 {openPicker && <DatePicker
                    mode="date"
                    modal
                    open={openPicker}
                    date={new Date()}
                    onConfirm={date => {
                      onChange(date.toDateString());
                      setOpenPicker(false);
                    }}
                    onCancel={() => {
                      setOpenPicker(false);
                    }}
                  />}
                </View>
              </View>
              {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
          );
        }}
      />

      {/* <TouchableOpacity onPress={()=> {Alert.alert("Prrssed")}}>
      <TextInput
      name={name}
      rules={{required:true}}
      control={control}
      isEditable={false}
      placeholder={placeHolder ?? 'Pick a date'}
      />
    </TouchableOpacity> */}
    </>
  );
})
