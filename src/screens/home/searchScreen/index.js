import {SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, { useState } from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import Foods from './components/foodsInfo';
import SearchBar from './components/searchBar';
import { IC_GoBack } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import foodApi from '../../../services/foodApi';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import SkeletonSearch from './components/skeletonSearch';

const SearchScreen = ({ props }) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        setNotFound(true);
        if (search) {
          setNotFound(false);
          setLoading(true);
          const {foods} = await foodApi.getAll('', '', search);
          setSearchData(foods);
          setLoading(false);
          if(!searchData)
          {
            setNotFound(true);
          }
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
        <View style={{width: 24, height: 24}}/>
      </View>
      {notFound ? (<Text style={{fontFamily: FONT_FAMILY.NexaBold,fontSize: 32, 
        textAlign:'center', marginTop: scale(260),color: CUSTOM_COLOR.Black,}}>
        {'Hãy tìm kiếm món ăn \nmà bạn yêu thích!'}</Text>
      ):(
        loading ? (
        <SkeletonSearch />
      ) : (
      <Foods searchData={searchData} {...props} />)
      )}
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
    justifyContent: 'center',
  },
  viewGoBackText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    backgroundColor: CUSTOM_COLOR.White,
    elevation: 3,
    paddingVertical: scale(13),
    
  }
});
