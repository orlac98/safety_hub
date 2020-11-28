import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FormsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>AF-1 Form</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate("../screens/AfoneFormScreen")}
      ></Button>
    </View>
  );
};

export default FormsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDF5F4",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
