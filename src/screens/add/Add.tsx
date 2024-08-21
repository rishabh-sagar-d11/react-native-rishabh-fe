import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTodos } from "../../hooks/useTodos";
import { useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { COLORS } from "../../Colors";

export const Add = () => {
  const { setTodoList } = useTodos();
  const [textValue, setTextValue] = useState<string>("");
  const navigation = useNavigation();

  const handleAdd = () => {
    setTodoList((prev) => {
      return [
        ...prev,
        {
          id: Math.floor(Math.random() * 9999999 + 2).toString(),
          completed: false,
          data: textValue,
        },
      ];
    });
    navigation.dispatch(StackActions.popToTop());
  };

  const handleSubmit = (event: any) => {
    if (event.nativeEvent.key == "Enter") {
      event.preventDefault();
      handleAdd();
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Add Todo</Text>
      </View>
      <TextInput
        value={textValue}
        onChangeText={(text: string) => setTextValue(text)}
        placeholder="what do you want to do?"
        onKeyPress={(event) => handleSubmit(event)}
        style={styles.inputStyle}
      />
      <Pressable style={styles.Press} onPress={handleAdd}>
        <Text style={styles.Click}>Add to List</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  textStyle: {
    marginHorizontal: "auto",
    marginVertical: 30,
    fontSize: 30,
    fontWeight: "600",
  },
  inputStyle: {
    marginHorizontal: "auto",
    width: "90%",
    marginVertical: 30,
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: COLORS.Foreground,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: "#D3D3D3",
    fontSize: 20,
    fontWeight: "300",
    backgroundColor: COLORS.Background,
  },
  Press: {
    backgroundColor: COLORS.Primary,
    width: "40%",
    padding: 10,
    borderRadius: 30,
    alignContent: "center",
    marginHorizontal: "auto",
  },
  Click: {
    color: "white",
    fontSize: 20,
    marginHorizontal: "auto",
  },
});
