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

const Foods = ({searchData}) => {
  return (
    <ScrollView style={{marginTop: scale(45)}}>
      {searchData.map(item => (
        <OneFood
          key={item._id}
          name={item.name}
          description={item.description}
          price={item.price}
          img = {{uri: `${item.posterImage}`}}
        />
      ))}
    </ScrollView>
  );
};

export default Foods;

const OneFood = props => {
  console.log(props.name);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.foodInfo}>
          <Text numberOfLines={1} style={styles.foodName}>{props.name}</Text>
          <Text numberOfLines={3} style={styles.foodDes}>{props.description}</Text>
          <Text numberOfLines={1} style={styles.foodPrice}>{props.price}</Text>
        </View>
        <View style={styles.imgBorder}>
          <Image
            style={{width: scale(95), height: scale(103)}}
            source={props.img}
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
    paddingVertical: scale(3),
    color: CUSTOM_COLOR.Grey,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.42),
    fontSize: scale(13),
    //height: scale(60),
  },
  foodPrice: {
    color: CUSTOM_COLOR.Grey,
    fontFamily: FONT_FAMILY.NexaRegular,
    letterSpacing: scale(-0.42),
    fontSize: scale(14),
  },
});
