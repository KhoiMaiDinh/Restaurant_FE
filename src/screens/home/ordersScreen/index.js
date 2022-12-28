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
import {IC_Cancel, IC_Delivered, IC_Delivering, IC_WaitForConfirm} from '../../../assets/icons/index';
import userApi from '../../../services/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width: screenWidth} = Dimensions.get('window');

// const orderName = [
//   {number: 1, img: IMG_BestDeals1, total: 0, state: 1},
//   {number: 2, img: IMG_BestDeals2, total: 0, state: 2},
//   {number: 3, img: IMG_BestDeals3, total: 0, state: 3},
//   {number: 4, img: IMG_BestDeals4, total: 0, state: 4},
//   {number: 5, img: IMG_BestDeals5, total: 0, state: 1},
//   {number: 6, img: IMG_BestDeals6, total: 0, state: 2},
// ];
// const data = [
//   {num: 1, number: 23, keyChild: 1, name: 'Salad', price: 11, id: 1},
//   {num: 1, number: 12, keyChild: 2, name: 'Salad', price: 8, id: 2},
//   {num: 2, number: 9, keyChild: 1, name: 'Salad', price: 9, id: 3},
//   {num: 2, number: 3, keyChild: 2, name: 'Salad', price: 2, id: 4},
//   {num: 3, number: 23, keyChild: 1, name: 'Salad', price: 4, id: 5},
//   {num: 3, number: 2, keyChild: 2, name: 'Salad', price: 8, id: 6},
//   {num: 4, number: 10, keyChild: 1, name: 'Salad', price: 9, id: 7},
//   {num: 4, number: 20, keyChild: 2, name: 'Salad', price: 8, id: 8},
//   {num: 4, number: 8, keyChild: 3, name: 'Salad', price: 19, id: 9},
//   {num: 5, number: 19, keyChild: 1, name: 'Salad', price: 8, id: 10},
//   {num: 6, number: 10, keyChild: 1, name: 'Salad', price: 14, id: 11},
//   {num: 6, number: 5, keyChild: 1, name: 'Salad', price: 8, id: 12},
//   {num: 6, number: 5, keyChild: 1, name: 'Salad', price: 8, id: 13},
// ];

const OrdersScreen = props => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [chosen, setChosen] = useState("pending");

  const handleGetOrder = async() => {
    try {
      const userInfo = await AsyncStorage.getItem('@user');
      const user = JSON.parse(userInfo);
      const id = user._id;
      const {orders} = await userApi.getOrders(id);
      //const ordersJSON = JSON.stringify(orders);
      setOrders(orders);
      console.log("items ->>", orders[0].items);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {handleGetOrder()}, [])

const filter =()=>{
  const newData=orders.filter((x)=>{return x.status===chosen})
  return newData;
}

  useEffect(() => {
    setFilteredOrders(filter);
  }, [chosen])



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal="false" style={styles.scrollView}>
        <View style={styles.scroll}>
          <View style={styles.viewData}>
            {filteredOrders.map(data => (
              <View key={data._id}>
                <View style={{flexDirection: 'row',width: '100%'}}>
                <Image style={styles.imgData} source={{uri: `${data.items[0].imgUrl}`}} />
                {/* <View style={{flex}}> */}
                <View style={{alignSelf: 'center', marginLeft: scale(15), width:'70%' }}>
                  <Text style={styles.info} numberOfLines={1}>Người đặt: {data.name}</Text>
                  <Text style={styles.info} numberOfLines={1}>Địa chỉ: {data.address}</Text>
                  <Text style={styles.info} numberOfLines={1}>SĐT: {data.phoneNumber}</Text>
                  <Text style={styles.info} numberOfLines={1}>Ghi chú: {data.desc}</Text>
                </View>
                </View>
                {/* </View> */}
                {data.items.map(item =>            
                    <PriceAttribute
                      key={item._id}
                      textNumber={item.qty}
                      textName={item.name}
                      textPrice={item.price}
                    />
                )}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    top: 10,
                    borderBottomWidth: 1,
                    paddingBottom: scale(10),
                    borderBottomColor: CUSTOM_COLOR.Primary,
                  }}>
                  <View style={styles.viewTotal}>
                    <Text style={styles.textTotal}>
                      Total: {Intl.NumberFormat('vn-VN').format(data.totalPrice)} ₫
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
        <TouchableOpacity style={chosen=="pending"?styles.touchTabChosen:styles.touchTab} onPress={() => {setChosen("pending")}}>
          <IC_WaitForConfirm fill={chosen=="pending"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen=="pending"?styles.textTabChosen:styles.textTab}>Chờ xác nhận</Text>
        </TouchableOpacity >
        <TouchableOpacity style={chosen=="accepted"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("accepted")}}>
        <IC_Delivering fill={chosen=="accepted"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen=="accepted"?styles.textTabChosen:styles.textTab}>Đang giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen==""?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("")}}>
        <IC_Delivered stroke={chosen==""?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen==""?styles.textTabChosen:styles.textTab}>Đã giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen=="rejected"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("rejected")}}>
        <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
        <IC_Cancel fill={chosen=="rejected"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
        </View>
          <Text style={chosen=="rejected"?styles.textTabChosen:styles.textTab}>Hủy</Text>
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
    width: '25%',
    height: scale(87),
    opacity: 0.65,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  viewTotal: {
    justifyContent: 'center',
    // marginRight: scale(120),
  },
  textTotal: {
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: 14,
    color: CUSTOM_COLOR.Primary,
  },
  bottomTabs:{
    flexDirection: 'row',
    width: '100%',
    alignContent: 'space-between',
    bottom: 0,
    backgroundColor: CUSTOM_COLOR.GreySecond,
    
  },
  textTab:{
    marginTop: scale(5),
    color: CUSTOM_COLOR.Primary,
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
    borderColor: CUSTOM_COLOR.Primary,
    paddingVertical: scale(5),

  },
  touchTabChosen:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(5),
    backgroundColor: CUSTOM_COLOR.Primary,
  },
  info:{
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 10,
  }
});
