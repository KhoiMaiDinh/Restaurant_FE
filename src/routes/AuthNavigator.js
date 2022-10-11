import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Landing_Screen from '../screens/auth/landing';
import LoginScreen from '../screens/auth/login';
import OnboardingScreen from '../screens/auth/onboarding';
import SignUpScreen from '../screens/auth/sign-up';

const AuthStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 2000,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1],
    }),
  },
});

const forHeaderFade = ({ current, next }) => {
  const opacity = interpolate(add(current.progress, next ? next.progress : 0), {
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};


export const AuthStackScreen  = () => {
  // const onBackPress = () => {
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   };
  // }, []);


  return (
    <AuthStack.Navigator
      initialRouteName={OnboardingScreen}
      screenOptions={screenOptions}>
      <AuthStack.Screen
        name={OnboardingScreen}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={Landing_Screen}
        component={Landing_Screen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={SignUpScreen}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

