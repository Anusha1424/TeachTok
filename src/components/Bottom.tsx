import React,{useEffect} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

function Bottom(props:any): JSX.Element {

    return(
      <View style={{paddingHorizontal:16,bottom:50,flexDirection:'row',backgroundColor: '#161616'}}>
        <Image style={{alignSelf:"center"}} source={require("../assets/arrow.png")} />
        <Text style={{flex:1,color:"#fff",fontSize:13,fontWeight:'600',padding:12}}>Playlist . {props.playlist}</Text>
        <Image style={{alignSelf:"center",justifyContent:"flex-end"}} source={require("../assets/playlist.png")}/>

      </View>
    )
  }
  export default Bottom;