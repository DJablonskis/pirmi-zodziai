import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./screens/homeScreen";
import GameScreen from "./screens/gameScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Available decks" }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: "Available decks" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
