import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import Foods from './components/foodInfo';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import {IC_GoBack} from '../../../assets/icons';

const CategoryScreen = props => {
  const {name} = props.route.params;
  
  const {foods} = props.route.params;
  const [foodData, setFoodData] = useState([]);
  const getFood = element => {
    const foodURL = `https://restaurant-uit-server.herokuapp.com/food/${element}`;
    return fetch(foodURL)
      .then(res => res.json())
      .then(json => setFoodData(currentData => [...currentData, json.food]))
      .catch(errors => console.log(errors));
  };
  const getFoods = () => {
    foods.forEach(element => {
      getFood(element);
    });
  };

  useEffect(() => {getFoods()}, []);
  console.log(foodData);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <IC_GoBack style={styles.goBack} />
        <Text style={styles.screenTittle2}>Quay lại</Text>
      </TouchableOpacity>
      <View style={styles.tittleBox}>
        <Text style={styles.screenTittle}>{name}</Text>
      </View>
      <Foods {...props} />
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  goBackButton: {
    position: 'absolute',
    left: scale(9),
    top: scale(18),
  },
  tittleBox: {
    position: 'absolute',
    left: scale(156),
    top: scale(20),
    justifyContent: 'center',
  },
  screenTittle: {
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(17),
    letterSpacing: scale(-0.42),
    color: CUSTOM_COLOR.Black,
  },
  screenTittle2: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.NexaRegular,
    top: -23,
    left: scale(30),
  },
});
