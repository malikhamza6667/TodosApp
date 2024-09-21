import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {TodoItem} from 'src/components/types';

type FilterTypes = 'My All' | 'My Remaining' | 'My Completed' | 'Remote';

type State = {
  todos: TodoItem[];
  filteredTodos: TodoItem[];
  remoteTodos: TodoItem[];
  selectedFilter: FilterTypes;
};

type Actions = {
  addTodo: (item: TodoItem) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number) => void;
  filterTodos: (text: string) => void;
  fetchRemoteTodos: () => void;
  filterTodosByTag: (tag: string) => void;
  selectFilter: (filter: FilterTypes) => void;
};

export const UseTodosList = create<State & Actions>()(
  persist(
    (set, get) => ({
      // Initial state
      todos: [],
      filteredTodos: [],
      remoteTodos: [],
      selectedFilter: 'My All',

      selectFilter(item) {
        const {remoteTodos,todos}=get()
        set({selectedFilter: item});
        let todosToFilter = item === 'Remote' ? remoteTodos : todos;

  set({ filteredTodos: todosToFilter });
      },

      async fetchRemoteTodos() {
        try {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos',
          );
          const result = response.data?.splice(0, 20);
          const dateAddedResults = result?.map((item: any) => ({
            ...item,
            date: new Date().toDateString(),
          }));
          dateAddedResults.sort(
            (a: TodoItem, b: TodoItem) =>
              new Date(b.date!).getTime() - new Date(a.date!).getTime(),
          );
          set({filteredTodos: dateAddedResults, remoteTodos: dateAddedResults});
        } catch (error) {
          console.log('[Err making the API call]', error);
        }
      },
      addTodo(item) {
        const {todos, selectedFilter} = get();
        const findIndex = todos.findIndex(todo => todo.title === item.title);

        if (findIndex !== -1) {
          const updatedTodos = [...todos];
          updatedTodos[findIndex] = {...updatedTodos[findIndex], ...item};
          set({todos: updatedTodos});
        } else {
          set({todos: [...todos, item]});
        }
      },
      deleteTodo(id) {
        const {todos, selectedFilter, remoteTodos} = get();
        const parentTodos = selectedFilter === 'Remote' ? remoteTodos : todos;
        const updatedTodos = parentTodos.filter(item => item.id !== id);
        set({todos: updatedTodos, filteredTodos: updatedTodos});
      },
      updateTodo(id) {
        const {todos, selectedFilter, remoteTodos} = get();
        const parentTodos = selectedFilter === 'Remote' ? remoteTodos : todos;
        const findItemIdx = parentTodos?.findIndex(item => item?.id === id);
        if (findItemIdx === -1) return;

        const updatedTodos = [...parentTodos];
        updatedTodos[findItemIdx] = {
          ...updatedTodos[findItemIdx],
          completed: !updatedTodos[findItemIdx].completed,
        };
        set({todos: updatedTodos});
      },
      filterTodos(val) {
        const {todos, remoteTodos, selectedFilter} = get();
        const parentTodos = selectedFilter === 'Remote' ? remoteTodos : todos;
        const text = val.toLowerCase();

        let filtered = parentTodos;

        // Filter by selected filter type
        if (selectedFilter === 'My Completed') {
          filtered = filtered.filter(item => item.completed);
        } else if (selectedFilter === 'My Remaining') {
          filtered = filtered.filter(item => !item.completed);
        }

        // Additional filtering based on search text
        if (text) {
          filtered = filtered.filter(
            item =>
              item?.title.toLowerCase().includes(text) ||
              item?.description?.toLowerCase().includes(text),
          );
        }

        set({filteredTodos: filtered});
      },

      filterTodosByTag(tag) {
        const {todos} = get();
        let filtered: TodoItem[] = [];

        if (tag === 'My Completed') {
          filtered = todos.filter(item => item.completed);
        } else if (tag === 'My Remaining') {
          filtered = todos.filter(item => !item.completed);
        } else if (tag === 'My All') {
          filtered = todos;
        }

        set({filteredTodos: filtered});
      },
    }),
    {
      name: 'todos-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
