import React,{Component} from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView, ActivityIndicator, View
  
} from "react-native";
import { ListItem } from 'react-native-elements';
import firebase from '../database/firebaseDb';
import {Container,Card,UserInfo,UserImg, UserName, FileInfo,PostTime, PostText, PostImg} from '../styles/filesStyles';
// import PostCard from '../components/PostCard';




class FilesScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Todo');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { Title, Body, Date } = res.data();
      userArr.push({
        key: res.id,
        res,
        Title,
        Body,
        Date,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
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
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.Title}
                  // subtitle={item.Body}
                  onPress={() => {
                    this.props.navigation.navigate('FileDetailScreen', {
                      userkey: item.key
                    });
                  }}/>
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
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

// export default FilesScreen;




















// const FilesScreen = () => {
//   return (
//     <Container> 
//       <Card>
//         <UserInfo>
//         <UserImg source={require('../assets/ProfilePic_001.png')}/>
//         <FileInfo>
//         <UserName >Orla Connelly </UserName>
//         <PostTime>4 hours</PostTime>
//         </FileInfo>
//         </UserInfo>
//         <PostText>this is a test</PostText>
//         <PostImg source={require('../assets/logo.png')}/>
      

//       </Card>
//     </Container>
//     );
// } 

export default FilesScreen;
{/* <FlatList
data={Posts}
renderItem={({item}) => <PostCard item={item} />}
keyExtractor={item=>item.id}
showsHorizontalScrollIndicator={false}
/> */}