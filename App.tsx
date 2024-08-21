import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { type TodoContextType, TodosContext } from "./src/context/Todos";
import { useMemo, useState } from "react";
import { type Todo, Todos } from "./src/DummyData";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Stack from "./src/Stack";

export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>(Todos);

  const contextValue = useMemo<TodoContextType>(() => {
    return {
      todoList,
      setTodoList,
    };
  }, [todoList, setTodoList]);
  return (
    <TodosContext.Provider value={contextValue}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Stack />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </TodosContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
