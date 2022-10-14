import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IC_Cart, IC_Drawer} from '../../../assets/icons';
import {CUSTOM_COLOR} from '../../../constants/color';
import scale from '../../../utils/responsive';
import CircularCategories from './components/circularCategory';
import FONT_FAMILY from '../../../constants/fonts';
import MostPopular from './components/mostPopular';
import BestDeals from './components/bestDeals';
import {IMG_BestDeals1} from '../../../assets/images';
import HeaderBar from '../../../components/headerBar';


const categoryData = [
  {name: 'ramen', key: 1},
  {name: 'sandwich', key: 2},
  {name: 'breakfast', key: 3},
  {name: 'dinner', key: 4},
  {name: 'lunch', key: 5},
];

const foodData = [
  {name: 'ramen', key: 1, img: IMG_BestDeals1, price: 11},
  {name: 'sandwich', key: 2, img: IMG_BestDeals1, price: 11},
  {name: 'breakfast', key: 3, img: IMG_BestDeals1, price: 11},
  {name: 'dinner', key: 4, img: IMG_BestDeals1, price: 11},
  {name: 'lunch', key: 5, img: IMG_BestDeals1, price: 11},
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar pageName={'Home'}/>
      <View style={{flex: 9.2}}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewSecond}>
            <Text style={styles.categoryText} >Popular Categories</Text>
            <CircularCategories style={styles.categoryRow} categoryData={categoryData}/>
            <Text style={styles.dealText} >Best Deals</Text>
            <BestDeals style={styles.bestDeal}/>
            <Text style={styles.dealText} >Most Popular</Text>
            <MostPopular foodData={foodData} />
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
