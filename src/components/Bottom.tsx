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

function Bottom(props:any): JSX.Element {

    return(
       
        <Text style={{backgroundColor: '#161616',color:"#fff",fontSize:13,fontWeight:'600',padding:12}}>Playlist . {props.playlist}</Text>
       
      
  
    )
  }
  export default Bottom;