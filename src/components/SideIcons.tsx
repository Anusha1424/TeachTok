import React,{useEffect} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

function ImageTextComp(props:any): JSX.Element{
  return(
    <View style={{paddingTop:10,alignSelf:'center'}}>
      <Image source={props.image} height={30} width={30} style={{paddingTop:15}}/>
      <Text style={{textAlign:"center",color:'#fff'}}>87</Text>
    </View>
  )
}
function SideIcons(props:any): JSX.Element {
  
    return(
      <View style={{paddingVertical:40}}>
        <View style={{paddingTop:10}}>
            <Image source={require('../assets/Ellipse.png')} height={30} width={30} style={{paddingTop:15}}/>
        </View>
        <ImageTextComp image={require("../assets/Like.png")} />
        <ImageTextComp image={require("../assets/Comments.png")} />
        <ImageTextComp image={require("../assets/BookmarkSide.png")} />
        <ImageTextComp image={require("../assets/Share.png")} />
      </View>
  
    )
  }
  export default SideIcons;