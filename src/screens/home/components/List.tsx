import React, { memo, useCallback } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useTodos } from "../../../hooks/useTodos";
import { ListItem } from "./ListItem";
import { Todo } from "../../../DummyData";

export const List = memo(() => {
  const { todoList } = useTodos();

  const renderView = useCallback(
    ({ item, index }: { item: Todo; index: number }) => {
      return <ListItem item={item} index={index} />;
    },
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        keyExtractor={(data) => data.id}
        renderItem={renderView}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
