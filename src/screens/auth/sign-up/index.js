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
  ActivityIndicator
} from 'react-native';
import React, {useState,useRef} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import {IC_GoBack} from '../../../assets/icons';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import {useDispatch} from 'react-redux';
import {signup} from '../../../features/auth/userSlice';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
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
    .matches(passwordRegex,'Mật khẩu phải chứa ký tự hoa, thường và số')
    .min(8, 'Độ dài mật khẩu phải lớn hơn 8')
    .max(16, 'Độ dài mật khẩu phải nhỏ hơn 16')
    .required('Mật khẩu không được để trống'),
  phoneNumber: yup
  .string()
  .min(10,'Số điện thoại không hợp lệ')
  .max(11,'Số điện thoại không hợp lệ')
  .matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
});
 

const SignUpScreen = props => {
  const {navigation} = props;
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const bs = useRef(null);

  const dispatch = useDispatch();

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

  const renderInner = () => (
    <View style={stylePanel.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={stylePanel.panelTitle}>Thất bại</Text>
        <Text style={stylePanel.panelSubtitle}>{errorMessage}</Text>
      </View>
    </View>
  );
  const fall = new Animated.Value(1);

  const handleSignup = async (data) => {
    try {
      console.log("🚀 ~ file: index.js:66 ~ handleSignup ~ data", data)
      setLoading(true);
      await dispatch(signup(data));
      setLoading(false);
      navigation.navigate('AppStackScreen');
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      console.log("🚀 ~ file: index.js:70 ~ handleSignup ~ error", error)
      console.log(error);
      bs?.current?.snapTo(0);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
      <SafeAreaView style={styles.container}>
        <BottomSheet
          ref={bs}
          snapPoints={[100, 0]}
          renderContent={renderInner}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
        />
        <Animated.View
          style={{
            margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
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
            render ={({field: {onChange, value}})=>(
            <View style={styles.inputTextWithError}>
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
            )}
          />

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
            activeOpacity={0.8}
            onPress={handleSubmit(handleSignup)}>
            <View style={styles.SignUpButtonBox}>
            <Text style={styles.buttonText}>{loading?'Đang đăng ký...':'Đăng ký'}</Text>
              {loading && <ActivityIndicator  color={CUSTOM_COLOR.White} size={30}/>}
            </View>
          </TouchableOpacity>
          </Animated.View>
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
      flexDirection: 'row',
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
      alignSelf: 'flex-start',
      fontFamily: FONT_FAMILY.NexaRegular,
      fontSize: scale(12),
      color: CUSTOM_COLOR.Red,
      marginTop: scale(5),
    },
  });
  const stylePanel = StyleSheet.create({
    panel: {
      paddingTop: scale(20),
      backgroundColor: CUSTOM_COLOR.Red,
      padding:scale(20),
    },
    panelTitle: {
      fontSize: 27,
      color: CUSTOM_COLOR.White,
      height: scale(35),
    },
    panelSubtitle: {
      fontSize: scale(14),
      color: CUSTOM_COLOR.White,
      height: scale(30),
      marginBottom: scale(10),
    },
  });
