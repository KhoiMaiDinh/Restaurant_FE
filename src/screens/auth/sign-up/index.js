/* eslint-disable prettier/prettier */
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import {IC_GoBack} from '../../../assets/icons';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import {useDispatch} from 'react-redux';
import {signup} from '../../../features/auth/userSlice';
import {BASE_URL} from '../../../utils/api';
import axios from 'axios';

const SignUpScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        email: email,
        password: password,
        name: name,
        phoneNumber: phoneNumber,
      });
      dispatch(signup(response.data));
      navigation.navigate('AppStackScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => props.navigation.goBack()}>
          <IC_GoBack />
        </TouchableOpacity>
        <View style={styles.tittleBox}>
          <Text style={styles.screenTittle}>Create new account</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            onChangeText={name => setName(name)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Full Name"
            style={styles.inputText}
            keyboardType="ascii-capable"
          />
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Phone Number"
            style={styles.inputText}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            onChangeText={email => setEmail(email)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Email Address"
            style={styles.inputText}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Password"
            style={styles.inputText}
          />
        </View>

        <TouchableOpacity
          style={styles.SignUpButtonBoxPosition}
          onPress={() => handleSignup()}>
          <View style={styles.SignUpButtonBox}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
          <TouchableOpacity style={styles.SignUpButtonBoxPosition}>
            <View style={styles.SignUpButtonBox}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default SignUpScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.White,
      flex: 1,
    },
    goBackButton: {
      position: 'absolute',
      left: scale(9),
      top: scale(50),
    },
    tittleBox: {
      position: 'absolute',
      top: scale(128),
      left: scale(25),
    },
    screenTittle: {
      color: CUSTOM_COLOR.Primary,
      fontSize: scale(20),
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    inputFullNameBox: {
      position: 'absolute',
      top: scale(191),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.Primary,
      borderRadius: 26.5,
    },
    inputPhoneNumberBox: {
      position: 'absolute',
      top: scale(253),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.Primary,
      borderRadius: 26.5,
    },
    inputEmailBox: {
        position: 'absolute',
        top: scale(315),
        alignSelf: 'center',
        height: scale(38),
        width: scale(323),
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.Primary,
        borderRadius: 26.5,
    },
    inputText: {
      paddingTop: scale(8),
      fontSize: scale(15),
      height: scale(40.5),
      left: scale(15),
      color: CUSTOM_COLOR.Black,
      width: scale(299),
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    inputPasswordBox: {
      position: 'absolute',
      top: scale(377),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.Primary,
      borderRadius: 26.5,
    },
    SignUpButtonBoxPosition: {
      position: 'absolute',
      top: scale(461),
      alignSelf: 'center',
    },
    SignUpButtonBox: {
      backgroundColor: CUSTOM_COLOR.Primary,
      height: scale(38),
      width: scale(278),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 26.5,
    },
    buttonText: {
      color: CUSTOM_COLOR.White,
      fontFamily: FONT_FAMILY.NexaRegular,
    },
  });
  
