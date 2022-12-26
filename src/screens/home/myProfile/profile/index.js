import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React from 'react';
import { useState, useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
} from 'react-native-paper';
import { IMG_LisaAvatar } from '../../../../assets/images';
import scale from '../../../../utils/responsive';
<<<<<<< HEAD
import {  IC_Edit, IC_Heart, IC_Mail, IC_Map, IC_Phone, IC_Star, IC_Support } from '../../../../assets/icons';
=======
import { IC_Edit, IC_Heart, IC_Mail, IC_Map, IC_Phone, IC_Star } from '../../../../assets/icons';
>>>>>>> b9e7cc318c87cf3dbad2bb02f7aaaed0a47c1b06
import { CUSTOM_COLOR } from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
<<<<<<< HEAD
import userApi from '../../../../services/userApi';
import MsgBox from '../../../../components/messageBox';
import ContactInfor from './component/contactInfor';
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
>>>>>>> b9e7cc318c87cf3dbad2bb02f7aaaed0a47c1b06


const ProfileScreen = props => {
  const [image, setImage] = useState();
  const [user, setUser] = useState([]);
<<<<<<< HEAD
  const [visible, setVisible] = useState(false);
  const getUserData = async () => {
    try {
      const {userData} = await userApi.get();
      setUser(userData);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
=======
  const getUserInfo = async () => {
    const userInfo = await AsyncStorage.getItem('@user');
    const userInfoJS = JSON.parse(userInfo);
    userInfoJS.phoneNumber = '' + userInfoJS.phoneNumber;
    setUser(userInfoJS);
  }

  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused && getUserInfo(); 
  },[isFocused]);
  useEffect(() => {
    getUserInfo();
  }, [])
>>>>>>> b9e7cc318c87cf3dbad2bb02f7aaaed0a47c1b06
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerBar} />
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: scale(15)}}>
                <Avatar.Image
                    source={IMG_LisaAvatar}
                    size={80}
                />
                <View style={{marginLeft: scale(20)}}>
                    <Title style={[styles.title,styles.text]}>
                        {user.name}
                    </Title>
                    <Caption style={[styles.caption,styles.text]}>{user.email}</Caption>
                </View>
            </View>
        </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
            <View style={styles.icon}><IC_Map /></View>
                <Text style={[styles.text,{color:( user.address ? CUSTOM_COLOR.Sonic_Silver:CUSTOM_COLOR.Red), marginLeft: 20}]}>
                  {user.address?user.address:"Vui lòng cập nhật thông tin địa chỉ của bạn!"}
                </Text>
            </View>

            <View style={styles.row}>
            <View style={styles.icon}><IC_Phone /></View>
                <Text style={[styles.text,{color:CUSTOM_COLOR.Sonic_Silver, marginLeft: 20}]}>{user.phoneNumber}</Text>
            </View>

            <View style={styles.row}>
            <View style={styles.icon}><IC_Mail /></View>
                <Text style={{color:CUSTOM_COLOR.Sonic_Silver, marginLeft: 20, fontFamily: FONT_FAMILY.NexaRegular}}>{user.email}</Text>
            </View>

        </View>

        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {borderRightColor: CUSTOM_COLOR.Gainsboro, borderRightWidth: 1}]}>
                <Title style={styles.text}>14000000 VND</Title>
                <Caption style={styles.text}>Tổng tiền</Caption>
            </View> 
            <View style={styles.infoBox}>
                <Title style={styles.text}>12</Title>
                <Caption style={styles.text}>Đã mua</Caption>
            </View>
        </View>

        <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => props.navigation.navigate("EditProfileScreen", {
          user: user,
        })}>
                <View style={styles.menuItem}>
                    <View style={styles.icon}><IC_Edit/></View>
                    <Text style={[styles.menuItemText,styles.text]}>Chỉnh sửa thông tin</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("ReviewScreen")} >
                <View style={styles.menuItem}  >
                    <View style={styles.icon}><IC_Star /></View>
                    <Text style={[styles.menuItemText,styles.text]}>Đánh Giá</Text>
                </View>
            </TouchableOpacity>
            <ContactInfor visible={visible} clickCancel={() => setVisible(false)} title={"LIÊN HỆ"} message={"Hotline: 0336706905\n\nEmail: phuoctri@gmail.com\n\nChi nhánh: KTX KHU B - TPHCM"}/>
            <TouchableOpacity onPress={() => (setVisible(true))}>
                <View style={styles.menuItem}>
                    <View style={styles.icon}><IC_Support/></View>
                    <Text style={[styles.menuItemText,styles.text]}>Hỗ trợ</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CUSTOM_COLOR.White,
    },
    userInfoSection: {
      paddingHorizontal: scale(30),
      marginBottom: scale(25),
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: scale(15),
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
      FONT_FAMILY: FONT_FAMILY.NexaRegular,
    },
    row: {
    //  borderWidth: 1,
      flexDirection: 'row',
      marginBottom: scale(10),
      alignItems: 'center',
    },
    icon:{
        width: scale(25) , 
        height: scale(25),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    infoBoxWrapper: {
      borderBottomColor: CUSTOM_COLOR.Gainsboro,
      borderBottomWidth: 1,
      borderTopColor: CUSTOM_COLOR.Gainsboro,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: scale(100),
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: scale(10),
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: scale(15),
      paddingHorizontal: scale(30),
    },
    menuItemText: {
      color: CUSTOM_COLOR.Sonic_Silver,
      marginLeft: scale(20),
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
      FONT_FAMILY: FONT_FAMILY.NexaRegular,
    },
    text:{
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    Infor:{
      marginTop: scale(30),
      borderWidth: 1,
    }
  });