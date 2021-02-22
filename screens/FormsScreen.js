import React , { Component }from "react";
import { ImageBackground,TextInput, ScrollView, View,ActivityIndicator,Pressable, Modal ,Alert, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import CardView from 'react-native-cardview'
import firebase from '../database/firebaseDb';



class FormsScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Todo');
    this.state = {
      Title: '',
      Body: '',
      Date: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeTodo() {
    if(this.state.Title === ''){
     alert('Title')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        Title: this.state.Title,
        Body: this.state.Body,
        Date: this.state.Date,
      }).then((res) => {
        this.setState({
          Title: '',
          Body: '',
          Date: '',
          isLoading: false,
        });
        this.props.navigation.navigate('FilesScreen')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Title'}
              value={this.state.Title}
              onChangeText={(val) => this.inputValueUpdate(val, 'Title')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Body'}
              value={this.state.Body}
              onChangeText={(val) => this.inputValueUpdate(val, 'Body')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Date'}
              value={this.state.Date}
              onChangeText={(val) => this.inputValueUpdate(val, 'Date')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Task'
            onPress={() => this.storeTodo()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})































// import Modal from 'react-native-modal';

// const FormsScreen = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//      <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>

     
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

export default FormsScreen;
//     <SafeAreaView style={styles.safeAreaView}>
       
//         <View style={styles.container}>
//         <ImageBackground source={require('../assets/bg1.png')} style={styles.image}>
//           <View flexDirection="row">
         
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
            
//               <View >
               
//                 <Text style={styles.text}>Construction</Text>
                
//               </View>
              
//             </CardView>
           
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Asbestos</Text>
//             </CardView>
            
//           </View>
//           <View flexDirection="row">
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Lifting Equiptment</Text>
//             </CardView>
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Work At Height</Text>
//             </CardView>
//           </View>
//           <View flexDirection="row">
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Quarries</Text>
//             </CardView>
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Covid-19</Text>
//             </CardView>
//           </View>
//           <View flexDirection="row"  >
            
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Weekly Checklist</Text>
//             </CardView>
//             <CardView
//               cardElevation={7}
//               cardMaxElevation={7}
//               cornerRadius={20}
//               style={styles.card}
//             >
//               <Text style={styles.text}>Tool Box Talk</Text>
//             </CardView>
//           </View>
//           </ImageBackground>
//         </View>
       
//       </SafeAreaView>
     
//       );
//     }
  

// export default FormsScreen;

// const styles = StyleSheet.create({
//   safeAreaView: {
//     flex: 1
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#Fff",
//   },
//   card: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     flex: 1,
//     marginTop: 30,
//     margin: 20
//   },
//   text: {
//     textAlign: 'center',
//     color: '#034C5F',
//     margin: 30,
//     height: 55,
//     fontWeight: 'bold',
//     fontSize: 14
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 15
//   },
//   image: {
//     flex: 1,
//     width: '100%', height: '100%',
//      resizeMode: "cover",
//      justifyContent: "center"
//   }
// });



















// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FDF5F4",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
// });
