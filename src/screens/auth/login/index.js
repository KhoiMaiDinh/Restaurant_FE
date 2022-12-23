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
  Image,
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
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {IMG_Warning} from '../../../assets/images';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRef} from 'react';

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;

const loginPayloadSchema = yup.object({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .max(30, 'Độ dài email phải nhỏ hơn 30 kí tự')
    .required('Email không được để trống'),
  password: yup
    .string()
    .min(8, 'Độ dài mật khẩu phải lớn hơn 8')
    .max(16, 'Độ dài mật khẩu phải nhỏ hơn 16')
    .required('Mật khẩu không được để trống'),
});

const LoginScreen = props => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const [errorMessage, setErrorMessage] = useState('');
  const bs = useRef(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
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

  const handleLogin = async data => {
    try {
      await dispatch(login(data));
      navigation.navigate('AppStackScreen');
    } catch (error) {
      setErrorMessage(error.message);
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
            <Text style={styles.screenTittle}>Đăng nhập</Text>
          </View>

          {/* Email input */}
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.inputMailBox}>
                <TextInput
                  onChangeText={text => onChange(text)}
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Địa chỉ email"
                  value={value}
                  style={styles.inputText}
                  keyboardType="email-address"
                />
                {errors?.email && (
                  <Text style={styles.textFailed}>{errors.email.message}</Text>
                )}
              </View>
            )}
          />

          {/* Password input */}
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.inputPasswordBox}>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={text => onChange(text)}
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  value={value}
                  placeholder="Mật khẩu"
                  style={styles.inputText}
                />

                {errors?.password && (
                  <Text style={styles.textFailed}>
                    {errors.password.message}
                  </Text>
                )}
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.loginButtonBoxPosition}
            onPress={handleSubmit(handleLogin)}>
            <View style={styles.loginButtonBox}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

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
    borderColor: CUSTOM_COLOR.Primary,
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
    marginTop: scale(275),
    alignSelf: 'center',
    height: scale(53),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Primary,
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
  buttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  textFailed: {
    marginLeft: scale(25),
    marginTop: scale(5),
    alignSelf: 'flex-start',
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(12),
    color: CUSTOM_COLOR.Red,
  },
});
const stylePanel = StyleSheet.create({
  panel: {
    padding: scale(20),
    backgroundColor: CUSTOM_COLOR.Red,
    paddingTop: scale(20),
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
