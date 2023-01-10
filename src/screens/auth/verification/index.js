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
  import React, {useState} from 'react';
  import {CUSTOM_COLOR} from '../../../constants/color';
  import {IC_GoBack} from '../../../assets/icons';
  import scale from '../../../utils/responsive';
  import FONT_FAMILY from '../../../constants/fonts';
  import {useDispatch} from 'react-redux';
  import {verify} from '../../../features/auth/userSlice';
  import BottomSheet from 'reanimated-bottom-sheet';
  import Animated from 'react-native-reanimated';
 
  import {Controller, useForm} from 'react-hook-form';
  import {yupResolver} from '@hookform/resolvers/yup';
  import {useRef} from 'react';

  
  const VerificationScreen = props => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const sixthInput = useRef();
    const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});
    
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <View style={styles.viewGoBackText}>
                    <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => {
                        props.navigation.goBack();
                    }}>
                    <IC_GoBack style={styles.goBack} />
                    <Text style={styles.screenTittle2}>Quay lại</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewTitle}>
                    <Text style={styles.headerTitle}>Xác thực OTP</Text>
                </View>
                <View style={{width: scale(110), height: 1}}/>
            </View>

            <View style={styles.tittleBox}>
                <Text style={styles.content}>Nhập mã OTP đã được gửi vào email</Text>
            </View>
            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="numberic"
                        maxLength={1}
                        ref={firstInput}
                        onChangeText={text => {
                        setOtp({...otp, 1: text});
                        text && secondInput.current.focus();
                        }}
                    />
                    
                     
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="numberic"
                        maxLength={1}
                        ref={secondInput}
                        onChangeText={text => {
                        setOtp({...otp, 2: text});
                        text ? thirdInput.current.focus() : firstInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="numberic"
                        maxLength={1}
                        ref={thirdInput}
                        onChangeText={text => {
                        setOtp({...otp, 3: text});
                        text ? fourthInput.current.focus() : secondInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="numberic"
                        maxLength={1}
                        ref={fourthInput}
                        onChangeText={text => {
                        setOtp({...otp, 4: text});
                        text ? fifthInput.current.focus() : thirdInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="numberic"
                        maxLength={1}
                        ref={fifthInput}
                        onChangeText={text => {
                        setOtp({...otp, 5: text});
                        text ? sixthInput.current.focus() : fourthInput.current.focus();
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="numberic"
                        maxLength={1}
                        ref={sixthInput}
                        onChangeText={text => {
                        setOtp({...otp, 6: text});
                        !text && fifthInput.current.focus();
                        }}
                    />
                </View>
            </View>
  
            <TouchableOpacity style={styles.verifyButtonBoxPosition}>
              <View style={styles.verifyButtonBox}>
                <Text style={styles.buttonText}>Xác thực</Text>
              </View>
            </TouchableOpacity>
         
         
            </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default VerificationScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.White,
      flex: 1,
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(14),
        backgroundColor: CUSTOM_COLOR.White,
        elevation: 3,
        justifyContent: 'space-between',
    },
    goBackButton: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: scale(32),
        justifyContent: 'center',
    },
    screenTittle2: {
        color: CUSTOM_COLOR.Black,
        fontSize: scale(15),
        fontFamily: FONT_FAMILY.NexaRegular,
        alignSelf: 'center',
      },
    
    viewTitle: {
        justifyContent: 'center',
        width: scale(150),
        height: scale(32),
        alignSelf: 'center',
      },
    headerTitle: {
        color: CUSTOM_COLOR.Black,
        fontFamily: FONT_FAMILY.NexaBold,
        fontSize: scale(18),
        letterSpacing: scale(-0.7),
        textAlign: 'center',
    },
    
    tittleBox: {
        marginTop: scale(35),
        width: '100%',
    },      
    content: {
        color: CUSTOM_COLOR.Black,
        fontSize: scale(20),
        fontFamily: FONT_FAMILY.NexaRegular,
        alignSelf: 'center',
    },
    emailText: {
        fontSize: scale(18),
        fontFamily: FONT_FAMILY.NexaRegular,
        lineHeight: scale(25.2),
        color: CUSTOM_COLOR.Primary,
    },
    otpContainer: {
        marginHorizontal: scale(20),
        marginTop: scale(30),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    otpBox: {
        borderRadius: scale(5),
        borderColor: CUSTOM_COLOR.Black,
        borderWidth: scale(0.5),
    },
    otpText: {
        fontSize: scale(25),
        color: CUSTOM_COLOR.Black,
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: scale(18),
        paddingVertical: scale(10),
    },
    verifyButtonBoxPosition: {
        position: 'absolute',
        marginTop: scale(300),
        alignSelf: 'center',
    },
    verifyButtonBox: {
        backgroundColor: CUSTOM_COLOR.Primary,
        height: scale(53),
        width: scale(278),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 26.5,
    },
    buttonText: {
        color: CUSTOM_COLOR.White,
        fontFamily: FONT_FAMILY.NexaRegular,
    },
    textFailed: {
        paddingLeft: scale(25),
        paddingTop: scale(17),
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: scale(12),
        color: CUSTOM_COLOR.Red,
    },
});
  