import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IC_Cart, IC_Drawer} from '../assets/icons';
import scale from '../utils/responsive';
import {CUSTOM_COLOR} from '../constants/color';
import FONT_FAMILY from '../constants/fonts';
import SearchBar from '../screens/home/searchScreen/components/searchBar';
import { useSelector } from 'react-redux';
import SearchButton from '../screens/home/searchScreen/components/searchButton';

const HeaderBar = ({pageName, style, navigation, setSearch}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const openCart = () => {
    navigation.navigate('CartScreen');
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const numberOfProduct = cartItems.length;
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerButton} onPress={() => openMenu()}>
        <IC_Drawer />
      </TouchableOpacity>
      {pageName === 'Trang chủ' ? (
        <SearchButton navigation = {navigation}/>
      ) : (
        <Text style={styles.homeName}>{pageName}</Text>
      )}

      <TouchableOpacity style={styles.cartButton} onPress={() => openCart()}>
        <IC_Cart nOP = {numberOfProduct}/>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  homeName: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(18),
    letterSpacing: scale(-0.7),
    textAlign: 'center',
  },
});
