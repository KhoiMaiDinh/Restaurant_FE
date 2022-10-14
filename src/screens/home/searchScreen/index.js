import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import HeaderBar from '../../../components/headerBar';
import SearchBar from './components/searchBar';
import Foods from './components/foodsInfo';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <SearchBar />
      <Foods />
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
