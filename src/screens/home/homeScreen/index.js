import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import scale from '../../../utils/responsive';
import CircularCategories from './components/circularCategory';
import FONT_FAMILY from '../../../constants/fonts';
import MostPopular from './components/mostPopular';
import BestDeals from './components/bestDeals';
<<<<<<< HEAD



const HomeScreen = () => {

  const [categoryData, setCategoryData] = useState([]);
  const getCategory = () => {
    const categoryURL = "https://restaurant-uit-server.herokuapp.com/category/popular/";

    return fetch(categoryURL)
      .then((res) => res.json())
      .then(json => setCategoryData(json.categories));
  };

  const [foodData, setFoodData] = useState([]);
  const getFood = () => {
    const categoryURL = "https://restaurant-uit-server.herokuapp.com/food/";
    return fetch(categoryURL)
      .then((res) => res.json())
      .then(json => setFoodData(json.foods));
  };

  useEffect(() => {getCategory(); getFood()}, [])
=======
import {IMG_BestDeals1} from '../../../assets/images';
import HeaderBar from '../../../components/headerBar';
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';


const categoryData = [
  {name: 'ramen', key: 1},
  {name: 'sandwich', key: 2},
  {name: 'breakfast', key: 3},
  {name: 'dinner', key: 4},
  {name: 'lunch', key: 5},
];

const foodData = [
  {name: 'rameny', key: 1, img: IMG_BestDeals1, price: 11},
  {name: 'sandwich', key: 2, img: IMG_BestDeals1, price: 11},
  {name: 'breakfast', key: 3, img: IMG_BestDeals1, price: 11},
  {name: 'dinner', key: 4, img: IMG_BestDeals1, price: 11},
  {name: 'lunch', key: 5, img: IMG_BestDeals1, price: 11},
];

const HomeScreen = (props) => {
>>>>>>> 4475bb8728ac97563ecd32aaf91e3d247b9a9662
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewSecond}>
            <Text style={styles.categoryText} >Popular Categories</Text>
            <CircularCategories style={styles.categoryRow} categoryData={categoryData} {...props}/>
            <Text style={styles.dealText} >Best Deals</Text>
            <BestDeals style={styles.bestDeal} {...props} />
            <Text style={styles.dealText} >Most Popular</Text>
            <MostPopular foodData={foodData} {...props}/>
          </View>
        </ScrollView>
      </View>
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
  viewSecond: {
  },
});
