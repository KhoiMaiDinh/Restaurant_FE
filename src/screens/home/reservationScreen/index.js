import {
    ImageBackground,
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    KeyboardAvoidingView, 
    ScrollView, 
    Dimensions
  } from 'react-native';
  import React, {useState} from 'react';
  import {CUSTOM_COLOR} from '../../../constants/color';
  import { IMG_2, IMG_ReservationBackground } from '../../../assets/images';
  import scale from '../../../utils/responsive';
  import FONT_FAMILY from '../../../constants/fonts';
  import RestaurantsList from './components/resList';
  import { IC_Plus, IC_Minus } from '../../../assets/icons';

  const ReservationScreen = (props) => {
    const navigation = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkValidNumber, setCheckValidNumber] = useState(false);
    const handleCheckNumber = text => {
      let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
      setPhoneNumber(text);
      if (phoneNumber.test(text)) {
        setCheckValidNumber(false);
      } else {
        setCheckValidNumber(true);
      }
    };
    const [count1, setCount1] = useState(1);

  let inCount = () => {
    if (count1 < 10) {
      setCount1(count1 + 1);
    }
  };
  let decCount = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={IMG_ReservationBackground} resizeMode={'cover'} style={styles.backGround}>
          <View style={styles.tittleBox}>
              <Text style={styles.screenTittle}>UIT group 3</Text>
              <Text style={styles.restaurantAdd}>Đại học Công nghệ Thông tin, ĐHQG TPHCM</Text>
          </View>
          {/* <Image style={styles.image} source={IMG_2} /> */}
          <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
              <KeyboardAvoidingView>
                <View style = {styles.inputFullNameBox}>
                  <TextInput
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Họ Tên"
                    style={styles.inputText}
                    keyboardType="ascii-capable"
                  />
                </View>
                <View style={styles.inputReservationDetailsBox}>
                  <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Thời gian nhận bàn"
                  style={styles.inputText}
                  keyboardType="ascii-capable"
                  />
                </View>
                
                  <View style={styles.inputPhoneNumberBox}>
                    <TextInput
                    onChangeText={text => handleCheckNumber(text)}
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Số điện thoại"
                    style={styles.inputText}
                    keyboardType="numeric"
                    />
                  <View style={{marginTop: scale(5), marginLeft: scale(-35)}}>
                    {checkValidNumber ? (
                      <Text style={styles.textFailed}>Sai định dạng số điện thoại VD: 033 388 3127</Text>
                      ) : (
                        <Text style={styles.textFailed}> </Text>
                        )}                  
                  </View>
                  </View>
                <View style={styles.inputLocationBox}>
                  <RestaurantsList></RestaurantsList>
                </View>
                <View style={styles.inputGuestBox}>
                  <Text style={styles.inputText}>Số lượng khách</Text>
                  <View style={styles.countBox}>
                    <TouchableOpacity onPress={decCount}>
                      <View style={styles.iconBox}>
                        <Text style={styles.minus}>-</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.amount}>{count1}</Text>
                    <TouchableOpacity onPress={inCount}>
                      <View style={styles.iconBox}>
                        <Text>+</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <TouchableOpacity style={styles.MakeReservationButtonBoxPosition}>
              <View style={styles.MakeReservationButtonBox}>
                <Text style={styles.buttonText}>Đặt chỗ</Text>
              </View>
          </TouchableOpacity>
          </ImageBackground>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default ReservationScreen;
  
  const styles = StyleSheet.create({
    container: {
      // height: Dimensions.get('window').height,
      // width: Dimensions.get('window').width,
      flex: 1,
      backgroundColor: CUSTOM_COLOR.White,
    },
    backGround: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
    },
    tittleBox: {
      position: 'absolute',
      top: scale(50),
      //left: scale(90),
      width: '100%',
      
    },
    screenTittle: {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(20),
      fontFamily: FONT_FAMILY.NexaRegular,
      alignSelf: 'center',
    },
    restaurantAdd: {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(13),
      fontFamily: FONT_FAMILY.NexaRegular,
      top: scale(4),
      alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: scale(162),
        justifyContent: 'center',
        alignSelf: 'center',
      },
    inputFullNameBox: {
      position: 'absolute',
      top: scale(-200),
      alignSelf: 'center',
      height: scale(43),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
      backgroundColor: CUSTOM_COLOR.White,
    },
    inputPhoneNumberBox: {
      position: 'absolute',
      top: scale(-130),
      alignSelf: 'center',
      height: scale(43),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
      backgroundColor: CUSTOM_COLOR.White,
    },
    inputLocationBox: {
      position: 'absolute',
      top: scale(-60),
      alignSelf: 'center',
      height: scale(43),
      width: scale(323),
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
      backgroundColor: CUSTOM_COLOR.White,
    },
    inputReservationDetailsBox: {
        position: 'absolute',
        top: scale(10),
        alignSelf: 'center',
        height: scale(43),
        width: scale(323),
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.San_Juan,
        borderRadius: 4,
        backgroundColor: CUSTOM_COLOR.White,
    },
    inputGuestBox: {
      position: 'absolute',
      top: scale(80),
      alignSelf: 'center',
      height: scale(43),
      width: scale(323),
      //borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
  },
  countBox: {
    width: scale(80),
    height: scale(43),
    borderRadius: scale(1000),
    borderWidth: scale(1),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: -25,
  },
  amount: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(16),
    fontFamily: FONT_FAMILY.NexaRegular,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus:
  {
    top: scale(-2),
    fontSize: scale(30),
  },
  plus:
  {
    fontSize: scale(30),
  },
    inputText: {
      left: scale(15),
      color: CUSTOM_COLOR.Black,
      width: scale(299),
      fontFamily: FONT_FAMILY.NexaRegular,
      lineHeight: scale(20.6),
      fontSize: scale(15),
    },
    MakeReservationButtonBoxPosition: {
      position: 'absolute',
      top: scale(520),
      alignSelf: 'center',
    },
    MakeReservationButtonBox: {
      backgroundColor: CUSTOM_COLOR.Primary,
      height: scale(43),
      width: scale(278),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
    },
    buttonText: {
      color: CUSTOM_COLOR.White,
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    textFailed: {
      marginLeft: scale(50), 
      fontFamily: FONT_FAMILY.NexaRegular,
      fontSize: scale(12),
      color: CUSTOM_COLOR.Red,
    },
  });
  