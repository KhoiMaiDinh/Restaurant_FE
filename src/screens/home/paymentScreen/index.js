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
import { IC_GoBack } from '../../../assets/icons';
import { useSelector } from 'react-redux';
import PaymentChoosing from './component/paymentChoosing';
import { IMG_PaymentBackGround } from '../../../assets/images';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {store} from './../../../redux/store';

const PaymentScreen = (props) => {
  const navigation = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkValidNumber, setCheckValidNumber] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const {user} = store.getState().user;

  const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const reservationSchema = yup.object({
    name: yup.string().required('Tên khách hàng không được để trống'),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
      .max(11, "Số điện thoại không hợp lệ")
      .min(10, "Số điện thoại không hợp lệ")
      .required('Số điện thoại không được để trống'),
    address: yup.string().required("Địa chỉ không được để trống"),

  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userId: user._id,
      name: '',
      phoneNumber: '',
    },
    resolver: yupResolver(reservationSchema),
  });

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
              
            <Controller
              name="name"
              control={control}
              render={({field: {onChange, value}}) => (
                <View style = {styles.inputFullNameBox}>
                  <TextInput
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Tên người nhận"
                    style={styles.inputText}
                    keyboardType="ascii-capable"
                    onChangeText={text => onChange(text)}
                    value={value}
                    />
                     <View style={{marginTop: scale(5), marginLeft: scale(-35)}}>
                    {errors?.name && (
                      <Text style={styles.textFailed}>
                        {errors.name.message}
                      </Text>
                    )}
                  </View>
                </View>
                )}
                />
                

                <Controller
              name="address"
              control={control}
              render={({field: {onChange, value}}) => (
                <View style = {styles.inputFullNameBox}>
                  <TextInput
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Địa chỉ"
                    style={styles.inputText}
                    keyboardType="ascii-capable"
                    onChangeText={text => onChange(text)}
                    value={value}
                    />
                     <View style={{marginTop: scale(5), marginLeft: scale(-35)}}>
                    {errors?.address && (
                      <Text style={styles.textFailed}>
                        {errors.address.message}
                      </Text>
                    )}
                  </View>
                </View>
                )}
                />

                <Controller
              name="phoneNumber"
              control={control}
              render={({field: {onChange, value}}) => (
                <View style={styles.inputPhoneNumberBox}>
                  <TextInput
                    onChangeText={number => onChange(number)}
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Số điện thoại"
                    style={styles.inputText}
                    keyboardType="numeric"
                    value={value}
                  />
                  <View style={{marginTop: scale(5), marginLeft: scale(-35)}}>
                    {errors?.phoneNumber && (
                      <Text style={styles.textFailed}>
                        {errors.phoneNumber.message}
                      </Text>
                    )}
                  </View>
                </View>
              )}
            />

              
                
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
          <PaymentChoosing/>
        </View>
        <View style={styles.totalBox}>
                <Text style={styles.total}>Tổng tiền thanh toán</Text>
                <Text style={styles.money}>{Intl.NumberFormat('vn-VN').format(totalAmount)} ₫</Text>
        </View>
        <TouchableOpacity style={styles.PlaceOrderButtonBoxPosition} onPress={handleSubmit(reservationSchema)}>
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
  bg:{
    marginTop: scale(60),
  }, 
  view:{
    marginTop: scale(10),
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
    marginTop: scale(60),
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
    marginTop: scale(4),
    alignSelf: 'center',
  },
  image: {
      width: '100%',
      height: scale(162),
      justifyContent: 'center',
      alignSelf: 'center',
    },
  inputFullNameBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputAddressBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputPhoneNumberBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputOrderDetailsBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputMethodBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
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
    alignSelf: 'center',
  },
  radioButton:
  {
    marginRight: scale(80),
  },
  totalBox: {
    marginTop: scale(40),
    height: scale(43),
    flexDirection: 'row',
    justifyContent: 'space-around',
    
},
  total: {   
    marginLeft: scale(15),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(15),
  },
  money:
  {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
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
