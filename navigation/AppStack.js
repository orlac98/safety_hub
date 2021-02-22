import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainTabsScreen from "../screens/MainTabsScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
       name="SafetyHub" 
      component={MainTabsScreen}
       options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#fb8856',
          fontFamily: 'Comfortaa-Bold',
          fontSize: 24,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        }
      }}
       />
    </Stack.Navigator>
  );
};

export default AppStack;
