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
import {BASE_URL} from '../../../utils/api';
import {store} from './../../../redux/store';
import axios from 'axios';

const CategoryScreen = props => {
  const category = props.route.params;
  const [foodData, setFoodData] = useState([]);
  const {token} = store.getState().user;

  const getFoods = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/food/?category=${category._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setFoodData(response.data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.viewGoBackText}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <IC_GoBack style={styles.goBack} />
            <Text style={styles.screenTittle2}>Quay lại</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tittleBox}>
          <Text style={styles.textTitle}>{category.name}</Text>
        </View>
      </View>
      <View style={styles.food}>
        <Foods {...props} foodData={foodData} categoryName={category.name} />
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
  view: {
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
  textTitle: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.NexaRegular,
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    letterSpacing: -0.7,
  },
  tittleBox: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTittle2: {
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
