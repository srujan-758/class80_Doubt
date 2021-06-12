import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import AppTabNavigator from './components/AppTabNavigator'
import {createSwitchNavigator,createAppContainer} from 'react-navigation-tabs'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';


export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
