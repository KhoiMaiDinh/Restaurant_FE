import React, {useCallback, useEffect, useState} from 'react';
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import scale from '../utils/responsive';
import {CUSTOM_COLOR} from '../constants/color';
import EditProfileScreen from '../screens/home/myProfile/editProfileScreen/index';
import OrdersScreen from '../screens/home/ordersScreen/index';
import SearchScreen from '../screens/home/searchScreen/index';
import MenuScreen from '../screens/home/menuScreen/index';
import ReservationScreen from '../screens/home/reservationScreen/index';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/home/homeScreen/index';
import HeaderBar from '../components/headerBar';
import FONT_FAMILY from '../constants/fonts';
import {
  IC_Home,
  IC_Order,
  IC_Profile,
  IC_Search,
  IC_CartDrawer,
  IC_Menu,
  IC_Reservation,
  IC_LogOut,
} from '../assets/icons';
import {IMG_LisaAvatar} from '../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../features/auth/userSlice';
import {useDispatch} from 'react-redux';
import ProfileScreen from '../screens/home/myProfile/profile';
import { initCartLogIn, resetCartWhenLogOut } from '../redux/actions/cartActions';
import { useIsFocused } from '@react-navigation/native';

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
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      await dispatch(resetCartWhenLogOut());
      props.navigation.replace('AuthStackScreen');
    } catch (error) {
      console.log(error);
    }
  };
  const [user, setUser] = useState([]);
  const getUserInfoFirstTime = async () => {
    const userInfo = await AsyncStorage.getItem('@user');
    const userInfoJS = JSON.parse(userInfo);
    setUser(userInfoJS);
    dispatch(initCartLogIn(userInfoJS.cart.items));
  }

  const getUserInfo = async () => {
    const userInfo = await AsyncStorage.getItem('@user');
    const userInfoJS = JSON.parse(userInfo);
    setUser(userInfoJS);
    //dispatch(initCartLogIn(userInfoJS.cart.items));
  }
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && getUserInfo(); 
  },[isFocused]);
  useEffect(() => {
    getUserInfoFirstTime();
  }, [])
  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.container}
      {...props}>
      <View style={styles.userInfo}>
        <View style={styles.userAvatarBorder}>
        {user?.avatar?.url !== ''?(<Image
                    resizeMethod="resize"
                    resizeMode="cover"
                    source={{uri: `${user?.avatar?.url || ''}`}}
                    style={styles.userAvatar}
                />):(<Image
                  source={IMG_LisaAvatar}
                  resizeMethod="resize"
                  resizeMode="cover"
                  style={styles.userAvatar}
              />)}
        </View>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDrawer
          label="Trang chủ"
          icon={<IC_Home />}
          component="Home"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Cá nhân"
          icon={<IC_Profile />}
          component="Profile"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Thực đơn"
          icon={<IC_Menu />}
          component="Menu"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Đặt chỗ"
          icon={<IC_Reservation />}
          component="Reservation"
          navigation={props.navigation}
        />
        <ButtonDrawer
          label="Lịch sử"
          icon={<IC_Order />}
          component="Orders"
          navigation={props.navigation}
        />
        <TouchableOpacity
          style={{
            height: scale(78),
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => handleLogout()}>
          <IC_LogOut />
          <Text style={styles.text}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
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
            <HeaderBar pageName={'Trang chủ'} navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Menu"
        component={MenuScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Thực đơn'} navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Lịch sử'} navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Reservation"
        component={ReservationScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Đặt chỗ'} navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <HeaderBar pageName={'Cá nhân'} navigation={navigation} />
          ),
        })}
      />
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
    paddingRight: '15%',
  },
  userName: {
    color: CUSTOM_COLOR.White,
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.NexaBold,
    justifyContent:'center',
    alignSelf: 'center',
  },
  userAvatarBorder: {
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(80),
    height: scale(80),
    borderRadius: 360,
    overflow: 'hidden',
    marginBottom: scale(10),
    left: scale(45),
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
