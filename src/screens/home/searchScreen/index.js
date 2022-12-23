import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import Foods from './components/foodsInfo';
import SearchBar from './components/searchBar';
import { IC_GoBack } from '../../../assets/icons';
import scale from '../../../utils/responsive';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = ({searchData, props, setSearch}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewGoBackText}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <IC_GoBack style={styles.goBack} />
          {/* <Text style={styles.screenTittle2}>Quay lại</Text> */}
        </TouchableOpacity>
      </View>
      <SearchBar setSearch={setSearch}/>
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
