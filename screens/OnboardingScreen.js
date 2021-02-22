import 'react-native-gesture-handler';
import React from 'react';
import { View, Text,  Image, StyleSheet, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';




const Skip = ({ ...props}) =>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);
const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);





const OnBoardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
     
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
            pages={[
             {
                backgroundColor: '#fd5f57',
                image: <Image source={require('../assets/Tasks.png')} resizeMode="contain" style={{ width: 680, height: 800 }} />,
              
             },
             {
                backgroundColor: '#fb8856',
                image: <Image source={require('../assets/forms.png')} resizeMode="contain" style={{ width: 700, height: 800 }} />,
          
             },
             {
                backgroundColor: '#D6C5B6',
                image: <Image source={require('../assets/saved.png')} resizeMode="contain" style={{ width: 700, height: 800 }} />,
               
             },
            ]}
            />
    );
    };


export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
       
      },
    });

