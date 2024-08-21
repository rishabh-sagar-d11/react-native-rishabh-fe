import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/home";
import { Add } from "./screens/add";

const Stack = () => {
  const NativeStack = createNativeStackNavigator();
  return (
    <NativeStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <NativeStack.Screen name="home" component={Home} />
      <NativeStack.Screen name="add" component={Add} />
    </NativeStack.Navigator>
  );
};

export default Stack;
