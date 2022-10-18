import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackScreen } from './AuthNavigator';
import DrawerScreen from './DrawerNavigator';

const RootStack = createStackNavigator();


const RootStackScreen = (props) => {
  return (
      <RootStack.Navigator initialRouteName="DrawerScreen" screenOptions ={{ headerShown: false }}>
        <RootStack.Screen
            name="DrawerScreen"
            component={DrawerScreen}
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
