import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
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

const {width: screenWidth} = Dimensions.get('window');

const OrdersScreen = props => {
  const [value, setValue] = useState(0);

  const oderName = [
    {number: 1, img: IMG_BestDeals1, total: 0},
    {number: 2, img: IMG_BestDeals2, total: 0},
    {number: 3, img: IMG_BestDeals3, total: 0},
    {number: 4, img: IMG_BestDeals4, total: 0},
    {number: 5, img: IMG_BestDeals5, total: 0},
    {number: 6, img: IMG_BestDeals6, total: 0},
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
    {num: 6, number: 5, keyChild: 1, name: 'Salad', price: 8, id: 11},
    {num: 6, number: 5, keyChild: 1, name: 'Salad', price: 8, id: 11},
  ];

  useEffect(props => {
    onCalculateAmount();
  }, []);

  const onCalculateAmount = () => {
    var s = 0;
    var a = 0;
    {
      oderName.map(dataImage => (a = dataImage.number));
    }
    {
      data.map(item =>
        item.num === a ? (s += item.number * item.price) : null,
      );
    }
    setValue(s);
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <SearchScreen />
      </>

      <ScrollView horizontal="false" style={styles.scrollView}>
        <View style={styles.scroll}>
          <View style={styles.viewData}>
            {oderName.map(dataImage => (
              <View key={dataImage.number}>
                <Image style={styles.imgData} source={dataImage.img} />
                {data.map(
                  item =>
                    // (<View key={item.keyChild} />),
                    item.num === dataImage.number ? (
                      <PriceAttribute
                        textNumber={item.number}
                        textName={item.name}
                        textPrice={item.price}
                      />
                    ) : null,
                  <onCalculateAmount />,
                  (dataImage.total = value),
                )}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    top: 10,
                  }}>
                  {oderName.map(dataImage => (
                    <View style={styles.viewTotal}>
                      <Text style={styles.textTotal}>
                        Total: ${dataImage.total}
                      </Text>
                    </View>
                  ))}
                  <ButtonReOrder />
                </View>
                <View style={{height: scale(50)}} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  scroll: {
    width: screenWidth,
    height: scale(2000),
  },
  scrollView: {
    top: scale(70),
    width: screenWidth,
    // height: scale(2000),
  },
  viewData: {
    position: 'absolute',

    alignSelf: 'center',
    width: scale(347),
    // height: scale(87),
  },

  imgData: {
    width: '100%',
    height: scale(87),
    opacity: 0.6,
    backgroundColor: CUSTOM_COLOR.Black,
  },
  viewTotal: {
    width: scale(112),
    // height: scale(31),
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginRight: scale(120),
  },
  textTotal: {
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    color: CUSTOM_COLOR.Black,
  },
});
