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
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import scale from '../../../utils/responsive';
import {CUSTOM_COLOR} from '../../../constants/color';
import PriceAttribute from './components/priceAttribute';
import ButtonReOrder from './components/buttonReOrder';
import FONT_FAMILY from '../../../constants/fonts';
import {IC_Cancel, IC_Delivered, IC_Delivering, IC_Preparing, IC_WaitForConfirm} from '../../../assets/icons/index';
import userApi from '../../../services/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

const {width: screenWidth} = Dimensions.get('window');

const OrdersScreen = props => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [chosen, setChosen] = useState("handling");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleGetOrder().then(() => setRefreshing(false));
  }, []);

  const handleGetOrder = async() => {
    try {
      setLoading(true);
      const userInfo = await AsyncStorage.getItem('@user');
      const user = JSON.parse(userInfo);
      const id = user._id;
      const {orders} = await userApi.getOrders(id);
      setOrders(orders); 
      setChosen(chosen);
      filter(orders);
      console.log("items ->>", orders[0].items);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      handleGetOrder();
  });
  return unsubscribe;
}, [props.navigation]);

  const filter =(orders)=>{
    console.log(chosen);
    const newData=orders.filter((x)=>{return x.action===chosen})
    setFilteredOrders(newData);
    return newData;
  }

  useEffect(() => {
    if(orders)
      filter(orders);
  }, [chosen])



  return (
    loading?(
      <SafeAreaView style={[styles.container,{justifyContent:'center'}]}>
          <ActivityIndicator  color={CUSTOM_COLOR.Primary} size={60} />
      </SafeAreaView>
  ):(
    <SafeAreaView style={styles.container}>
      <ScrollView 
        horizontal="false" 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}>
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
                      {...props}  
                      key={item._id}
                      id={item.id}
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
                      Tổng: {Intl.NumberFormat('vn-VN').format(data.totalPrice)} ₫
                    </Text>
                  </View>
                  <ButtonReOrder {...props} action={data.method}/>
                </View>
                <View style={{height: scale(50)}} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={chosen=="handling"?styles.touchTabChosen:styles.touchTab} onPress={() => {setChosen("handling")}}>
          <IC_WaitForConfirm fill={chosen=="handling"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen=="handling"?styles.textTabChosen:styles.textTab}>Chờ xác nhận</Text>
        </TouchableOpacity >
        <TouchableOpacity style={chosen=="preparing"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("preparing")}}>
        <IC_Preparing fill={chosen=="preparing"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen=="preparing"?styles.textTabChosen:styles.textTab}>Đang chuẩn bị</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen=="delivering"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("delivering")}}>
        <IC_Delivering fill={chosen=="delivering"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen=="delivering"?styles.textTabChosen:styles.textTab}>Đang giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen=="paid"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("paid")}}>
        <IC_Delivered stroke={chosen=="paid"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
          <Text style={chosen=="paid"?styles.textTabChosen:styles.textTab}>Đã giao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={chosen=="cancel"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("cancel")}}>
        <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
        <IC_Cancel fill={chosen=="cancel"?CUSTOM_COLOR.White:CUSTOM_COLOR.Primary}/>
        </View>
          <Text style={chosen=="cancel"?styles.textTabChosen:styles.textTab}>Hủy</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
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
