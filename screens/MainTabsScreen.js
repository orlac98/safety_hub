import { NavigationContainer } from '@react-navigation/native';
import  React from 'react';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


//icon fonts

import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileScreen from './ProfileScreen';
import TasksScreen from './TasksScreen';
import FilesScreen from './FilesScreen';
import FormsScreen from './FormsScreen';
import LearnScreen from "./LearnScreen";

// const TasksStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabsScreen = () => (
  <Tab.Navigator
    initialRouteName="Tasks"
    activeColor="#EE6457"
    inactiveColor="#EE6457"
    barStyle={{ backgroundColor: "#FDF5F4" }}
  >
    <Tab.Screen
      name="Tasks"
      component={TasksScreen}
      options={{
        tabBarLabel: "Tasks",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="tasks" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="Forms"
      component={FormsScreen}
      options={{
        tabBarLabel: "Forms",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="file-document-box" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Files"
      component={FilesScreen}
      options={{
        tabBarLabel: "Files",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="file" color={color} size={22} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="user-alt" color={color} size={24} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabsScreen;

// const TasksStackScreen = ({navigation}) => (
//     <TasksStack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#FF7272',
//               },
//               headerTintColor: '#fff',
//               headerTintStyle: {
//                 fontWeight: 'bold'
//               }
//               }}>
//             <TasksStack.Screen name="HomeScreen" component={HomeScreen} 
//             options={{
//            title: 'Overview',
          
//             }} />
            
//           </TasksStack.Navigator>
//     );
    
//     const ProfileStackScreen = ({navigation}) => (
//       <ProfileStack.Navigator screenOptions={{
//               headerStyle: {
//                   backgroundColor: '#FF7272',
//                 },
//                 headerTintColor: '#fff',
//                 headerTintStyle: {
//                   fontWeight: 'bold'
//                 }
//                 }}>
    
//               <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}
//                options={{
//              headerLeft: () => (
//                <Ionicons.Button name="ion-android-contact" size={25}
//                backgroundColor="#009387" onPress={() => navigation.openDrawer
//                ()}></Ionicons.Button>
//              )
      
//               }} />
              
//             </ProfileStack.Navigator>
//       );
//       const FormsStackScreen = ({navigation}) => (
//         <FormsStack.Navigator screenOptions={{
//                 headerStyle: {
//                     backgroundColor: '#FF7272',
//                   },
//                   headerTintColor: '#fff',
//                   headerTintStyle: {
//                     fontWeight: 'bold'
//                   }
//                   }}>
      
//                 <FormsStack.Screen name="Forms" component={FormsScreen}
//                  options={{
//                headerLeft: () => (
//                  <Ionicons.Button name="ion-android-contact" size={25}
//                  backgroundColor="#009387" onPress={() => navigation.openDrawer
//                  ()}></Ionicons.Button>
//                )
        
//                 }} />
                
//               </FormsStack.Navigator>
//         );