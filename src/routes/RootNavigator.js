import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackScreen} from './AuthNavigator';
import AppStackScreen from './AppNavigator';
import { WelcomeStackScreen } from './WelcomeNavigator';

const RootStack = createStackNavigator();

const RootStackScreen = props => {
  return (
    <RootStack.Navigator
      initialRouteName="WelcomeStackScreen"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="WelcomeStackScreen" component={WelcomeStackScreen} />
      <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      <RootStack.Screen name="AppStackScreen" component={AppStackScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <RootStackScreen {...props} />
    </NavigationContainer>
  );
};

export default RootNavigator;
