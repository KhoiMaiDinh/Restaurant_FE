import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackScreen from '../routes/AuthNavigator';


const RootStack = createStackNavigator();


const RootNavigator = () => {
  return (
    <RootStack.Navigator  screenOptions ={{ headerShown: false }}>
      <RootStack.Screen
          name={AuthStackScreen}
          component={AuthStackScreen}
        />
    </RootStack.Navigator >
  )
}

export default RootNavigator

const styles = StyleSheet.create({})