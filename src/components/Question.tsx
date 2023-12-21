import React,{useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';

function Question(props:any): JSX.Element {

    return(
      <View style={{paddingVertical:80}}>
        <Text style={{marginBottom:100,borderRadius:8,padding:6,color:'#fff',fontSize:22,fontWeight:'500',backgroundColor:'rgba(0, 0, 0, 0.60)'}}>{props.question}</Text>
      </View>
  
    )
  }
  export default Question;