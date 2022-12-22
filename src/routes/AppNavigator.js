import React from 'react';
import DrawerScreen from './DrawerNavigator';
import SingleFoodItemScreen from '../screens/home/singleFoodItemScreen/index';
import CartScreen from '../screens/home/cartScreen';
import CategoryScreen from '../screens/home/categoryScreen/index';
import ReviewScreen from '../screens/home/reviewScreen';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfileScreen from '../screens/home/myProfile/editProfileScreen';
import ProfileScreen from '../screens/home/myProfile/profile';

const AppStack = createStackNavigator();

const AppStackScreen = props => {
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={DrawerScreen}>
      <AppStack.Screen name={'DrawerScreen'} component={DrawerScreen} />
      <AppStack.Screen
        name={'SingleFoodItemScreen'}
        component={SingleFoodItemScreen}
      />
      <AppStack.Screen name={'CartScreen'} component={CartScreen} />
      <AppStack.Screen name={'CategoryScreen'} component={CategoryScreen} />
      <AppStack.Screen name={'ReviewScreen'} component={ReviewScreen}/>
      <AppStack.Screen name={'EditProfileScreen'} component={EditProfileScreen}/>
      <AppStack.Screen name ={'ProfileScreen'} component={ProfileScreen}/>
    </AppStack.Navigator>
  );
};
export default AppStackScreen;
