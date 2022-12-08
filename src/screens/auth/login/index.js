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
    let isNonWhiteSpace = /^\S*$/;
    let isContainsNumber = /^(?=.*[0-9]).*$/;
    let isValidLength = /^.{8,16}$/;

    setPass(text);
    if(isNonWhiteSpace.test(text)
    &&isContainsNumber.test(text)
    &&isValidLength.test(text)){
      setCheckValidPassword(false);
    }
    else {
      setCheckValidPassword(true);
    }
  };

  const handleLogin = async () => {    
      try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
          email: email,
          password: password,
        });
        dispatch(login(response.data));
        navigation.navigate('AppStackScreen');
      } 
      catch (error) {
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
          <Text style={styles.screenTittle}>Đăng nhập</Text>
        </View>
        <View style={styles.inputMailBox}>
          <TextInput
            onChangeText={text => handleCheckEmail(text)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Địa chỉ email"
            value={email}
            style={styles.inputText}
            keyboardType="email-address"
          />
          {checkValidEmail ? (
          <Text style={styles.textFailed}>Sai định dạng email. VD:"user@gmail.com"</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
        </View>
        
        <View style={styles.inputPasswordBox}>
          <TextInput
            secureTextEntry={true}
            onChangeText={text => handleCheckPassword(text)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            value={password}
            placeholder="Mật khẩu"
            style={styles.inputText}
          />
          
          {checkValidPassword ? (
          <Text style={styles.textFailed}>{"Mật khẩu cần có tổi thiểu 8 kí tự, ít nhất \nmột chữ số và không chứa khoảng trắng"}</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
        </View>
        
        {email == '' || password == '' || checkValidEmail == true || checkValidPassword == true ? (
        <TouchableOpacity
          disabled
          style={styles.loginButtonBoxPosition}
          onPress={() =>
            {handleLogin()}}>
          <View style={styles.loginButtonBox}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
        ) : (<TouchableOpacity
          style={styles.loginButtonBoxPosition}
          onPress={() =>
            handleLogin()}>
          <View style={styles.loginButtonBox}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
        )} 
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.FBLoginButtonBoxPosition}>
          <View style={styles.FBLoginButtonBox}>
            <Text style={styles.buttonText}>Đăng nhập bằng Facebook</Text>
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
    marginTop: scale(363),
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
    marginTop: scale(465),
    alignSelf: 'center',
  },
  FBLoginButtonBoxPosition: {
    position: 'absolute',
    marginTop: scale(536),
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
  textFailed: {
    marginLeft: scale(25),
    alignSelf:'flex-start',
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(12),
    color: CUSTOM_COLOR.Red,
  },
});
