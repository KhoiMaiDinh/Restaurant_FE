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
  import React, {useState} from 'react';
  import {CUSTOM_COLOR} from '../../../constants/color';
  import { IMG_2 } from '../../../assets/images';
  import scale from '../../../utils/responsive';
  import FONT_FAMILY from '../../../constants/fonts';

  const ReservationScreen = (props) => {
    const navigation = props;
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.tittleBox}>
              <Text style={styles.screenTittle}>Brazilian Steak House</Text>
              <Text style={styles.restaurantAdd}>777 Steiner Street, San Francisco, CA, 94115</Text>
          </View>
          <Image style={styles.image} source={IMG_2} />
          <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
              <KeyboardAvoidingView>
                <View style = {styles.inputFullNameBox}>
                  <TextInput
                    placeholderTextColor={CUSTOM_COLOR.Grey}
                    placeholder="Full Name"
                    style={styles.inputText}
                    keyboardType="ascii-capable"
                  />
                </View>
                <View style={styles.inputLastNameBox}>
                  <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Last Name"
                  style={styles.inputText}
                  keyboardType="ascii-capable"
                  />
                </View>
                <View style={styles.inputPhoneNumberBox}>
                  <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Phone Number"
                  style={styles.inputText}
                  keyboardType="numeric"
                  />
                </View>

                <View style={styles.inputReservationDetailsBox}>
                  <TextInput
                  placeholderTextColor={CUSTOM_COLOR.Grey}
                  placeholder="Reservation Details"
                  style={styles.inputText}
                  keyboardType="ascii-capable"
                  />
                </View>
              </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <TouchableOpacity style={styles.MakeReservationButtonBoxPosition}>
              <View style={styles.MakeReservationButtonBox}>
              <Text style={styles.buttonText}>Make Reservation</Text>
              </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default ReservationScreen;
  
  const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      backgroundColor: CUSTOM_COLOR.White,
    },
    tittleBox: {
      position: 'absolute',
      top: scale(183),
      left: scale(90),
      
    },
    screenTittle: {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(20),
      fontFamily: FONT_FAMILY.NexaRegular,
      
    },
    restaurantAdd: {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(13),
      fontFamily: FONT_FAMILY.NexaRegular,
      top: scale(4),
      left: scale(-30),
    },
    image: {
        width: '100%',
        height: scale(162),
        justifyContent: 'center',
        alignSelf: 'center',
      },
    inputFullNameBox: {
      position: 'absolute',
      top: scale(110),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
    },
    inputLastNameBox: {
      position: 'absolute',
      top: scale(170),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
    },
    inputPhoneNumberBox: {
      position: 'absolute',
      top: scale(230),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
    },
    inputReservationDetailsBox: {
        position: 'absolute',
        top: scale(290),
        alignSelf: 'center',
        height: scale(38),
        width: scale(323),
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.San_Juan,
        borderRadius: 4,
    },
    inputText: {
      left: scale(15),
      color: CUSTOM_COLOR.Black,
      width: scale(299),
      fontFamily: FONT_FAMILY.NexaRegular,
      lineHeight: scale(21,67),
    },
    MakeReservationButtonBoxPosition: {
      position: 'absolute',
      top: scale(528),
      alignSelf: 'center',
    },
    MakeReservationButtonBox: {
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
  });
  