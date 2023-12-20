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

function SideIcons(props:any): JSX.Element {

    return(
      <View style={{paddingVertical:40}}>
        <View style={{paddingTop:10}}>
            <Image source={require('../assets/Ellipse.png')} height={30} width={30} style={{paddingTop:15}}/>
        </View>
        <View style={{paddingTop:10,alignSelf:'center'}}>
            <Image source={require('../assets/Like.png')} height={30} width={30} style={{paddingTop:15}}/>
            <Text style={{textAlign:"center",color:'#fff'}}>87</Text>
        </View>
        <View style={{paddingTop:10,alignSelf:'center'}}>
            <Image source={require('../assets/Comments.png')} height={30} width={30} style={{paddingTop:15}}/>
            <Text style={{textAlign:"center",color:'#fff'}}>87</Text>

        </View>
        <View style={{paddingTop:10,alignSelf:'center'}}>
            <Image source={require('../assets/BookmarkSide.png')} height={30} width={30} style={{paddingTop:15}}/>
            <Text style={{textAlign:"center",color:'#fff'}}>87</Text>

        </View>
        <View style={{paddingTop:10,alignSelf:'center'}}>
            <Image source={require('../assets/Share.png')} height={30} width={30} style={{paddingTop:15}}/>
            <Text style={{textAlign:"center",color:'#fff'}}>87</Text>

        </View>
        
      </View>
  
    )
  }
  export default SideIcons;