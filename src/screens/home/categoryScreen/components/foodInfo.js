import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import scale from '../../../../utils/responsive';
import {CUSTOM_COLOR} from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';

const Foods = props => {
  return (
    <ScrollView style={{marginTop: scale(20)}}>
      {props.foodData.map(item => (
        <OneFood
          key={item._id}
          {...props}
          data={item}
          categoryName={props.categoryName}
        />
      ))}
    </ScrollView>
  );
};

export default Foods;

const OneFood = props => {
  const foodURL = `${props.data.posterImage.url}`;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('SingleFoodItemScreen', {
          categoryName: props.categoryName,
          data: props.data,
        });
      }}>
      <View style={styles.container}>
        <View style={styles.categoryBox}>
          <View style={styles.foodInfo}>
            <Text numberOfLines={1} style={styles.foodName}>{props.data.name}</Text>
            <Text numberOfLines={3} style={styles.foodContain}>{props.data.description}</Text>
            <Text numberOfLines={1} style={styles.foodPrice}>
              {Intl.NumberFormat('vn-VN').format(props.data.price)} ₫
            </Text>
          </View>
          <View style={styles.imgBorder}>
            <Image
              style={{width: scale(95), height: scale(103)}}
              source={{uri: foodURL}}
              resizeMode="cover"
              resizeMethod="scale"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: CUSTOM_COLOR.GreySecond,
  },
  categoryBox: {
    width: scale(375),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: scale(24),
  },
  foodInfo: {
    width: scale(280),
  },
  imgBorder: {
    width: scale(95),
  },
  foodName: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.42),
    fontSize: scale(15.5),
    marginLeft: scale(15),
    opacity: 0.8,
    height: scale(23),
  },
  foodContain: {
    paddingVertical: scale(3),
    color: CUSTOM_COLOR.Grey,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(0.2),
    fontSize: scale(13),
    //height: scale(60),
    width: scale(250),
  },
  foodPrice: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.42),
    fontSize: scale(14),
    //top: scale(-5),
    opacity: 0.5,
  },
});
