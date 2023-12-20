import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';

function Question(props:any): JSX.Element {

    return(
      <View style={{paddingVertical:40}}>
        <Text style={{marginBottom:100,borderRadius:5,padding:6,color:'#fff',fontSize:22,fontWeight:'500',backgroundColor:'rgba(0, 0, 0, 0.60)'}}>{props.question}</Text>
      </View>
  
    )
  }
  export default Question;