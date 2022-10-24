import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IC_Cart, IC_Drawer} from '../assets/icons';
import scale from '../utils/responsive';
import {CUSTOM_COLOR} from '../constants/color';
import FONT_FAMILY from '../constants/fonts';
import SearchBar from '../screens/home/searchScreen/components/searchBar';

const HeaderBar = ({pageName, style, navigation, setSearch}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const openCart = () => {
    navigation.navigate("CartScreen");
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.drawerButton} onPress={() => openMenu()}>
        <IC_Drawer />
      </TouchableOpacity>
      {pageName === 'Search' ? (
        <SearchBar setSearch={setSearch}/>
      ) : (
        <Text style={styles.homeName}>{pageName}</Text>
      )}

      <TouchableOpacity style={styles.cartButton} onPress={() => openCart()}>
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
    width: '100%',
    height: '100%',
  },
  drawerButton: {
    top: scale(14),
    //left: scale(14),
  },
  cartButton: {
    top: scale(14),
    //right: scale(14),
  },
  homeName: {
    color: CUSTOM_COLOR.Black,
    top: scale(20),
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(17),
    letterSpacing: scale(-0.42),
  },
});
