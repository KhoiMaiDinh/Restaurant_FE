import React from 'react'
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import scale from '../utils/responsive';
import { CUSTOM_COLOR } from '../constants/color';
import EditProfileScreen from '../screens/home/myProfile/editProfileScreen/index'
import OrdersScreen from '../screens/home/ordersScreen/index'
import SearchScreen from '../screens/home/searchScreen/index'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import HomeScreen from '../screens/home/homeScreen/index'


const Drawer = createDrawerNavigator();

const ButtonDrawer = props => {
  return (
    <TouchableOpacity
      style={{ height: scale(78), justifyContent: 'center' }}
      onPress={() => props.navigation.jumpTo(props.component)}>
      {/* <Image source={props.source} /> */}
      <Text
        style={[
          styles.text,
          {
            width: scale(132),
            height: '100%',
            textAlignVertical: 'center',
            marginLeft: scale(35),
            borderBottomColor: CUSTOM_COLOR.Grey,
            borderBottomWidth: 0.3,
          },
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};


const DrawerScreen = () => {
    const CustomScrollDrawer = props => {
      return (
        <DrawerContentScrollView
          contentContainerStyle={{ flex: 1, flexGrow: 1 }}
          style={styles.container}>
            {/* <ButtonDrawer label="Home"   component="Home"
              navigation={props.navigation}/> */}
          {/* <Image source={IMG_AVATAR} style={styles.user}></Image> */}
          <View style={styles.buttonContainer}>
            <ButtonDrawer
              label="Profile"
              // source={IMG_ProfileLogo}
              component="Profile"
              navigation={props.navigation}
            />
            <ButtonDrawer label="Orders"   component="Orders"
              navigation={props.navigation}/>
            <ButtonDrawer label="Search"   component="Search"
              navigation={props.navigation}/>
          </View>
          {/* <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: scale(36),
              left: scale(35),
              width: '100%',
              flexDirection: 'row',
            }}
  
            onPress={() => {auth()
              .signOut()
              .then(() =>  props.navigation.replace("Login"))
              .catch((error) => console.log(error.message))}}>
            <Text style={[styles.text, { position: 'relative' }]}>
              {'Sign-out'}
            </Text>
            {/* <Image
              source={IMG_ToRightArrow}
              style={{ marginLeft: scale(12), alignSelf: 'center' }}
            /> */}
  
          {/* </TouchableOpacity> */}
        </DrawerContentScrollView>
      );
    };
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, drawerStyle: { width: scale(259) }, swipeEdgeWidth: scale(40) }}
        drawerContent={CustomScrollDrawer}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Profile" component={EditProfileScreen} />
        {/* <Drawer.Screen name="ChangeProfile" component={MyProfileScreen} />
        <Drawer.Screen name="Offer" component={OfferScreen} />
        <Drawer.Screen name="Privacy" component={PrivacyScreen} />
        <Drawer.Screen name="Security" component={SecurityScreen} />
        <Drawer.Screen name ='Checkout' component={CheckOut1Screen} /> */}
      </Drawer.Navigator>
    );
  
}

export default DrawerScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    flex: 1,
  },
  user: {
    alignSelf: 'center',
    marginTop: scale(65),
  },
  signOut: {
    top: '83%',
    marginLeft: scale(40),
  },
  buttonContainer: {
    marginLeft: scale(40),
    marginTop: scale(29),
    marginRight: scale(50),
  },
  home: {
    height: scale(78),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: CUSTOM_COLOR.White,
    fontSize: scale(17), 
    lineHeight: scale(25.5),
    position:'absolute',
  },  
});
