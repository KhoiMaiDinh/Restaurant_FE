import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  IMG_BestDeals1,
  IMG_BestDeals2,
  IMG_BestDeals3,
  IMG_BestDeals4,
  IMG_BestDeals5,
  IMG_BestDeals6,
  IMG_BestDeals7,
  IMG_BestDeals8,
} from '../../../assets/images';
import scale from '../../../utils/responsive';
import {CUSTOM_COLOR} from '../../../constants/color';
import PriceAttribute from './components/priceAttribute';
import ButtonReOrder from './components/buttonReOrder';
import FONT_FAMILY from '../../../constants/fonts';
import SearchScreen from '../searchScreen';
import HeaderBar from '../../../components/headerBar';
import {IC_Cart} from '../../../assets/icons/index';

const {width: screenWidth} = Dimensions.get('window');

const orderName = [
  {number: 1, img: IMG_BestDeals1, total: 0, state: 1},
  {number: 2, img: IMG_BestDeals2, total: 0, state: 2},
  {number: 3, img: IMG_BestDeals3, total: 0, state: 3},
  {number: 4, img: IMG_BestDeals4, total: 0, state: 4},
  {number: 5, img: IMG_BestDeals5, total: 0, state: 1},
  {number: 6, img: IMG_BestDeals6, total: 0, state: 2},
];
const data = [
  {num: 1, number: 23, keyChild: 1, name: 'Salad', price: 11, id: 1},
  {num: 1, number: 12, keyChild: 2, name: 'Salad', price: 8, id: 2},
  {num: 2, number: 9, keyChild: 1, name: 'Salad', price: 9, id: 3},
  {num: 2, number: 3, keyChild: 2, name: 'Salad', price: 2, id: 4},
  {num: 3, number: 23, keyChild: 1, name: 'Salad', price: 4, id: 5},
  {num: 3, number: 2, keyChild: 2, name: 'Salad', price: 8, id: 6},
  {num: 4, number: 10, keyChild: 1, name: 'Salad', price: 9, id: 7},
  {num: 4, number: 20, keyChild: 2, name: 'Salad', price: 8, id: 8},
  {num: 4, number: 8, keyChild: 3, name: 'Salad', price: 19, id: 9},
  {num: 5, number: 19, keyChild: 1, name: 'Salad', price: 8, id: 10},
  {num: 6, number: 10, keyChild: 1, name: 'Salad', price: 14, id: 11},
  {num: 6, number: 5, keyChild: 1, name: 'Salad', price: 8, id: 12},
  {num: 6, number: 5, keyChild: 1, name: 'Salad', price: 8, id: 13},
];

const OrdersScreen = props => {
  const [orders, setOrders] = useState(orderName);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [chosen, setChosen] = useState(1);


const filter =()=>{
  const newData=orderName.filter((x)=>{return x.state===chosen})
  return newData;
}

  useEffect(() => {
    setFilteredOrders(filter);
  }, [chosen])

  useEffect(() => {
    const newOrders = orders.map(order => {
      let total = order.total;
      data.forEach(item => {
        if (item.num === order.number) {
          total += item.number * item.price;
        }
      });
      return {...order, total: total};
    });
    setOrders(newOrders);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal="false" style={styles.scrollView}>
        <View style={styles.scroll}>
          <View style={styles.viewData}>
            {filteredOrders.map(dataImage => (
              <View key={dataImage.number}>
                <Image style={styles.imgData} source={dataImage.img} />
                {data.map(item =>
                  item.num === dataImage.number ? (
                    <PriceAttribute
                      key={item.id}
                      textNumber={item.number}
                      textName={item.name}
                      textPrice={item.price}
                      state={item.state}
                    />
                  ) : null,
                )}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    top: 10,
                  }}>
                  <View style={styles.viewTotal}>
                    <Text style={styles.textTotal}>
                      Total: {dataImage.total} VND
                    </Text>
                  </View>
                  <ButtonReOrder {...props}/>
                </View>
                <View style={{height: scale(50)}} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={chosen==1?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen(1)}}>
          <IC_Cart/>
          <Text style={chosen==1?styles.textTabChosen:styles.textTab}>Chờ xác nhận</Text>
        </TouchableOpacity >
        <TouchableOpacity style={chosen==2?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen(2)}}>
        <IC_Cart/>
          <Text style={chosen==2?styles.textTabChosen:styles.textTab}>Đang giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen==3?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen(3)}}>
        <IC_Cart/>
          <Text style={chosen==3?styles.textTabChosen:styles.textTab}>Đã giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen==4?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen(4)}}>
        <IC_Cart/>
          <Text style={chosen==4?styles.textTabChosen:styles.textTab}>Hủy</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  scroll: {
    width: screenWidth,
  },
  scrollView: {
    width: screenWidth,
    marginTop: 20,
  },
  viewData: {
    alignSelf: 'center',
    width: scale(347),
  },

  imgData: {
    width: '100%',
    height: scale(87),
    opacity: 0.65,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  viewTotal: {
    width: scale(112),
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginRight: scale(120),
  },
  textTotal: {
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    color: CUSTOM_COLOR.Black,
  },
  bottomTabs:{
    flexDirection: 'row',
    width: '100%',
    alignContent: 'space-between',
    bottom: 0,
  },
  textTab:{
    marginTop: scale(5),
    color: CUSTOM_COLOR.Black,
    fontSize: 8,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  textTabChosen:{
    marginTop: scale(5),
    color: CUSTOM_COLOR.White,
    fontSize: 8,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  touchTab:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: scale(15),

  },
  touchTabChosen:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: scale(15),
    backgroundColor: CUSTOM_COLOR.Primary,
  },
});
