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
  KeyboardAvoidingView,
  Dimensions,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import {IMG_2, IMG_ReservationBackground} from '../../../assets/images';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import DatePicker from 'react-native-date-picker';
import {store} from './../../../redux/store';
import userApi from '../../../services/userApi';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const reservationSchema = yup.object({
  name: yup.string().required('Tên khách hàng không được để trống'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
});

const ReservationScreen = props => {
  const navigation = props;
  const [checkValidNumber, setCheckValidNumber] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const {user} = store.getState().user;

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
      bookingDate: date.toLocaleDateString('vi-VN'),
      bookingTime: time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      quantity: 1,
    },
    resolver: yupResolver(reservationSchema),
  });

  let inCount = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  let decCount = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleReservate = async data => {
    try {
      const reservationData = {
        userId: user._id,
        name: data.name,
        phoneNumber: data.phoneNumber,
        bookingDate: date.toLocaleDateString('vi-VN'),
        bookingTime: time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        quantity: quantity,
      };
      await userApi.reservate(reservationData);
      // Thông báo thành công
    } catch (error) {
      //Thông báo thất bại
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_ReservationBackground}
        resizeMode={'cover'}
        style={styles.backGround}>
        <View style={styles.tittleBox}>
          <Text style={styles.screenTittle}>UIT group 3</Text>
          <Text style={styles.restaurantAdd}>
            Đại học Công nghệ Thông tin, ĐHQG TPHCM
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
          <KeyboardAvoidingView>
            <Controller
              name="name"
              control={control}
              render={({field: {onChange, value}}) => (
                <View style={styles.inputBox}>
                  <TextInput
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Họ Tên"
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
              name="phoneNumber"
              control={control}
              render={({field: {onChange, value}}) => (
                <View style={styles.inputBox}>
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

            <View style={styles.inputDatePickerBox}>
              <View style={styles.inputDateBox}>
                <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Ngày đặt chỗ"
                  style={styles.inputText}
                  keyboardType="ascii-capable"
                  value={date?.toLocaleDateString('vi-VN')}
                  editable={false}
                />
              </View>
              <View style={styles.datePickerButton}>
                <Button title="Chọn ngày" onPress={() => setOpenDate(true)} />
                <DatePicker
                  modal
                  mode={'date'}
                  open={openDate}
                  date={date}
                  onConfirm={date => {
                    setOpenDate(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpenDate(false);
                  }}
                />
              </View>
            </View>

            <View style={styles.inputDatePickerBox}>
              <View style={styles.inputDateBox}>
                <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Giờ đặt"
                  style={styles.inputText}
                  keyboardType="ascii-capable"
                  value={time?.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                  editable={false}
                />
              </View>
              <View style={styles.datePickerButton}>
                <Button title="Chọn giờ" onPress={() => setOpenTime(true)} />
                <DatePicker
                  modal
                  mode={'time'}
                  open={openTime}
                  date={time}
                  onConfirm={date => {
                    setOpenTime(false);
                    setTime(date);
                  }}
                  onCancel={() => {
                    setOpenTime(false);
                  }}
                />
              </View>
            </View>

            <View style={styles.inputGuestBox}>
              <Text style={styles.ClientAmount}>Số lượng khách</Text>
              <View style={styles.countBox}>
                <TouchableOpacity onPress={decCount}>
                  <View style={styles.iconBox}>
                    <Text style={styles.minus}>-</Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.amount}>{quantity}</Text>
                <TouchableOpacity onPress={inCount}>
                  <View style={styles.iconBox}>
                    <Text>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={styles.MakeReservationButtonBoxPosition}
          onPress={handleSubmit(handleReservate)}>
          <View style={styles.MakeReservationButtonBox}>
            <Text style={styles.buttonText}>Đặt chỗ</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
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
    height: Dimensions.get('window').height * 0.9,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
  },
  tittleBox: {
    marginBottom: scale(50),
    marginTop: scale(70),
    alignSelf: 'center',
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
  inputBox: {
    marginBottom: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    borderRadius: 4,
    backgroundColor: CUSTOM_COLOR.White,
  },
  inputDateBox: {
    alignSelf: 'center',
    height: scale(43),
    width: scale(200),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.San_Juan,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 4,
    marginRight: scale(10),
  },
  datePickerButton: {
    flex: 1,
    height: scale(43),
  },
  inputDatePickerBox: {
    flexDirection: 'row',
    marginBottom: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
    justifyContent: 'space-between',
    borderColor: CUSTOM_COLOR.San_Juan,
  },
  inputGuestBox: {
    marginBottom: scale(30),
    alignSelf: 'center',
    height: scale(43),
    width: scale(323),
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
  minus: {
    top: scale(-2),
    fontSize: scale(30),
  },
  plus: {
    fontSize: scale(30),
  },
  ClientAmount: {
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
    lineHeight: scale(20.6),
    fontSize: scale(15),
  },
  MakeReservationButtonBoxPosition: {
    width: scale(278),
    alignSelf: 'center',
  },
  MakeReservationButtonBox: {
    backgroundColor: CUSTOM_COLOR.Primary,
    height: scale(43),
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
