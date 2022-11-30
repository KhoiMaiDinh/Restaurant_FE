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
import {login} from '../../../features/auth/userSlice';
import axios from 'axios';
import {BASE_URL} from '../../../utils/api';
import { disabled } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [email, setMail] = useState('');
  const [password, setPass] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setMail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handleCheckPassword = text =>{
    setPass(text);
    if(checkPasswordValidity(text)){
      setCheckValidPassword(false);
    }
    else {
      setCheckValidPassword(true);
    }
  };

  const checkPasswordValidity = value => {
    
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Mật khẩu không được chứa khoảng trắng.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }

    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(value)) {
      return 'Password must contain at least one Special Symbol.';
    }

    return null;
  };
  let validPassWordText = null;
  const handleLogin = async () => {
    const checkPassword = checkPasswordValidity(password);
    if(!checkPassword)
    {
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
          email: email.toLocaleLowerCase(),
          password: password,
        });
        dispatch(login(response.data));
        navigation.navigate('AppStackScreen');
      } 
      catch (error) {
        console.log(error);
      }
    }
     else{
      validPassWordText = checkPassword;
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
          <Text style={styles.screenTittle}>Log In</Text>
        </View>
        <View style={styles.inputMailBox}>
          <TextInput
            onChangeText={text => handleCheckEmail(text)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Email address"
            value={email}
            style={styles.inputText}
            keyboardType="email-address"
          />
          {checkValidEmail ? (
          <Text style={styles.emailFailed}>Sai định dạng email. VD:"abc@xyz"</Text>
        ) : (
          <Text style={styles.emailFailed}> </Text>
        )}
        </View>
        
        <View style={styles.inputPasswordBox}>
          <TextInput
            secureTextEntry={true}
            onChangeText={text => setPass(text)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            value={password}
            placeholder="Password"
            style={styles.inputText}
          />
          
          {/* {checkValidPassword ? (
          <Text style={styles.textFailed}>{checkPasswordValidity(password)}</Text>
        ) : ( */}
          <Text style={styles.passwordFailed}> {validPassWordText}</Text>
        {/* )} */}
        </View>
        
        {email == '' || password == '' || checkValidEmail == true ? (
        <TouchableOpacity
          disabled
          style={styles.loginButtonBoxPosition}
          onPress={() =>
            {handleLogin()}}>
          <View style={styles.loginButtonBox}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        ) : (<TouchableOpacity
          style={styles.loginButtonBoxPosition}
          onPress={() =>
            handleLogin()}>
          <View style={styles.loginButtonBox}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        )} 
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.FBLoginButtonBoxPosition}>
          <View style={styles.FBLoginButtonBox}>
            <Text style={styles.buttonText}>FaceBook Login</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  goBackButton: {
    position: 'absolute',
    marginLeft: scale(9),
    marginTop: scale(50),
  },
  tittleBox: {
    position: 'absolute',
    marginTop: scale(128),
    marginLeft: scale(25),
  },
  screenTittle: {
    color: CUSTOM_COLOR.Primary,
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  inputMailBox: {
    position: 'absolute',
    marginTop: scale(191),
    alignSelf: 'center',
    height: scale(53),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Navy,
    borderRadius: 26.5,
  },
  inputText: {
    marginLeft: scale(17),
    color: CUSTOM_COLOR.Black,
    width: scale(299),
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  inputPasswordBox: {
    position: 'absolute',
    marginTop: scale(267),
    alignSelf: 'center',
    height: scale(53),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Navy,
    borderRadius: 26.5,
  },
  loginButtonBoxPosition: {
    position: 'absolute',
    marginTop: scale(343),
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
  orText: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(17),
    marginTop: scale(450),
    alignSelf: 'center',
  },
  FBLoginButtonBoxPosition: {
    position: 'absolute',
    marginTop: scale(516),
    alignSelf: 'center',
  },
  FBLoginButtonBox: {
    backgroundColor: CUSTOM_COLOR.Navy,
    height: scale(53),
    width: scale(278),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26.5,
  },
  buttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  emailFailed: {
    marginLeft: scale(70),
    paddingTop: scale(245),
    alignSelf:'flex-start',
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(12),
    color: 'red',
  },
  passwordFailed: {
    marginLeft: scale(70),
    paddingTop: scale(275),
    alignSelf:'flex-start',
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(12),
    color: 'red',
  },
});
