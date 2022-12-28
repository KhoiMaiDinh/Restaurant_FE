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
import foodApi from '../../../services/foodApi';

const CategoryScreen = props => {
  const category = props.route.params;
  const [foodData, setFoodData] = useState([]);

  const getFoods = async () => {
    try {
      const {foods} = await foodApi.getAll('', category._id, '');
      setFoodData(foods);
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
        <Foods
          {...props}
          foodData={foodData || []}
          categoryName={category.name}
        />
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
    paddingVertical: scale(15),
    elevation: 3,
  },
  food: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  textTitle: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(18),
    letterSpacing: scale(-0.7),
    textAlign: 'center',
  },
  tittleBox: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTittle2: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.NexaRegular,
    alignSelf: 'center',
  },
  goBackButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: scale(32),
    justifyContent: 'center',
  },
});
