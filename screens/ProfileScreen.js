import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';



const ProfileScreen = () => {
  const {user, logout} = useContext(AuthContext);
    return (
      <View style={StyleSheet.container}>
      <Text style= {StyleSheet.text}>Welcome {user.uid}</Text>
      <FormButton buttonTitle='Logout' onPress= {() => logout ()} />
  </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDF5F4",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
