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
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const SignUpScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [checkValidEmail, setCheckValidEmail] = useState(false);
  // const [checkValidPassword, setCheckValidPassword] = useState(false);
  // const [checkValidNumber, setCheckValidNumber] = useState(false);


const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const loginPayloadSchema = yup.object({
  name: yup.string()
  .max(30,'Họ tên không hợp lệ')
  .required('Họ tên không được để trống'),
  email: yup
    .string()
    .email('Email không hợp lệ')
    .max(30, 'Độ dài email phải nhỏ hơn 30 kí tự')
    .required('Email không được để trống'),
  password: yup
    .string()
    .matches(passwordRegex,'Mật khẩu phải chứa ký tự hóa, thường và số')
    .min(8, 'Độ dài mật khẩu phải lớn hơn 8')
    .max(16, 'Độ dài mật khẩu phải nhỏ hơn 16')
    .required('Mật khẩu không được để trống'),
  phoneNumber: yup
    .string()
    .min(10,'Số điện thoại không hợp lệ')
    .max(11,'Số điện thoại không hợp lệ')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
});
 
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
    resolver: yupResolver(loginPayloadSchema),
  });

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

        <Controller
         name="name"
         control={control}
         render ={({field: {onChange, value}})=>(<View style={styles.inputTextWithError}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={name => onChange(name)}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              placeholder="Họ Tên"
              style={styles.inputText}
              keyboardType="ascii-capable"
              value={value}
            />
          </View>
          {errors?.name && (
            <Text style={styles.textFailed}>{errors.name.message}</Text>
          )}
          </View>
          )}/>
        
        

        {/*sdt*/}
        <Controller
        name="phoneNumber"
        control={control}
        render ={({field: {onChange, value}})=>(
        <View style={styles.inputTextWithError}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={text => onChange(text)}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              value={value}
              placeholder="Số điện thoại"
              style={styles.inputText}
              keyboardType="numeric"
            />
          </View>
          {errors?.phoneNumber && (
            <Text style={styles.textFailed}>{errors.phoneNumber.message}</Text>
          )}
        </View>
        )}
      />
        
        <Controller
        name="email"
        control={control}
        render ={({field: {onChange,value}})=>(
          <View style={styles.inputTextWithError}>
          <View style={styles.inputTextContainer}>
            <TextInput
              onChangeText={text => onChange(text)}
              placeholderTextColor={CUSTOM_COLOR.Grey}
              value={value}
              placeholder="Địa chỉ email"
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>
            {errors?.email && (
            <Text style={styles.textFailed}>{errors.email.message}</Text>
          ) }
        </View>
        )}
        />
        
        <Controller
        name="password"
        control={control}
        render={({field: {onChange,value}})=>(
           <View style={styles.inputTextWithError}>
            <View style={styles.inputTextContainer}>
              <TextInput
                onChangeText={text => onChange(text)}
                secureTextEntry={true}
                value={value}
                placeholderTextColor={CUSTOM_COLOR.Grey}
                placeholder="Mật khẩu"
                style={styles.inputText}
              />
            </View>
            {errors?.password && (
            <Text style={styles.textFailed}>{errors.password.message}</Text>
          ) }
        </View>
        )}
        />
       
       
        <TouchableOpacity
          style={styles.SignUpButtonBoxPosition}
          onPress={handleSubmit(handleSignup)}>
          <View style={styles.SignUpButtonBox}>
            <Text style={styles.buttonText}>Đăng ký</Text>
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
    inputTextWithError: {
      alignSelf: 'center',
      borderWidth: 1, 
      paddingBottom: scale(15),
    },
    inputTextContainer: {
      alignSelf: 'center',
      paddingHorizontal: scale(15),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.Primary,
      borderRadius: 500,
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
      //marginLeft: (-60),
      alignSelf: 'flex-start',
      fontFamily: FONT_FAMILY.NexaRegular,
      fontSize: scale(12),
      color: CUSTOM_COLOR.Red,
      marginTop: scale(5),
    },
  });
  
