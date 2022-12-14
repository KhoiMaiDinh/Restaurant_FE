import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import Foods from './components/foodsInfo';

const SearchScreen = ({searchData, props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Foods searchData={searchData} {...props} />
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
