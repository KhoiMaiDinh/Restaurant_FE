import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
//import {IMG_RestaurantMenuGreen} from '../../../assets/icons';
import scale from '../../../utils/responsive';
import {IMG_RestaurantMenuGreen} from '../../../assets/images/index';
import FONT_FAMILY from '../../../constants/fonts';

const Landing_Screen = (props) => {
  const navigation = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewIcon}>
        <Image source={IMG_RestaurantMenuGreen} style={styles.icon} />
      </View>

      <View style={styles.view1}>
        <View style={styles.viewTextWelcome}>
          <Text style={styles.text1}>{"Chào mừng bạn đến với App"}</Text>
        </View>
        <View style={styles.view1a}>
          <Text style={styles.text2}>
            {"Tap liền tay, đồ ăn có ngay"}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButtonBoxPosition} onPress={() => props.navigation.navigate("LoginScreen")}>
        <View style={styles.loginButtonBox}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButtonBoxPosition} onPress={() => props.navigation.navigate("SignUpScreen")}>
        <View style={styles.signUpButtonBox}>
          <Text style={styles.signUpButtonText}>Đăng ký</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Landing_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },

  viewIcon: {
    width: scale(180),
    height: scale(180),
    top: scale(127),
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  icon: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  view1: {
    height: scale(88),
    position: 'absolute',
    alignItems: 'center',
    top: scale(320),
    alignSelf: 'center',
  },
  viewTextWelcome: {
    position: 'absolute',
    textAlign: 'center',
  },
  text1: {
    fontSize: scale(20),
    color: CUSTOM_COLOR.Primary,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  view1a: {
    height: scale(44),
    position: 'absolute',
    top: scale(44),
  },
  text2: {
    fontSize: scale(16),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
    opacity: 0.8,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  loginButtonBoxPosition: {
    position: 'absolute',
    top: scale(445),
    alignSelf: 'center',
  },
  loginButtonBox: {
    backgroundColor: CUSTOM_COLOR.Primary,
    height: scale(53),
    width: scale(278),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26.5,
  },
  loginButtonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  signUpButtonBoxPosition: {
    position: 'absolute',
    top: scale(516),
    alignSelf: 'center',
  },
  signUpButtonBox: {
    backgroundColor: CUSTOM_COLOR.White,
    height: scale(53),
    width: scale(278),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26.5,
    borderColor: CUSTOM_COLOR.Primary,
    borderWidth: 1,
  },
  signUpButtonText: {
    color: CUSTOM_COLOR.Primary,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
});
