import { ElementType } from 'react';
import {Control} from 'react-hook-form';

export type AppTextInputType = {
  label?: string;
  placeholder?: string;
  control: Control;
  rules: any;
  name: string;
  multiline?:boolean
  isEditable?: boolean;
  hidePassword?: boolean;
  
};



export type ButtonPropsWithTitle = {
  title: string;
  onPress: () => void;
  Icon?: never;
  loading?: boolean;
  disabled?:boolean
};

export type ButtonPropsWithIcon = {
  title?: never;
  onPress: () => void;
  Icon: ElementType;
  loading?: boolean;
  disabled?:boolean
};


export type TodoItem={
  id: number,
  title:string
  date?: string
  description?: string
  completed:boolean
  userId?:number
 
}

export type TodoCardType={
   item: TodoItem
   onPressComplete?:(id:number)=> void
   onPressDelete?: (id:number)=> void
}