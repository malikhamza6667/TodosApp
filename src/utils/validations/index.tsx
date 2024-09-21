export const FormValidationsNewTodo={

    title:{
      required: 'Title is required',
      maxLength: { value: 15, message: 'Max 15 characters' },
      minLength: { value: 5, message: 'Min 5 characters' }
    },
  
    description:{
      required: 'Description is required',
      maxLength: { value: 150, message: 'Max 150 characters' },
      minLength: { value: 15, message: 'Min 15 characters' }
    },
  }
  