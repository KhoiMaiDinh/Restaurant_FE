import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import Foods from './components/foodsInfo';
import SearchBar from './components/searchBar';
import { IC_GoBack } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import foodApi from '../../../services/foodApi';
import scale from '../../../utils/responsive';

const SearchScreen = ({ props }) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        if (search) {
          const {foods} = await foodApi.getAll('', '', search);
          setSearchData(foods);
        }
      } catch (error) {
        console.log(error)
      }
    };
    getSearchData();
  }, [search]);


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
        <SearchBar setSearch={setSearch} search={search}/>
        <View style={{width: 1, height: 1}}/>
      </View>
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
  goBack: {
    alignSelf: 'center',
    flexDirection: 'row',
    //height: scale(32),
    justifyContent: 'center',
  },
  viewGoBackText: {
    flexDirection: 'row',
    marginTop: scale(15),
    //borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
});
