import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import scale from '../../../utils/responsive';
import CircularCategories from './components/circularCategory';
import FONT_FAMILY from '../../../constants/fonts';
import MostPopular from './components/mostPopular';
import BestDeals from './components/bestDeals';
import SkeletonHome from './components/skeletonHome';
import {BASE_URL} from './../../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategory = async () => {
    const token = await AsyncStorage.getItem('@token');
    const categoryURL = `${BASE_URL}/category/popular/`;
    return fetch(categoryURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(json => {
        setCategoryData(json.categories);
        // if(loading) {
        //   setLoading(false);
        // }
      });
  };

  const [bestFoodData, setBestFoodData] = useState([]);
  const getBestFood = async () => {
    const token = await AsyncStorage.getItem('@token');
    const bestFoodURL = `${BASE_URL}/food/best-deals/`;
    return fetch(bestFoodURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(json => {
        setBestFoodData(json.foods);
        if (loading) {
          setLoading(false);
        }
      });
  };

  const [foodData, setFoodData] = useState([]);
  const getPopularFood = async () => {
    const token = await AsyncStorage.getItem('@token');
    const foodURL = `${BASE_URL}/food/popular/`;
    return fetch(foodURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(json => {
        setFoodData(json.foods);
        // if(loading) {
        //   setLoading(false);
        // }
      });
  };

  useEffect(() => {
    getCategory();
    getBestFood();
    getPopularFood();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <SkeletonHome />
      ) : (
        <View style={{flex: 1}}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.viewSecond}>
              <Text style={styles.categoryText}>Danh mục món ngon</Text>
              <CircularCategories
                style={styles.categoryRow}
                categoryData={categoryData}
                {...props}
              />
              <Text style={styles.dealText}>Best Deals</Text>
              <BestDeals
                style={styles.bestDeal}
                foodData={bestFoodData}
                {...props}
              />
              <Text style={styles.dealText}>
                Nhiều người đã thử, bạn có muốn?
              </Text>
              <MostPopular foodData={foodData} {...props} />
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  categoryText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaBold,
    left: scale(22),
  },
  categoryRow: {
    marginTop: scale(14),
  },
  dealText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaBold,
    marginTop: scale(26),
    left: scale(22),
    marginBottom: scale(11),
  },
  popularText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaBold,
    marginTop: scale(29),
    left: scale(22),
    marginBottom: scale(40),
  },
  scrollView: {
    flex: 1,
    height: Dimensions.get('window').height * 0.95,
  },
  viewSecond: {marginTop: scale(10)},
});
