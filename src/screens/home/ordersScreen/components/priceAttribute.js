import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import {CUSTOM_COLOR} from '../../../../constants/color';
import { useNavigation } from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');

const PriceAttribute = props => {
  const navigation = useNavigation();
  console.log(props.data);
  return (
    <TouchableOpacity style={[props.style, styles.view1]} 
      onPress={() => {
        console.log("id ->>.",props.id);
        props.navigation.navigate('SingleFoodItemScreenForward', {
          _id:props.id,
        });
      }}>
      <View style={styles.viewValue}>
        <Text style={styles.styleTextNumber} >{props.textNumber}</Text>
      </View>
      <View style={styles.viewTextName}>
        <Text style={styles.styleTextName} numberOfLines={1}>{props.textName}</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.styleTextPrice}>{Intl.NumberFormat('vn-VN').format(props.textPrice)} ₫</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PriceAttribute;

const styles = StyleSheet.create({
  view1: {
    width: screenWidth,
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewValue: {
    width: scale(30),
    height: scale(30),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Grey,
    justifyContent: 'center',
    //marginLeft: scale(10),
  },
  styleTextNumber: {
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
    textAlign: 'center',
    letterSpacing: -0.47,
  },
  viewTextName: {
    width: scale(170),
    height: scale(27),
    marginLeft: scale(20),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  styleTextName: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(12),
    textAlign: 'left',
    letterSpacing: -0.39,
  },
  viewPrice: {
    width: scale(120),
    height: scale(35),
    justifyContent: 'center',
   // borderWidth: 1,
  },
  styleTextPrice: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    textAlign: 'right',
    letterSpacing: -0.39,
  },
});
