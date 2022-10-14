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

const Landing_Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewIcon}>
        <Image source={IMG_RestaurantMenuGreen} style={styles.icon} />
      </View>

      <View style={styles.view1}>
        <View style={styles.viewTextWelcome}>
          <Text style={styles.text1}>Welcome to our restaurant</Text>
        </View>
        <View style={styles.view1a}>
          <Text style={styles.text2}>
            Order food and make reservations with one click.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButtonBoxPosition}>
        <View style={styles.loginButtonBox}>
          <Text style={styles.loginbuttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButtonBoxPosition}>
        <View style={styles.signupButtonBox}>
          <Text style={styles.signupbuttonText}>Sign Up</Text>
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
    width: scale(303),
    height: scale(88),
    position: 'absolute',
    alignItems: 'center',
    top: scale(320),
    alignSelf: 'center',
  },
  viewTextWelcome: {
    height: scale(22),
    position: 'absolute',
    textAlign: 'center',
  },
  text1: {
    fontSize: scale(17),
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
    fontSize: scale(17),
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
  loginbuttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  signupButtonBoxPosition: {
    position: 'absolute',
    top: scale(516),
    alignSelf: 'center',
  },
  signupButtonBox: {
    backgroundColor: CUSTOM_COLOR.White,
    height: scale(53),
    width: scale(278),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26.5,
    borderColor: CUSTOM_COLOR.Black,
    borderWidth: 1,
  },
  singupbuttonText: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
});
