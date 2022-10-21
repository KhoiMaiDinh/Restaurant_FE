import React from "react";
import DrawerScreen from "./DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";


const AppStack = createStackNavigator();

const AppStackScreen = (props) =>
{
  return(
    <AppStack.Navigator screenOptions={{headerShown:false}} initialRouteName={DrawerScreen}>
      <AppStack.Screen name={'DrawerScreen'} component={DrawerScreen}/>
    </AppStack.Navigator>
  )
}
export default AppStackScreen