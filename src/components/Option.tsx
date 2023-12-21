import React,{useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';

function Option(props:any): JSX.Element {

    return(
        <View style={{padding:4}}>
            <Text style={{borderRadius: 8,backgroundColor: props.status == null ? 'rgba(255, 255, 255, 0.50)' : props.status ? "#28B18F" : "rgba(220, 95, 95, 0.70)",color:"#fff",fontSize:17,fontWeight:'500',textShadowOffset:{height:1,width:2},textShadowRadius:1.5,textShadowColor:'rgba(0, 0, 0, 0.45)',padding:12}}>{props.option}</Text>
        </View>
      
  
    )
  }
  export default Option;