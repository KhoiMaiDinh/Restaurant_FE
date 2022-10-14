import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CUSTOM_COLOR} from '../../../../constants/color';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';

const ButtonReOrder = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>REORDER</Text>
    </TouchableOpacity>
  );
};

export default ButtonReOrder;

const styles = StyleSheet.create({
  button: {

    backgroundColor: CUSTOM_COLOR.Primary,
    borderRadius: 4,
    width: scale(112),
    height: scale(31),
    justifyContent: 'center',
    alignSelf: 'flex-end',
   
  },
  text: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 11,
    alignSelf: 'center',
  },
});
