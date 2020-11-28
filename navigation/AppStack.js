import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainTabsScreen from "../screens/MainTabsScreen";
import AfoneFormScreen from "../screens/AfoneFormScreen";
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SafetyHub" component={MainTabsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
