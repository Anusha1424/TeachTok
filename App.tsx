/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
  Image
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';
import store from './src/store';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
// import { getUsers } from './src/actions/user'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from './src/assets/icons';
import MCQScreen from './src/screens/MCQScreen';
import HomeScreen from './src/screens/HomeScreen';
import TopBar from './src/components/TopBar';

const Tab = createBottomTabNavigator();

function Section(props:any): JSX.Element {
  const dispatch = useDispatch()
  const users = useSelector((state:any) => state.users.users)
  console.log(users);

  return(
    <View>
      <Text>Anusha Gadigatla</Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Details")}><Text>Open Details</Text></TouchableOpacity>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function DetailsScreen(props:any): JSX.Element {
  return(
    <>
    <Text>Anusha Details</Text>
    <TouchableOpacity onPress={()=>props.navigation.goBack()}><Text>Open Section</Text></TouchableOpacity>
    </>

  )
}
function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Section}/>
      <Tab.Screen name="Settings" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
    flex:1
  };

  return (
    <NavigationContainer>
    <Provider store={store}>
    {/* <SafeAreaView style={backgroundStyle}> */}
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Section} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
      <SafeAreaView style={backgroundStyle}>
      <View style={{zIndex:1000,flex:1,position:'absolute',top:0,width:'100%'}}>
    <TopBar/>
    </View>
       <Tab.Navigator  screenOptions={{
    tabBarStyle: { position: 'absolute',backgroundColor:"#000" },
    tabBarActiveTintColor:"#fff",
    headerShown:false
  }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('./src/assets/Union.png')} style={{height:20,width:20}}/>
          ),
         
        }}/>
      <Tab.Screen name="Discover" component={DetailsScreen} options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('./src/assets/home.png')} style={{height:20,width:20}}/>
          ),
         
        }}/>
      <Tab.Screen name="Activity" component={Section} options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('./src/assets/clock.png')} style={{height:20,width:20}}/>
          ),
         
        }}/>
      <Tab.Screen name="Bookmarks" component={DetailsScreen} options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('./src/assets/bookmark.png')} style={{height:20,width:20}}/>
          ),
         
        }} />
      <Tab.Screen name="Profile" component={DetailsScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('./src/assets/profile.png')} style={{height:20,width:20}}/>
          ),
         
        }}/>
    </Tab.Navigator>
    </SafeAreaView>
        {/* <MyTabs></MyTabs> */}
    {/* </SafeAreaView> */}

    </Provider>
    </NavigationContainer>
  );
}


export default App;
