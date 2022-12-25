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
  KeyboardAvoidingView, 
  ScrollView, 
  Dimensions
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
//import { IMG_2 } from '../../../assets/images';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import PaymentChoosing from '../paymentScreen/component/paymentChoosing';
import { IC_GoBack } from '../../../assets/icons';
import { useSelector } from 'react-redux';
import { IMG_PaymentBackGround } from '../../../assets/images';

const PaymentScreen = (props) => {
  const navigation = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkValidNumber, setCheckValidNumber] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0)

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; 

  const handleCheckNumber = text => {
    let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    setPhoneNumber(text);
    if (phoneNumber.test(text)) {
      setCheckValidNumber(false);
    } else {
      setCheckValidNumber(true);
    }
  };

  const onCalculateAmount = () => {
    let total = 0
    if(Array.isArray(cartItems)){
        cartItems.map(food => {
            total += food.price * food.qty
        })
    }
     setTotalAmount(total);
}

useEffect(() => {
  onCalculateAmount()
},[cartItems])

  
  return (
    <ScrollView>
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
                <Text style={styles.textTitle}>Thanh toán</Text>
            </View>
        </View>
        
        <View style={styles.tittleBox}>
            <Text style={styles.screenTittle}>Xác nhận đơn hàng</Text>
        </View>
        <View style={styles.bg}>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
            <KeyboardAvoidingView>
              

                <View style = {styles.inputFullNameBox}>
                  <TextInput
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Tên người nhận"
                    style={styles.inputText}
                    keyboardType="ascii-capable"
                    />
                </View>
                <View style={styles.inputAddressBox}>
                  <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Địa chỉ"
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
                </View>
                <View style={{marginTop: scale(270)}}>
                  {checkValidNumber ? (
                    <Text style={styles.textFailed}>Sai định dạng số điện thoại VD: 033 388 3127</Text>
                    ) : (
                      <Text style={styles.textFailed}> </Text>
                      )}                  
                </View>
                <View style={styles.inputOrderDetailsBox}>
                  <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Ghi chú"
                  style={styles.inputText}
                  keyboardType="ascii-capable"
                  />
                </View>
                <View style={styles.inputMethodBox}>
                  <Text style={styles.methods}>Vui lòng chọn hình thức thanh toán</Text>
                  
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <View style={styles.radioButton}>
          <PaymentChoosing style={styles.choice}/>
        </View>
        <View style={styles.totalBox}>
                <Text style={styles.total}>Tổng tiền thanh toán</Text>
                <Text style={styles.money}>{Intl.NumberFormat('vn-VN').format(totalAmount)} ₫</Text>
              </View>
        <TouchableOpacity style={styles.PlaceOrderButtonBoxPosition}>
            <View style={styles.PlaceOrderButtonBox}>
              <Text style={styles.buttonText}>Đặt hàng</Text>
            </View>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: CUSTOM_COLOR.White,
  },
bg: 
  {
//     backgroundColor: CUSTOM_COLOR.Primary,
    top: scale(60),
//     borderTopStartRadius: scale(25),
//     borderTopRightRadius: scale(25),
//     height: scale(700),
 }, 
  view:{
    top: scale(10),
    flex: 0.08,
    justifyContent: 'space-between',
    width: '70%',
    height: scale(32),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTitle:{
    justifyContent: 'center',
    width: scale(150),
    height: scale(32),
    alignSelf: 'center',
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
  textTitle:{
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(18),
    letterSpacing: scale(-0.7),
    textAlign: 'center',
  },
  tittleBox: {
    position: 'absolute',
    top: scale(60),
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
    //left: scale(-30),
  },
  image: {
      width: '100%',
      height: scale(162),
      justifyContent: 'center',
      alignSelf: 'center',
    },
  inputFullNameBox: {
    position: 'absolute',
    top: scale(50),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputAddressBox: {
    position: 'absolute',
    top: scale(110),
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
    top: scale(170),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputOrderDetailsBox: {
      position: 'absolute',
      top: scale(240),
      alignSelf: 'center',
      height: scale(43),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
      backgroundColor: CUSTOM_COLOR.White,
  },
  inputMethodBox: {
    position: 'absolute',
    marginTop: scale(310),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    //borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
  },
methods: {
  marginLeft: scale(15),
  color: CUSTOM_COLOR.Black,
  width: scale(299),
  fontFamily: FONT_FAMILY.NexaRegular,
  lineHeight: scale(20.6),
  fontSize: scale(15),
},

  inputText: {
    left: scale(15),
    color: CUSTOM_COLOR.Black,
    width: scale(299),
    fontFamily: FONT_FAMILY.NexaRegular,
    lineHeight: scale(20,67),
    fontSize: scale(15),
  },
  PlaceOrderButtonBoxPosition: {
    position: 'absolute',
    top: scale(528),
    alignSelf: 'center',
  },
  radioButton:
  {
    marginTop: scale(50),
    marginLeft: scale(-80),
  },
  totalBox: {
    position: 'absolute',
    marginTop: scale(400),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    //borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
},
  total: {
    
    marginLeft: scale(15),
    color: CUSTOM_COLOR.Black,
    width: scale(299),
    fontFamily: FONT_FAMILY.NexaRegular,
    lineHeight: scale(20.6),
    fontSize: scale(15),
  },
  money:
  {
    top: scale(-20),
    marginLeft: scale(265),
    color: CUSTOM_COLOR.Black,
    width: scale(299),
    fontFamily: FONT_FAMILY.NexaRegular,
    lineHeight: scale(20.6),
    fontSize: scale(15),
  },
  PlaceOrderButtonBox: {
    backgroundColor: CUSTOM_COLOR.Primary,
    height: scale(38),
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
