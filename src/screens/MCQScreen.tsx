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
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../actions/user'
import TopBar from '../components/TopBar';
import Question from '../components/Question';
import Option from '../components/Option';
import Description from '../components/Description';
import Bottom from '../components/Bottom';

function MCQScreen(props:any): JSX.Element {
    const dispatch = useDispatch()
    const users = useSelector((state:any) => state.users.users)
    console.log(users);
    useEffect(() => {
        dispatch(getItem([{
         id: 1, 
         name: "Emmanuel",
         company: "Dusk",
         catchPhrase: "Made to fly"
        }]));
      }, [dispatch])


    return(
      <View style={{flex:1}}>
       
      {users  && <ImageBackground
        source={{uri:users.image}} style={{flex:1}}>
            <View style={{flex:1,padding:8}}>
             <TopBar/>
             <Question question={users.question}/>
             <View style={{flex:1}}>
             {users?.options.map((op:any)=>{
                return(
                    <Option option={op.answer}/>
                )
               
             })}
             </View>
             <Description name={users.user.name} description={users.description}/>
             </View>
             <View style={{height:90}}>
             <Bottom playlist={users.playlist}/>
             </View>
             
            </ImageBackground>}
        
      </View>
  
    )
  }
  export default MCQScreen;