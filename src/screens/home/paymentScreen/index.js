import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import {IC_GoBack} from '../../../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {store} from './../../../redux/store';
import userApi from '../../../services/userApi';
import {RadioButton} from 'react-native-paper';
import {resetCartWhenOrder} from '../../../redux/actions/cartActions';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const paymentSchema = yup.object({
  name: yup.string().required('Tên khách hàng không được để trống'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .max(11, 'Số điện thoại không hợp lệ')
    .min(10, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
  address: yup.string().required('Địa chỉ không được để trống'),
  method: yup.string().required('Vui lòng chọn phương thức thanh toán'),
});

const PaymentScreen = props => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const {user} = store.getState().user;
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userId: user._id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      address: user.address,
      desc: '',
      method: '',
    },
    resolver: yupResolver(paymentSchema),
  });

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  useEffect(() => {
    let total = 0;
    if (Array.isArray(cartItems)) {
      cartItems.forEach(food => {
        total += food.price * food.qty;
      });
    }
    setTotalAmount(total);
  }, [cartItems]);

  const handleSubmitPayment = async data => {
    try {
      setLoading(true);
      const orderData = await userApi.paying(user._id, {
        ...data,
        items: cartItems || [],
      });
      await dispatch(resetCartWhenOrder());
      setLoading(false);
      props.navigation.navigate('DrawerScreen');
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

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
          <View style={{width: scale(110), height: 1}}/>
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
                  <View style={styles.inputFullNameBox}>
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
                  <View style={styles.inputFullNameBox}>
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

              <Controller
                name="desc"
                control={control}
                render={({field: {onChange, value}}) => (
                  <View style={styles.inputOrderDetailsBox}>
                    <TextInput
                      onChangeText={text => onChange(text)}
                      placeholderTextColor={CUSTOM_COLOR.Grey}
                      placeholder="Ghi chú"
                      style={styles.inputText}
                      keyboardType="ascii-capable"
                      value={value}
                    />
                  </View>
                )}
              />
              <View style={styles.inputMethodBox}>
                <Text style={styles.methods}>
                  Vui lòng chọn hình thức thanh toán
                </Text>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <Controller
            name="method"
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.radioButton}>
                <RadioButton.Group
                  onValueChange={newValue => onChange(newValue)}
                  value={value}>
                  <View style={styles.radioGroup}>
                    <RadioButton value="direct"/>
                    <Text style={{color: CUSTOM_COLOR.Black, fontSize: scale(15), fontFamily: FONT_FAMILY.NexaRegular,}}>Thanh toán trực tiếp khi nhận hàng</Text>
                  </View>
                </RadioButton.Group>
                <View
                  style={{marginTop: scale(5), paddingHorizontal: scale(20)}}>
                  {errors?.method && (
                    <Text style={styles.textFailed}>
                      {errors.method.message}
                    </Text>
                  )}
                </View>
              </View>
            )}
          />
          <View style={styles.totalBox}>
            <Text style={styles.total}>Tổng tiền thanh toán</Text>
            <Text style={styles.money}>
              {Intl.NumberFormat('vn-VN').format(totalAmount)} ₫
            </Text>
          </View>
          <TouchableOpacity
            style={styles.PlaceOrderButtonBoxPosition}
            onPress={handleSubmit(handleSubmitPayment)}>
            <View style={styles.PlaceOrderButtonBox}>
              <Text style={styles.buttonText}>{loading?'Đang đặt hàng...':'Đặt hàng'}</Text>
              {loading && <ActivityIndicator  color={CUSTOM_COLOR.White} size={30}/>}
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
  bg: {
    marginTop: scale(30),
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(14),
    backgroundColor: CUSTOM_COLOR.White,
    elevation: 3,
    justifyContent: 'space-between'
  },
  viewTitle: {
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
  textTitle: {
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
    borderRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputAddressBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputPhoneNumberBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputOrderDetailsBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputMethodBox: {
    marginTop: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: 'auto',
  },
  methods: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    lineHeight: scale(20.6),
    fontSize: scale(15),
  },
  inputText: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    lineHeight: scale(20,67),
    fontSize: scale(15),
    padding: scale(10),
  },
  PlaceOrderButtonBoxPosition: {
    alignSelf: 'center',
  },
  radioButton: {
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
  money: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(15),
  },
  PlaceOrderButtonBox: {
    backgroundColor: CUSTOM_COLOR.Primary,
    height: scale(38),
    width: scale(278),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textFailed: {
    marginLeft: scale(50),
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(12),
    color: CUSTOM_COLOR.Red,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(50),
  },
});
