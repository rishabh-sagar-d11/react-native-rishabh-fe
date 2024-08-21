import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../Colors";

export const Header = () => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate("add");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>My Todos</Text>
      <Pressable style={styles.Press} onPress={handlePress}>
        <Text style={styles.Plus}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  Press: {
    backgroundColor: COLORS.Primary,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  Plus: {
    color: "white",
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center",
    marginVertical: "auto",
    marginHorizontal: "auto",
  },
  Heading: {
    color: "black",
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center",
    marginVertical: "auto",
    marginHorizontal: "auto",
    fontWeight: "600",
  },
});
