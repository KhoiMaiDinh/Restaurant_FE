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

const LoginScreen = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.goBackButton}>
          <IC_GoBack />
        </TouchableOpacity>
        <View style={styles.tittleBox}>
          <Text style={styles.screenTittle}>Sign In</Text>
        </View>
        <View style={styles.inputMailBox}>
          <TextInput
            onChangeText={email => setMail(email)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Phone number"
            style={styles.inputText}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputPasswordBox}>
          <TextInput
            secureTextEntry={true}
            onChangeText={Pass => setPass(Pass)}
            placeholderTextColor={CUSTOM_COLOR.Grey}
            placeholder="Password"
            style={styles.inputText}
          />
        </View>
        <TouchableOpacity style={styles.loginButtonBoxPosition}>
          <View style={styles.loginButtonBox}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.FBLoginButtonBoxPosition}>
          <View style={styles.FBLoginButtonBox}>
            <Text style={styles.buttonText}>FaceBook Login</Text>
          </View>
        </TouchableOpacity>
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
  inputMailBox: {
    position: 'absolute',
    top: scale(191),
    alignSelf: 'center',
    height: scale(53),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Navy,
    borderRadius: 26.5,
  },
  inputText: {
    left: scale(17),
    color: CUSTOM_COLOR.Black,
    width: scale(299),
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  inputPasswordBox: {
    position: 'absolute',
    top: scale(267),
    alignSelf: 'center',
    height: scale(53),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Navy,
    borderRadius: 26.5,
  },
  loginButtonBoxPosition: {
    position: 'absolute',
    top: scale(343),
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
    top: scale(445),
    alignSelf: 'center',
  },
  FBLoginButtonBoxPosition: {
    position: 'absolute',
    top: scale(516),
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
});