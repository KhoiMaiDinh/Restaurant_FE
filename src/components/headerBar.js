import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { IC_Cart, IC_Drawer } from '../assets/icons';
import scale from '../utils/responsive';
import { CUSTOM_COLOR } from '../constants/color';
import FONT_FAMILY from '../constants/fonts';

const HeaderBar = ({pageName, style}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.drawerButton}>
        <IC_Drawer />
      </TouchableOpacity>
      <Text style={styles.homeName}>{pageName}</Text>
      <TouchableOpacity style={styles.cartButton}>
        <IC_Cart />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  drawerButton: {
    top: scale(14),
    left: scale(14),
  },
  cartButton: {
    top: scale(14),
    right: scale(14),
  },
  homeName: {
    color: CUSTOM_COLOR.Black,
    top: scale(20),
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(17),
    letterSpacing: scale(-0.42),
  },
});
