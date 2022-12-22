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
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [checkValidNumber, setCheckValidNumber] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handleCheckNumber = text => {
    let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    setPhoneNumber(text);
    if (phoneNumber.test(text)) {
      setCheckValidNumber(false);
    } else {
      setCheckValidNumber(true);
    }
  };

  const handleCheckPassword = text =>{
    let isNonWhiteSpace = /^\S*$/;
    let isContainsUppercase = /^(?=.*[A-Z]).*$/;
    let isContainsLowercase = /^(?=.*[a-z]).*$/;
    let isContainsNumber = /^(?=.*[0-9]).*$/;
    let isValidLength = /^.{8,16}$/;

    setPassword(text);
    if(isNonWhiteSpace.test(text)
    &&isContainsNumber.test(text)
    &&isValidLength.test(text)){
      setCheckValidPassword(false);
    }
    else {
      setCheckValidPassword(true);
    }
  };

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
          <Text style={styles.screenTittle}>Tạo tài khoản mới</Text>
        </View>
        <View style={{height: scale(70)}}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={name => setName(name)}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              placeholder="Họ Tên"
              style={styles.inputText}
              keyboardType="ascii-capable"
            />
          </View>
        </View>
        <View style={{height: scale(70)}}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={text => handleCheckNumber(text)}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              value={phoneNumber}
              placeholder="Số điện thoại"
              style={styles.inputText}
              keyboardType="numeric"
            />
          </View>
          {checkValidNumber ? (
            <Text style={styles.textFailed}>Sai định dạng số điện thoại VD: 033 388 3127</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
        </View>
        <View style={{height: scale(70)}}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={text => handleCheckEmail(text)}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              value={email}
              placeholder="Địa chỉ email"
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>
            {checkValidEmail ? (
            <Text style={styles.textFailed}>Sai định dạng email. VD:"user@gmail.com"</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
        </View>
        <View style={{height: scale(70)}}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={text => handleCheckPassword(text)}
              secureTextEntry={true}
              value={password}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              placeholder="Mật khẩu"
              style={styles.inputText}
            />
          </View>
            {checkValidPassword ? (
            <Text style={styles.textFailed}>{"Mật khẩu cần có tổi thiểu 8 kí tự, ít nhất \nmột chữ số và không chứa khoảng trắng"}</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
        </View>
        {email == '' || password == '' || phoneNumber == '' || checkValidEmail == true || checkValidPassword == true || checkValidNumber == true ? (
          <TouchableOpacity
          disabled
          style={styles.SignUpButtonBoxPosition}
          onPress={() =>
            {handleSignup()}}>
          <View style={styles.SignUpButtonBox}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity
          style={styles.SignUpButtonBoxPosition}
          onPress={() => handleSignup()}>
          <View style={styles.SignUpButtonBox}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
        )} 
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
      marginTop: scale(50),
      marginLeft: scale(10),
    },
    tittleBox: {
      marginTop: scale(50),
      marginBottom: scale(30),
      marginLeft: scale(25),
    },
    screenTittle: {
      color: CUSTOM_COLOR.Primary,
      fontSize: scale(20),
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    inputTextContainer: {
      alignSelf: 'center',
      paddingHorizontal: scale(15),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.Primary,
      borderRadius: 500,
      //marginBottom: scale(15),
    },
    inputText: {
      fontSize: scale(15),
      color: CUSTOM_COLOR.Black,
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    SignUpButtonBoxPosition: {
      alignSelf: 'center',
    },
    SignUpButtonBox: {
      backgroundColor: CUSTOM_COLOR.Primary,
      width: scale(278),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 26.5,
      padding: scale(15),
      margin: scale(20),
    },
    buttonText: {
      color: CUSTOM_COLOR.White,
      fontFamily: FONT_FAMILY.NexaRegular,
      fontSize: scale(15),
    },
    textFailed: {
      marginLeft: scale(60), 
      fontFamily: FONT_FAMILY.NexaRegular,
      fontSize: scale(12),
      color: CUSTOM_COLOR.Red,
    },
  });
  
