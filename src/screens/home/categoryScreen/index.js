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
import { IC_GoBack } from '../../../assets/icons';
import { BASE_URL } from '../../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryScreen = props => {
  const {name} = props.route.params;
  
  const {foods} = props.route.params;
  const [foodData, setFoodData] = useState([]);
  const getFood = async (element) => {
    const token = await AsyncStorage.getItem(`@token`);
    const foodURL = `${BASE_URL}/food/${element}`;
    return fetch(foodURL,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    )
      .then(res => res.json())
      .then(json => setFoodData(currentData => [...currentData, json.food]))
  };
  const getFoods = () => {
    foods.forEach(element => {
      getFood(element);
    });
  };

  useEffect(() => {getFoods()}, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
          <View style={styles.viewGoBackText}> 
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={() => {
                props.navigation.goBack();
            }}>
                <IC_GoBack style={styles.goBack}/>
                <Text style={styles.screenTittle2}>Quay lại</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tittleBox}>
              <Text style={styles.textTitle}>{name}</Text>
            </View>
        </View>
      <View style={styles.food}>
        <Foods {...props} foodData={foodData} categoryName={name} />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  view:{
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLOR.White,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  food: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: CUSTOM_COLOR.GreySecond,
  },
  textTitle:{
    fontSize: 18,
    fontFamily: FONT_FAMILY.NexaRegular,
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    letterSpacing: -0.7,
  },
  tittleBox:{
    position: 'absolute',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
  },
  screenTittle2:{
    fontSize: 18,
    fontFamily: FONT_FAMILY.NexaRegular,
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    opacity: 0.6,
 },
  goBackButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: scale(32),
    justifyContent: 'center',
  },
});
