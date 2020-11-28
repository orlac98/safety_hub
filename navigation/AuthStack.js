import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import MainTabsScreen from "../screens/MainTabsScreen";
import FormsScreen from "../screens/FormsScreen";
import AfoneFormScreen from "../screens/AfoneFormScreen";
import { GoogleSignin } from "@react-native-community/google-signin";

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    GoogleSignin.configure({
      webClientId:
        "1002480327063-aophnq4itar2toef00qaa5e34ismqkc0.apps.googleusercontent.com",
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="formScreen"
        component={FormsScreen}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="Af1Form"
        component={AfoneFormScreen}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: "#FDF5F4",
            shadowColor: "#f9fafd",
            elevation: 0,
          },

          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <AntDesign.Button
                name="arrowleft"
                size={25}
                backgroundColor="#FDF5F4"
                color="#333"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="MainTabsScreen"
        component={MainTabsScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
