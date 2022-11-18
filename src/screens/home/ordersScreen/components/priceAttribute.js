import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import {CUSTOM_COLOR} from '../../../../constants/color';

const {width: screenWidth} = Dimensions.get('window');

const PriceAttribute = props => {
  return (
    <View style={[props.style, styles.view1]}>
      <View style={styles.viewValue}>
        <Text style={styles.styleTextNumber} >{props.textNumber}</Text>
      </View>
      <View style={styles.viewTextName}>
        <Text style={styles.styleTextName} numberOfLines={1}>{props.textName}</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.styleTextPrice}>{props.textPrice} VND</Text>
      </View>
    </View>
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
    width: scale(170),
    height: scale(27),
    //backgroundColor: CUSTOM_COLOR.Black,
    marginLeft: scale(20),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  styleTextName: {
    color: CUSTOM_COLOR.San_Juan,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    textAlign: 'left',
    letterSpacing: -0.39,
  },
  viewPrice: {
    width: scale(130),
    height: scale(35),
    justifyContent: 'center',
  },
  styleTextPrice: {
    color: CUSTOM_COLOR.San_Juan,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    textAlign: 'right',
    letterSpacing: -0.39,
  },
});
