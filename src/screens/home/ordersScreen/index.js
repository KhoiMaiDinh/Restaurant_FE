import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
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
import PriceAtribute from './components/priceAtribute';
import ButtonReOrder from './components/buttonReOrder';

const {width: screenWidth} = Dimensions.get('window');

const OrdersScreen = propss => {
  const [imagelist, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const data = [
      {
        image: (
          <View style={styles.viewData}>
            <Image
              source={require('../../../assets/images/index').IMG_BestDeals1}
              resizeMode="stretch"
              style={styles.imgData}
            />
            <dataImage></dataImage>
          </View>
        ),
      },
      {
        image: (
          <View style={styles.viewData}>
            <Image
              source={require('../../../assets/images/index').IMG_BestDeals2}
              resizeMode="stretch"
              style={styles.imgData}
            />
            <dataImage></dataImage>
          </View>
        ),
      },
    ];

    setImageList(data);
  }, []);

  
  const handleScroll = e => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor(
          (nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth,
        );
        setCurrentImage(imageIndex);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <></>

      <ScrollView horizontal="false">
        <View style={styles.scroll}>
          <View>
            {imagelist.map((e, index) => (
              <View key={index.toString()}>{e.image}</View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  scroll: {
    top: scale(93),
    backgroundColor: 'pink',
    width: screenWidth,
    height: scale(1500),
  },
  viewData: {
    position: 'absolute',
    backgroundColor: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    width: scale(347),
    height: scale(87),
  },

  imgData: {
    width: '100%',
    height: scale(87),
    opacity: 0.5,
  },
  dataIMG: {
    width: screenWidth,
    height: scale(80),
  },
});
