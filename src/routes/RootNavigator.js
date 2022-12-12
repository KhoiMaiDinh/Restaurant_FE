import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackScreen} from './AuthNavigator';
import AppStackScreen from './AppNavigator';
import { WelcomeStackScreen } from './WelcomeNavigator';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStack = createStackNavigator();

const RootStackScreenWelcome = props => {
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

const RootStackScreen = props => {
  return (
    <RootStack.Navigator
      initialRouteName="AuthStackScreen"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      <RootStack.Screen name="AppStackScreen" component={AppStackScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = props => {
  const [firstLaunch, setFirstLaunch] = useState(null);
  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);
  return (
    <NavigationContainer>
      { firstLaunch ? <RootStackScreenWelcome {...props} /> : <RootStackScreen {...props} /> }
      
    </NavigationContainer>
  );
};

export default RootNavigator;
