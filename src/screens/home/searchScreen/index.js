import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import HeaderBar from '../../../components/headerBar';
import SearchBar from './components/searchBar';
import Foods from './components/foodsInfo';

const SearchScreen = ({searchData, props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Foods searchData={searchData} {...props}/>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
});
