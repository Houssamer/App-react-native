import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Drawer from './components/Drawer/Drawer';
import HomeScreen from './Screens/HomeScreen';

const DrawerNavigator = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator
        drawerPosition="right"
        drawerContent={(props) => <Drawer {...props} />}
        drawerStyle={Dimensions.get('window').width * 0.75}
      >
        <DrawerNavigator.Screen name="Home" component={HomeScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  }
})