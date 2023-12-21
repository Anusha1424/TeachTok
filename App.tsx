/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import store from './src/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import TopBar from './src/components/TopBar';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
    flex:1,
   
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
      <StatusBar translucent backgroundColor="transparent" />
        <SafeAreaView style={backgroundStyle}>
        
          <View style={{zIndex:1000,flex:1,position:'absolute',top:0,width:'100%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
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
            <Tab.Screen name="Discover" component={HomeScreen} options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({ color, size }) => (
                <Image source={require('./src/assets/home.png')} style={{height:20,width:20}}/>
                ),
              
              }}/>
            <Tab.Screen name="Activity" component={HomeScreen} options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({ color, size }) => (
                <Image source={require('./src/assets/clock.png')} style={{height:20,width:20}}/>
                ),
              
              }}/>
            <Tab.Screen name="Bookmarks" component={HomeScreen} options={{
                tabBarLabel: 'Bookmarks',
                tabBarIcon: ({ color, size }) => (
                <Image source={require('./src/assets/bookmark.png')} style={{height:20,width:20}}/>
                ),
              
              }} />
            <Tab.Screen name="Profile" component={HomeScreen} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                <Image source={require('./src/assets/profile.png')} style={{height:20,width:20}}/>
                ),
              
              }}/>
          </Tab.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}


export default App;
