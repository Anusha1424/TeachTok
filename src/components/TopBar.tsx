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

function TopBar(props:any): JSX.Element {

    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:2}}>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/clock.png')} height={10} width={10}/>
            <Text style={{color:"#fff"}}>{props.time}</Text>
        </View>
        <View>
            <Text style={{color:"#fff",fontSize:18,fontWeight:'600'}}>For you</Text>
            <View style={{height:4,width:30,backgroundColor:"#fff",alignSelf:"center",marginTop:5}}></View>
        </View>
        <View>
            <Image source={require('../assets/search.png')} height={10} width={10}/>
        </View>
      </View>
  
    )
  }
  export default TopBar;