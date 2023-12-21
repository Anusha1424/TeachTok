import React,{useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';

function Description(props:any): JSX.Element {

    return(
      <View style={{bottom:70,paddingVertical:24}}>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'600'}}>{props.name}</Text>
        <Text style={{paddingVertical:6,color:'#fff',fontSize:13,fontWeight:'400'}}>{props.description}</Text>

      </View>
  
    )
  }
  export default Description;