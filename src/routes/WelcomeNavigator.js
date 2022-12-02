import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/auth/onboarding';
import LoadingScreen from '../screens/Loading/loadingScreen';

const WelcomeStack = createStackNavigator();

export const WelcomeStackScreen = props => {
  return (
    <WelcomeStack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{headerShown: false}}>
      <WelcomeStack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
      <WelcomeStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
    </WelcomeStack.Navigator>
  );
};
