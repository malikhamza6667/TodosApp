import {Text, View, TouchableOpacity} from 'react-native';
import {TodoCardType, TodoItem} from '../types';
import React, {ElementType} from 'react';
import {CheckboxCheck, CheckboxUnchecked, Delete} from '@assets';
import {useStyles} from './styles';
import {SvgProps} from 'react-native-svg';
const ICONButton = ({
  onPress,
  Icon,
  IconColor,
}: {
  onPress: () => void;
  Icon: React.FC<SvgProps>;
  IconColor: string;
}) => {
  const {IconSize} =
  useStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon height={IconSize} color={IconColor} width={IconSize} />
    </TouchableOpacity>
  );
};
export const TodoCard: React.FC<TodoCardType> = React.memo(
  ({item, onPressComplete, onPressDelete}) => {
    const {styles, checkedColor, uncheckedColor, deleteColor} =
      useStyles();

  

    return (
      <View style={styles.wrapper}>
        {item?.userId ? (
          <View>
            <Text style={styles.dateMainText}>
              Online Todo :{' '}
              <Text style={styles.date}>You can't modify the Todo</Text>
            </Text>
          </View>
        ) : (
          <View style={styles.buttonRow}>
            <ICONButton
              IconColor={item?.completed ? checkedColor : uncheckedColor}
              onPress={() => onPressComplete!(item?.id)}
              Icon={item?.completed ? CheckboxCheck : CheckboxUnchecked}
            />
            <ICONButton
              IconColor={deleteColor}
              onPress={() => onPressDelete!(item?.id)}
              Icon={Delete}
            />
          </View>
        )}

        <View>
          <View style={styles.contentArea}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </View>
        {item?.userId ? (
          <Text style={styles.dateMainText}>
            Todo Id : <Text style={styles.date}> {item.id?.toString()}</Text>
          </Text>
        ) : (
          <Text style={styles.dateMainText}>
            Due on : <Text style={styles.date}> {item.date}</Text>
          </Text>
        )}
      </View>
    );
  },
);
