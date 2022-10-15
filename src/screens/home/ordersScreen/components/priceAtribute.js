import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import {CUSTOM_COLOR} from '../../../../constants/color';

const {width: screenWidth} = Dimensions.get('window');

const PriceAtribute = props => {
  return (
    <View style={[props.style, styles.view1]}>
      <View style={styles.viewValue}>
        <Text style={styles.styleTextNumber}>{props.textNumber}</Text>
      </View>
      <View style={styles.viewTextName}>
        <Text style={styles.styleTextName}>{props.textName}</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.styleTextPrice}>${props.textPrice}</Text>
      </View>
    </View>
  );
};

export default PriceAtribute;

const styles = StyleSheet.create({
  view1: {
    width: screenWidth,
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewValue: {
    width: scale(35),
    height: scale(35),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Black,
    justifyContent: 'center',
    marginLeft: scale(10),
  },
  styleTextNumber: {
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    color: CUSTOM_COLOR.Primary,
    textAlign: 'center',
    letterSpacing: -0.47,
  },
  viewTextName: {
    width: scale(150),
    height: scale(30),
    //backgroundColor: CUSTOM_COLOR.Black,
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  styleTextName: {
    color: CUSTOM_COLOR.San_Juan,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    textAlign: 'left',
    letterSpacing: -0.39,
  },
  viewPrice: {
    width: scale(50),
    height: scale(30),
    marginLeft: scale(70),
    justifyContent: 'center',
  },
  styleTextPrice: {
    color: CUSTOM_COLOR.San_Juan,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    textAlign: 'right',
    letterSpacing: -0.39,
  },
});
