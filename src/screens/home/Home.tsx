import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "./components/List";
import { Header } from "./components/Header";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
