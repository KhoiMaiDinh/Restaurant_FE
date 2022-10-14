import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackScreen } from './AuthNavigator';


const RootStack = createStackNavigator();


const RootStackScreen = (props) => {
  return (
      <RootStack.Navigator initialRouteName="AuthStackScreen" screenOptions ={{ headerShown: false }}>
        <RootStack.Screen
            name="AuthStackScreen"
            component={AuthStackScreen}
          />
        </RootStack.Navigator >
  )
}

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <RootStackScreen {...props}/>
    </NavigationContainer>
  )
}

export default RootNavigator
