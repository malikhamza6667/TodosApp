import {UseTodosList} from '@services';
import {useCallback, useEffect, useMemo, useState} from 'react';

export const useHome = () => {
  const [search, setSearch] = useState('');
  const {
    filterTodos,
    fetchRemoteTodos,
    filterTodosByTag,
    selectFilter,
    selectedFilter,
    filteredTodos,
    todos,
  } = UseTodosList();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (selectedFilter) {
      case 'My All':
        filterTodosByTag('My All');
        break;
      case 'My Completed':
        filterTodosByTag('My Completed');
        break;
      case 'My Remaining':
        filterTodosByTag('My Remaining');
        break;
      case 'Remote':
        (async () => {
          setLoading(true);
          await fetchRemoteTodos();
          setLoading(false);
        })();
        break;
      default:
        break;
    }
  }, [selectedFilter, todos]);

  const onSearch = useCallback(
    (val: string) => {
      filterTodos(val);
      setSearch(val);
    },
    [selectedFilter, search],
  );

  return useMemo(
    () => ({
      search,
      onSearch,
      loading,
      selectFilter,
      selectedFilter,
    }),
    [search, onSearch, selectFilter, selectedFilter],
  );
};
