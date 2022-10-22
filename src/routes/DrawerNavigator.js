import React from 'react';
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import scale from '../utils/responsive';
import {CUSTOM_COLOR} from '../constants/color';
import EditProfileScreen from '../screens/home/myProfile/editProfileScreen/index';
import OrdersScreen from '../screens/home/ordersScreen/index';
import SearchScreen from '../screens/home/searchScreen/index';
import MenuScreen from '../screens/home/menuScreen/index';
import CartScreen from '../screens/home/cartScreen/index';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/home/homeScreen/index';
import HeaderBar from '../components/headerBar';
import FONT_FAMILY from '../constants/fonts';
import {IC_Home, IC_Order, IC_Profile, IC_Search, IC_CartDrawer, IC_Menu, IC_Reservation} from '../assets/icons';
import {IMG_BestDeals1} from '../assets/images';

const Drawer = createDrawerNavigator();

const ButtonDrawer = props => {
  return (
    <TouchableOpacity
      style={{
        height: scale(78),
        justifyContent: 'center',
        flexDirection: 'row',
      }}
      onPress={() => props.navigation.jumpTo(props.component)}>
      {props.icon}
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const CustomScrollDrawer = props => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.container}
      {...props}>
      <View style={styles.userInfo}>
        <View style={styles.userAvatarBorder}>
          <Image
            resizeMethod="resize"
            resizeMode="cover"
            source={IMG_BestDeals1}
            style={styles.userAvatar}
          />
        </View>
        <Text style={styles.userName}>Đình Khôi</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDrawer
          label="Home"
          icon={<IC_Home />}
          component="Home"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Menu"
          icon={<Image source={IC_Menu} />}
          component="Menu"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Search"
          icon={<IC_Search />}
          component="Search"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Profile"
          icon={<IC_Profile />}
          component="Profile"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Orders"
          icon={<Image source={IC_Order} />}
          component="Orders"
          navigation={props.navigation}
        />
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

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerStyle: {width: scale(259)},
        swipeEdgeWidth: scale(40),
        headerLeft: false,
      }}
      drawerContent={props => <CustomScrollDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Home'} navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Menu"
        component={MenuScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Menu'} navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Orders'} navigation={navigation}/>
          ),
        })}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Search'} navigation={navigation}/>
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={EditProfileScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Profile'} navigation={navigation}/>
          ),
        })}
      />
      {/* <Drawer.Screen name="ChangeProfile" component={MyProfileScreen} />
        <Drawer.Screen name="Offer" component={OfferScreen} />
        <Drawer.Screen name="Privacy" component={PrivacyScreen} />
        <Drawer.Screen name="Security" component={SecurityScreen} />
        <Drawer.Screen name ='Checkout' component={CheckOut1Screen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  userInfo: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Primary,
    marginTop: scale(-5),
    paddingLeft: '15%',
    justifyContent: 'center',
    borderBottomEndRadius: scale(15),
  },
  userName: {
    color: CUSTOM_COLOR.White,
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.NexaBold,
  },
  userAvatarBorder: {
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(80),
    height: scale(80),
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: scale(10),
  },
  userAvatar: {width: scale(80), height: scale(80)},
  signOut: {
    top: '83%',
    marginLeft: scale(40),
  },
  buttonContainer: {
    flex: 4,
    marginLeft: scale(40),
    marginTop: scale(29),
    marginRight: scale(50),
  },
  text: {
    fontSize: scale(17),
    width: scale(132),
    height: scale(50),
    borderBottomColor: CUSTOM_COLOR.Primary,
    borderBottomWidth: 0.3,
    color: CUSTOM_COLOR.Primary,
    fontFamily: FONT_FAMILY.NexaRegular,
    marginLeft: scale(18),
  },
});
