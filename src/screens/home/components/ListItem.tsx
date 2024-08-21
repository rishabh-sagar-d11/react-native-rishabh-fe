import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { type Todo } from "../../../DummyData";
import { COLORS } from "../../../Colors";
import { useTodos } from "../../../hooks/useTodos";
import { useCallback } from "react";

export const ListItem = ({ item, index }: { item: Todo; index: number }) => {
  const { todoList, setTodoList } = useTodos();
  const handleCheck = useCallback(() => {
    setTodoList((prev) => {
      const newList = [...prev];
      newList[index].completed = !newList[index].completed;
      return newList;
    });
  }, [item, setTodoList, index]);

  const handleDelete = useCallback(() => {
    setTodoList((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  }, [index, item, todoList, setTodoList]);

  return (
    <View
      style={[
        styles.container,
        item.completed == true
          ? styles.cardColorCompleted
          : styles.cardColorDefault,
      ]}
    >
      <View style={styles.Rows}>
        <Pressable
          style={[
            styles.CheckBox,
            item.completed == true ? styles.checked : styles.unchecked,
          ]}
          onPress={handleCheck}
        />
        <Text style={styles.data}>{item.data}</Text>
      </View>
      <Pressable style={styles.Dustbin} onPress={handleDelete}>
        <Image
          style={styles.Dustbin}
          source={require("./../assets/dustbin.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: "auto",
    borderRadius: 12,
    elevation: 4,
    borderWidth: 2,
    shadowColor: COLORS.Foreground,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: "#D3D3D3",
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "90%",
    justifyContent: "space-between",
  },
  Rows: {
    flexDirection: "row",
  },
  CheckBox: {
    borderRadius: 999,
    width: 24,
    height: 24,
  },
  Dustbin: {
    height: 30,
    width: 30,
  },
  data: {
    marginLeft: 10,
    fontSize: 20,
    width: "80%",
    fontWeight: "300",
  },
  cardColorCompleted: {
    backgroundColor: COLORS.Muted,
  },
  cardColorDefault: {
    backgroundColor: COLORS.Background,
  },
  checked: {
    backgroundColor: COLORS.Primary,
    borderWidth: 1,
    borderColor: "black",
  },
  unchecked: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D3D3D3",
  },
});
