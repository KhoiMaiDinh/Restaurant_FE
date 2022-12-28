import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CUSTOM_COLOR} from '../../../constants/color';
import {IC_GoBack} from '../../../assets/icons';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeFromCart,
  adjustQTY,
  resetCartWhenOrder,
} from '../../../redux/actions/cartActions';
import Item from './components/iteam';
import MsgBox from '../../../components/messageBox';

const CartScreen = props => {
  const dispatch = useDispatch();
  const [lock, setLock] = useState(false);
  const [visible, setVisible] = useState(false);

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    onCalculateAmount();
    
    if(totalAmount === 0)
    {
      setLock(true);
      //setVisible(true);
    }
    else 
    {
      setLock(false);
      setVisible(false);
    }
  }, [cartItems,totalAmount]);

  const onCalculateAmount = () => {
    let total = 0;
    if (Array.isArray(cartItems)) {
      cartItems.map(food => {
        total += food.price * food.qty;
      });
    }
    setTotalAmount(total);
  };

  const qtyChangeHandler = (data, qty) => {
    dispatch(adjustQTY(data, qty));
  };

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const resetCartHandler = () => {
    dispatch(resetCartWhenOrder());
  };
  return (
    <SafeAreaView style={styles.container}>
      <MsgBox visible={visible} clickCancel={() => {setVisible(false),props.navigation.navigate('DrawerScreen')}} 
      title={"ĐẶT MÓN THẤT BẠI"} message={"Giỏ hàng của bạn hiện trống, bạn có muốn thêm món vào giỏ hàng?"}  fail={lock}/> 
      <>
        <View style={styles.view}>
          <View style={styles.viewGoBackText}>
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={() => {
                props.navigation.navigate('DrawerScreen');
              }}>
              <IC_GoBack style={styles.goBack} />
              <Text style={styles.screenTittle2}>Quay lại</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>Giỏ hàng</Text>
          </View>
          
          <View style={{width: scale(110), height: 1}}/>
        </View>
      </>

      <>
        <View style={styles.viewScroll}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cartItems.map(item => (
              <Item
                key={item.id}
                textNumber={item.qty}
                textName={item.name}
                textPrice={item.price}
                img={item.imgUrl}
                id={item.id}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))}
          </ScrollView>
        </View>
      </>

      <>
        <View style={styles.viewTotal}>
          <Text style={styles.textTotal}>Tổng số tiền</Text>
          <Text style={styles.textPrice}>
            {Intl.NumberFormat('vn-VN').format(totalAmount)} ₫
          </Text>
        </View>
      </>
      <>
        <View style={styles.buttonPlace}>
          <TouchableOpacity
            //disabled={lock?true:false}
            onPress={() => {lock?setVisible(true):props.navigation.navigate('PaymentScreen')}}>
            <Text style={styles.textPlace}>ĐẶT MÓN</Text>
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(14),
    backgroundColor: CUSTOM_COLOR.White,
    elevation: 3,
    justifyContent: 'space-between'
  },
  textTitle: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaBold,
    fontSize: scale(18),
    letterSpacing: scale(-0.7),
    textAlign: 'center',
  },
  viewTitle: {
    justifyContent: 'center',
    width: scale(150),
    height: scale(32),
    alignSelf: 'center',
  },
  goBackButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: scale(32),
    justifyContent: 'center',
  },
  buttonPlace: {
    width: Dimensions.get('window').width,
    height: scale(50),
    position: 'absolute',
    bottom: 0,
    backgroundColor: CUSTOM_COLOR.Primary,
    justifyContent: 'center',
  },
  viewTotal: {
    width: Dimensions.get('window').width,
    height: scale(45),
    bottom: scale(40),
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
  },
  textTotal: {
    color: CUSTOM_COLOR.Primary,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 18,
    alignSelf: 'center',
    letterSpacing: -0.3,
    left: scale(20),
  },
  textPlace: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 13,
    letterSpacing: -0.3,
    alignSelf: 'center',
  },
  textPrice: {
    color: CUSTOM_COLOR.Primary,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 18,
    alignSelf: 'center',
    letterSpacing: -0.3,
    right: scale(40),
  },
  viewScroll: {
    flex: 0.84,
    width: Dimensions.get('window').width - scale(10),
    height: scale(737),
    alignSelf: 'center',
    marginLeft: scale(20),
  },
  screenTittle2: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.NexaRegular,
    alignSelf: 'center',
  },
});
