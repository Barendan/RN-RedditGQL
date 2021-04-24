import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Posts from "../screens/Posts";
import PostDetail from "../screens/PostDetail";

const Stack = createStackNavigator();

// Navigation Container hosts app navigation context
// Stack Navigator hosts a collection of screens

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Detail" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
