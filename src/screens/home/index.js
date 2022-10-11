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
import {IC_Drawer} from '../../assets/icons';
import {CUSTOM_COLOR} from '../../constants/color';
import scale from '../../utils/responsive';
import CircularCategories from './components/circularCategory';
import FONT_FAMILY from '../../constants/fonts';

const categoryData = [
  {name: 'ramen', key: 1},
  {name: 'sandwich', key: 2},
  {name: 'breakfast', key: 3},
  {name: 'dinner', key: 4},
  {name: 'lunch', key: 5},
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 0.5}}>
        <TouchableOpacity style={styles.drawerButton}>
          <IC_Drawer />
        </TouchableOpacity>
      </View>
      <View style={{flex: 9.5}}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewSecond}>
            <Text style={styles.categoryText}>Popular Categories</Text>
            <CircularCategories style={styles.categoryRow} categoryData={categoryData}/>
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
  drawerButton: {
    top: scale(14),
    left: scale(14),
  },
  categoryText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaBold,
    top: scale(26),
    left: scale(22),
  },
  categoryRow: {
    top: scale(40),
  },
  scrollView: {
    flex: 1,
  },
  viewSecond: {
    height: Dimensions.get('window').height * 0.95,
  },
});
