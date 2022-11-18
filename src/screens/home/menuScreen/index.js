import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  IMG_BestDeals1,
  IMG_BestDeals2,
  IMG_BestDeals3,
  IMG_BestDeals4,
  IMG_BestDeals5,
  IMG_BestDeals6,
  IMG_BestDeals7,
  IMG_BestDeals8,
} from '../../../assets/images';
import {CUSTOM_COLOR} from '../../../constants/color';
import scale from '../../../utils/responsive';
import ImageTab from './components/imageTab';
import SkeletonMenu from './components/skeletonMenu';
import { BASE_URL } from '../../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuScreen = props => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCategory = async () => {
    const token = await AsyncStorage.getItem(`@token`)
    const categoryURL =`${BASE_URL}/category/`;

    return fetch(categoryURL,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(json => {setCategoryData(json.categories);
        if(loading) {
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar} />
      {loading ? (
        <SkeletonMenu/>
      ):(
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={{alignContent: 'space-around'}}
        horizontal={false}
        data={categoryData}
        keyExtractor={data => data._id}
        numColumns={2}
        columnWrapperStyle={styles.wrapper}
        renderItem={({item}) => (
          <View style={styles.view1}>
            <ImageTab source={{uri: `${item.image}`}} text={item.name} {...props} categoryData={item}/>
            <View style={{height: 20}} />
          </View>
        )}></FlatList>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  scrollView: {
    flex: 1,
  },
  view1: {
    left: scale(20),
    flex: 0.5,
  },
  wrapper: {
    marginBottom: scale(5),
  },
});
