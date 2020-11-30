import React from "react";
import { ImageBackground, View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import CardView from 'react-native-cardview'

const FormsScreen = ({ navigation }) => {
  return (
    
    <SafeAreaView style={styles.safeAreaView}>
       
        <View style={styles.container}>
        <ImageBackground source={require('../assets/coral.png')} style={styles.image}>
          <View flexDirection="row">
          
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <View>
               
                <Text style={styles.text}>Construction</Text>
                
              </View>
            </CardView>
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Asbestos</Text>
            </CardView>
            
          </View>
          <View flexDirection="row">
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Lifting Equiptment</Text>
            </CardView>
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Work At Height</Text>
            </CardView>
          </View>
          <View flexDirection="row">
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Quarries</Text>
            </CardView>
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Covid-19</Text>
            </CardView>
          </View>
          <View flexDirection="row"  >
            
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Weekly Checklist</Text>
            </CardView>
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={20}
              style={styles.card}
            >
              <Text style={styles.text}>Tool Box Talk</Text>
            </CardView>
          </View>
          </ImageBackground>
        </View>
       
      </SafeAreaView>
     
      );
    }
  

export default FormsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#FDF5F4",
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 30
  },
  text: {
    textAlign: 'center',
    color: '#034C5F',
    margin: 30,
    height: 55,
    fontWeight: 'bold',
    fontSize: 14
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15
  },
  image: {
    flex: 1,
    width: '100%', height: '100%',
     resizeMode: "cover",
     justifyContent: "center"
  }
});



















// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FDF5F4",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
// });
