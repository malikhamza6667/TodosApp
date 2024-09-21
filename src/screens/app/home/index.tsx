import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {HomeHeader, SearchBar, TodoCard} from '@components';
import {useHome} from '@hooks';
import {UseTodosList} from '@services';
import {useStyles} from './styles';
import {HeaderTags} from '@constants';
type FilterListTypes = {
  data: string[];
  selectedItem: string;
  onItemPress: (item: string) => void;
};
const Home = React.memo(() => {
  const {search, onSearch, loading, selectFilter, selectedFilter} = useHome();
  const {styles} = useStyles();
  const {deleteTodo, filteredTodos, updateTodo} = UseTodosList();

  const FiltersList = React.memo(
    ({data, selectedItem, onItemPress}: FilterListTypes) => {
      return (
        <FlatList
          data={data}
          contentContainerStyle={styles({}).container}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => onItemPress(item)}
              style={styles({selected: selectedItem === item}).optionView}>
              <Text style={styles({selected: selectedItem === item}).option}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      );
    },
  );
  return (
    <>
      <View>
        <HomeHeader />
        <SearchBar value={search} onChange={onSearch} />
        <FiltersList
          selectedItem={selectedFilter}
          onItemPress={(item: any) => selectFilter(item)}
          data={HeaderTags}
        />
      </View>
      {loading && <ActivityIndicator size={"large"} />}

      <FlashList
        ListEmptyComponent={() => {
          return (
            <View style={styles({}).emptyContainer}>
              <Text style={styles({}).emptyText}>No todos found</Text>
            </View>
          );
        }}
        data={filteredTodos}
        renderItem={({item}) => (
          <TodoCard
            onPressDelete={deleteTodo}
            onPressComplete={updateTodo}
            item={item}
          />
        )}
        estimatedItemSize={200}
      />
    </>
  );
});

export default Home;
