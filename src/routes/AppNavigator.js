import React from "react";
import DrawerScreen from "./DrawerNavigator";
import SingleFoodItemScreen from "../screens/home/singleFoodItemScreen/index"
import CartScreen from "../screens/home/cartScreen";
import CategoryScreen from "../screens/home/categoryScreen/index";
import { createStackNavigator } from "@react-navigation/stack";


const AppStack = createStackNavigator();

const AppStackScreen = (props) =>
{
  return(
    <AppStack.Navigator screenOptions={{headerShown:false}} initialRouteName={DrawerScreen}>
      <AppStack.Screen name={'DrawerScreen'} component={DrawerScreen}/>
      <AppStack.Screen name={'SingleFoodItemScreen'} component={SingleFoodItemScreen}/>
      <AppStack.Screen name={'CartScreen'} component={CartScreen}/>
      <AppStack.Screen name={'CategoryScreen'} component={CategoryScreen}/>
    </AppStack.Navigator>
  )
}
export default AppStackScreen