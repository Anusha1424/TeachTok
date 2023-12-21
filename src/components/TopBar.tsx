import React,{useEffect,useState} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

function TopBar(props:any): JSX.Element {
  const [seconds, setSeconds] = useState(0); // 10 minutes in seconds

  useEffect(() => {
    let interval:any;

   
      interval = setInterval(() => {
        setSeconds((prevSeconds:any) => prevSeconds + 1);
      }, 1000);
    

    return () => clearInterval(interval);
  }, [seconds]);


  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:2}}>
        <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/clock.png')} height={10} width={10}/>
            <Text style={{color:"#fff"}}>{formatTime(seconds)}</Text>
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