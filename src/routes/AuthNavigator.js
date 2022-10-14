import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Landing_Screen from '../screens/auth/landing';
import LoginScreen from '../screens/auth/login';
import OnboardingScreen from '../screens/auth/onboarding';
import SignUpScreen from '../screens/auth/sign-up';

const AuthStack = createStackNavigator();

export const AuthStackScreen  = (props) => {
  return (
        <AuthStack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{ headerShown: false }}>
          <AuthStack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Landing_Screen"
            component={Landing_Screen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
      </AuthStack.Navigator>
  )
}

