/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CUSTOM_COLOR} from '../../../constants/color';
import {IC_GoBack, IC_Minus, IC_Plus} from '../../../assets/icons';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import Gallery from './Gallery';
import {BASE_URL} from '../../../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from './../../../redux/store';
import axios from 'axios';

const SingleFoodItemScreen = props => {
  const {data} = props.route.params;
  const [category, setCategory] = useState([]);
  const {token} = store.getState().user;
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/category/${data.categoryId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        },
      );
      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [count1, setCount1] = useState(1);
  const [price, setPrice] = useState(data.price);

  let inCount = () => {
    if (count1 < 100) {
      setCount1(count1 + 1);
      setPrice(data.price + price);
    }
  };
  let decCount = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
      setPrice(price - data.price);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.goBackButton}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <IC_GoBack style={styles.goBack} />
          </TouchableOpacity>
          <View>
            <Text style={styles.screenTittle2}>{category.name}</Text>
          </View>
        </View>
      </View>

      <View style={styles.tittleBox}>
        <Text style={styles.titleText}>{data.name}</Text>
      </View>

      <Gallery images={data.images} />

      <View style={styles.contentBox}>
        <Text style={styles.content}>{data.description}</Text>
      </View>

      <View style={styles.countBox}>
        <TouchableOpacity onPress={decCount}>
          <View style={styles.iconBox}>
            <IC_Minus   />
          </View>
        </TouchableOpacity>
        <Text style={styles.amount}>{count1}</Text>
        <TouchableOpacity onPress={inCount}>
          <View style={styles.iconBox}>
            <IC_Plus />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.addContainer}>
        <View style={styles.priceBox}>
          <Text style={styles.price} adjustsFontSizeToFit>
            {Intl.NumberFormat('vn-VN').format(price)} ₫
          </Text>
        </View>
        <TouchableOpacity style={styles.AddButtonBox}>
          <View>
            <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingleFoodItemScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },

  header: {
    backgroundColor: 'white',
    position: 'relative',
    paddingVertical: 8,
    marginBottom: 0,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tittleBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(22),
    letterSpacing: scale(-0.42),
    color: CUSTOM_COLOR.Black,
  },
  screenTittle2: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  contentBox: {
    width: '100%',
    paddingHorizontal: 20,
  },
  content: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaRegular,
  },

  addContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  countBox: {
    width: scale(108),
    height: scale(45),
    borderRadius: scale(1000),
    borderWidth: scale(1),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaBold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBox: {
    height: scale(44),
    width: scale(90),
    marginHorizontal: 20,
    borderRadius: scale(8),
    borderWidth: scale(1),
    justifyContent: 'center',
  },
  price: {
    color: CUSTOM_COLOR.Black,
    fontSize: Math.max(25),
    fontFamily: FONT_FAMILY.NexaRegular,
  },

  AddButtonBox: {
    backgroundColor: CUSTOM_COLOR.Primary,
    flex: 1,
    marginRight: 20,
    height: scale(44.9),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(18),
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
});
