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
import {IMG_BestDeals1} from '../../../../assets/images';
import {CUSTOM_COLOR} from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';

const foodInfo = [
  {key: 1},
  {key: 2},
  {key: 3},
  {key: 4},
  {key: 5},
  {key: 6},
  {key: 7},
];

const Foods = () => {
  return (
    <ScrollView style={{marginTop: scale(45)}}>
      {foodInfo.map(item => (
        <OneFood key={item.key} />
      ))}
    </ScrollView>
  );
};

export default Foods;

const OneFood = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>Food Name</Text>
          <Text style={styles.foodDes}>Food description djsakdjsaidjsakdjsakdsakdska</Text>
          <Text style={styles.foodPrice}>Food Price</Text>
        </View>
        <View style={styles.imgBorder}>
          <Image
            style={{width: scale(95), height: scale(103)}}
            source={IMG_BestDeals1}
            resizeMode="cover"
            resizeMethod="scale"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(375),
    height: scale(103),
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
  foodDes: {
    paddingVertical: scale(7),
    color: CUSTOM_COLOR.Grey,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.42),
    fontSize: scale(13),
    height: scale(60),
  },
  foodPrice: {
    color: CUSTOM_COLOR.Grey,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.42),
    fontSize: scale(14),
  },
});
