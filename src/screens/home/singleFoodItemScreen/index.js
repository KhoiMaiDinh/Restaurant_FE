/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {CUSTOM_COLOR} from '../../../constants/color';
import {IC_GoBack, IC_Minus, IC_Plus, IC_Cart} from '../../../assets/icons';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import Gallery from './Gallery';
import { useSelector } from 'react-redux';
import categoryApi from '../../../services/categoryApi';
import { addToCart } from '../../../redux/actions/cartActions';

const SingleFoodItemScreen = props => {
  const {data} = props.route.params;
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const {category} = await categoryApi.get(data.categoryId);
      setCategory(category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [count1, setCount1] = useState(1);
  const [price, setPrice] = useState(data.price);
  const [watchMore,setWatchMore] = useState(false);

  let inCount = () => {
    if (count1 < 100) {
      setCount1(count1 + 1);
      setPrice(data.price + price);
    }
  };
  let decCount = () => {
    if (count1 > 1) {
      setCount1(count1 - 1);
      setPrice(price - data.price);
    }
  };

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(data._id, count1));
    console.log(data._id, count1);
  };
  const openCart = () => {
    props.navigation.navigate('CartScreen');
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const numberOfProduct = cartItems.length;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
           style={styles.goBackButton}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <IC_GoBack style={styles.goBack} />
            <Text style={styles.screenTittle2}>{category.name}</Text>
          </TouchableOpacity>
          <View>
          </View>
        </View>
          <TouchableOpacity style={styles.cartButton} onPress={() => openCart()}>
            <IC_Cart nOP = {numberOfProduct}/>
          </TouchableOpacity>
      </View>
    <ScrollView style={{paddingTop: scale(30)}}>
      <View style={styles.tittleBox}>
        <Text style={styles.titleText}>{data.name}</Text>
      </View>

      <Gallery images={data.images} />

      <TouchableOpacity 
      style={styles.contentBox}
      activeOpacity={0.7}
      disabled={watchMore?false:true}
      onPress={() => {setWatchMore(!watchMore)}}
      >
        {watchMore?
        (<Text style={styles.content}>{data.description}</Text>):
        (<Text style={styles.content} numberOfLines={3}>{data.description}</Text>)}
      </TouchableOpacity>
      {watchMore?(null):
      ( <TouchableOpacity
        hitSlop={{top: scale(10), bottom: scale(10), left: scale(10), right: scale(10)}}
        style={styles.btWatchMore} 
        onPress={() => {setWatchMore(!watchMore)}}
        >
        <Text style={styles.watchMore}>Xem thêm</Text>
      </TouchableOpacity>
)}
      
      <View style={styles.countBox}>
        <TouchableOpacity onPress={decCount}>
          <View style={styles.iconBox}>
            <IC_Minus/>
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
        <TouchableOpacity
        onPress={addToCartHandler}>
          <View style={styles.AddButtonBox}>
            <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height:scale(70)}}></View>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(14),
    backgroundColor: CUSTOM_COLOR.White,
    elevation: 3,
    justifyContent: 'space-between',
  },
  goBackButton: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scale(150)
  },
  cartButton: {
    paddingRight: scale(14),
  },
  tittleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(20),
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
    paddingHorizontal: scale(20),
  },
  content: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.NexaRegular,
    textAlign: 'justify',
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
    alignSelf: 'center',
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
    paddingHorizontal: scale(20),
  },
  btWatchMore:{
    // borderWidth: 1,
    marginTop: scale(5),
    alignSelf: 'flex-end',
    marginRight: scale(20),
  },
  watchMore:{
    color: CUSTOM_COLOR.Grey,
    fontFamily: FONT_FAMILY.NexaBold,
    textDecorationLine: 'underline',
  },
});
