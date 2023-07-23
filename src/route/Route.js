import React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import MenuAddScreen from '../screen/MenuAddScreen';
import AddGalleryScreen from '../screen/AddGallery';
const Drawer= createDrawerNavigator();
const StackNav=createStackNavigator();
HomeScreen=()=>{
return(
  <StackNav.Navigator >
            <StackNav.Screen name='home' component={Home}/>
            <StackNav.Screen name='AddMenu' component={MenuAddScreen}/>
            <StackNav.Screen name='AddGallery' component={AddGalleryScreen}/>
      </StackNav.Navigator>
)
}
export default function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name='home' component={HomeScreen}/>
      </Drawer.Navigator>
    
    </NavigationContainer>
  );
}
