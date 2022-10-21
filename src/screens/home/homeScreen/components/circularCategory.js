import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import scale from '../../../../utils/responsive';
import {CUSTOM_COLOR} from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
//import { test } from '.';

const CircularCategories = (props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{...props.style}}>
      <View style={styles.viewContainer}>
        {props.categoryData.map(item => (
          <TouchableOpacity
            key={item._id}
            style={{paddingHorizontal: scale(15)}}>
            <CircularCategory name={item.name} image={item.image}/>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CircularCategories;

const CircularCategory = props => {


  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={{uri: `${props.image}`}} resizeMode={'cover'} style={{width: '100%', height: '100%'}}/>
      </View>
      <Text style={styles.foodName}>{props.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scale(91),
    width: scale(73),
    alignItems: 'center',
  },
  circle: {
    width: scale(73),
    height: scale(73),
    borderRadius: 360,
    overflow: 'hidden',
  },
  foodName: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(11),
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.334286),
    lineHeight: scale(15),
  },
  viewContainer: {
    flexDirection: 'row',
    height: scale(91),
  },
});
