import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../../../utils/responsive';
import {CUSTOM_COLOR} from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';

const MostPopular = props => {
  return props.foodData.map(item => (
    <OneFood
      key={item._id}
      name={item.name}
      price={item.price}
      img={item.posterImage.url}
      {...props}
      data={item}
    />
  ));
};

export default MostPopular;

const OneFood = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("SingleFoodItemScreen", {data: props.data})}>
      <View style={styles.container}>
        <View style={styles.imgBorder}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: `${props.img}`}}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </View>
        <View style={styles.foodInfo}>
          <Text style={styles.foodName}>{props.name}</Text>
          <Text style={styles.foodPrice}>${props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(335),
    height: scale(178),
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.White,
    marginBottom: scale(18),
  },
  imgBorder: {
    flex: 158,
    justifyContent: 'center',
  },
  foodInfo: {
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodName: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    //marginLeft: scale(15),
    marginTop: scale(2),
    height: scale(22),
  },
  foodPrice: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    right: 0,
    marginTop: scale(2),
  },
});
