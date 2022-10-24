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
  import { IMG_2 } from '../../../assets/images';
  import scale from '../../../utils/responsive';
  import FONT_FAMILY from '../../../constants/fonts';
  import { IC_Drawer, IC_Cart } from '../../../assets/icons';

  const ReservationScreen = (props) => {
    const navigation = props;
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss() && TextInput.clearFocus()}>
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                
                    <TouchableOpacity>
                        <IC_Drawer style={styles.drawerButton}/>
                    </TouchableOpacity>
                
                    <TouchableOpacity>
                        <IC_Cart style={styles.cartButton}/>
                    </TouchableOpacity>

                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>Reservation</Text>
                </View>
            </View>
            <View style={styles.tittleBox}>
                <Text style={styles.screenTittle}>Brazilian Steak House</Text>
                <Text style={styles.restaurantAdd}>777 Steiner Street, San Francisco, CA, 94115</Text>
            </View>
                <Image style={styles.image} source={IMG_2} />
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
            
            <TouchableOpacity style={styles.MakeReservationButtonBoxPosition}>
                <View style={styles.MakeReservationButtonBox}>
                <Text style={styles.buttonText}>Make Reservation</Text>
                </View>
            </TouchableOpacity>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
  };
  
  export default ReservationScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.White,
      flex: 1,
    },
    view:{
        flex: 0.08,
        justifyContent: 'space-between',
        width: '70%',
        height: scale(32),
        flexDirection: 'row',
    },
    drawerButton: {
      position: 'absolute',
      left: scale(20),
      top: scale(10),
    },
    cartButton: {
        position: 'absolute',
        left: scale(300),
        top: scale(10),
    },
    textTitle:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        letterSpacing: -0.7,
    },
    viewTitle:{
        justifyContent: 'center',
        width: scale(150),
        height: scale(32),
        alignSelf: 'center',
    },
   
    tittleBox: {
      position: 'absolute',
      top: scale(273),
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
        top: scale(23),
        width: '100%',
        height: scale(162),
        justifyContent: 'center',
        alignSelf: 'center',
      },
    inputFullNameBox: {
      position: 'absolute',
      top: scale(345),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
    },
    inputPhoneNumberBox: {
      position: 'absolute',
      top: scale(449),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
    },
    inputReservationDetailsBox: {
        position: 'absolute',
        top: scale(501),
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
    inputLastNameBox: {
      position: 'absolute',
      top: scale(397),
      alignSelf: 'center',
      height: scale(38),
      width: scale(323),
      borderWidth: 1,
      borderColor: CUSTOM_COLOR.San_Juan,
      borderRadius: 4,
    },
    MakeReservationButtonBoxPosition: {
      position: 'absolute',
      top: scale(558),
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
  