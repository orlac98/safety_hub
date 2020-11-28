import 'react-native-gesture-handler';
import React from 'react';
import { View, Text,  Image, StyleSheet, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


// const Dots = ({selected}) => {
//     let backgroundColor;

//     backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)' ;

//     return (
//         <view
//          style={{
//             width:6,
//             height:6,
//             marginHorizontal: 3,
//             backgroundColor
//             }}
//         />
//     );
    
// }

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
        // DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
            pages={[
             {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/1.png')} resizeMode="contain" style={{ width: 700, height: 800 }} />,
                // title: 'SafetyHub',
                // subtitle: 'Everything you need in one place',
             },
             {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/2.png')} resizeMode="contain" style={{ width: 700, height: 800 }} />,
                // title: 'Onboarding',
                // subtitle: 'Done with React Native Onboarding Swiper',
             },
             {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/3.png')} resizeMode="contain" style={{ width: 700, height: 800 }} />,
                // title: 'Onboarding',
                // subtitle: 'Done with React Native Onboarding Swiper',
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

