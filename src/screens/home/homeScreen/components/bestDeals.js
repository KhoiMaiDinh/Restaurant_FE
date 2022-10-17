import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useEffect, useState, useRef} from 'react';
import {
  IMG_BestDeals1,
  IMG_BestDeals2,
  IMG_BestDeals3,
  IMG_BestDeals4,
  IMG_BestDeals5,
  IMG_BestDeals6,
  IMG_BestDeals7,
  IMG_BestDeals8,
} from '../../../../assets/images/index';
import scale from '../../../../utils/responsive';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {CUSTOM_COLOR} from '../../../../constants/color';

const {width: screenWidth} = Dimensions.get('window');

const BestDeals = () => {
  // const [imageList, setImageList] = useState([]);
  // const [currentImage, setCurrentImage] = useState(0);
  // const stepCarousel = useRef();

  const image = [
    {key: 1, source: IMG_BestDeals1, text: 'The Fancy Sandwich'},
    {key: 2, source: IMG_BestDeals2, text: 'Petty Cash Sandwich'},
    {key: 3, source: IMG_BestDeals3, text: 'Red Flag'},
    {key: 4, source: IMG_BestDeals4, text: 'Sandwiches'},
    {key: 5, source: IMG_BestDeals5, text: 'Breakfast'},
    {key: 6, source: IMG_BestDeals6, text: 'Forbidden Salad'},
    {key: 7, source: IMG_BestDeals7, text: 'Ramen'},
    {key: 8, source: IMG_BestDeals8, text: 'The Dirty Deed'},
  ];

  //2.cap nhat len state cua trang screen
  //tu dong

  return (
    <View style={styles.container}>
      {/* Scroll view */}
      <View style={{width: screenWidth, height: scale(247)}}>
        <SwiperFlatList
          autoplay={'false'}
          autoplayDelay={1}
          autoplayLoop={'false'}
          showPagination
          paginationStyle={styles.wrapDot}
          paginationStyleItemActive={styles.dotActive}
          paginationStyleItemInactive={styles.dot}
          pagingEnabled //giu 1 hinh tai man hinh
          data={image}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.view}>
              <Image
                source={item.source}
                resizeMode="stretch"
                style={styles.image}
              />
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default BestDeals;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: scale(247),
    flex: 1,
  },

  view: {
    width: screenWidth,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.Black,
  },
  image: {
    opacity: 0.72,
    width: screenWidth,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: 20,
    alignSelf: 'center',
    color: CUSTOM_COLOR.White,
    opacity: 0.72,
    top: scale(113.5),
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    top: scale(200),
  },
  dotActive: {
    width: scale(10),
    height: scale(10),
    margin: 3,
    color: CUSTOM_COLOR.White,
  },
  dot: {
    width: scale(10),
    height: scale(10),
    margin: 2,
    opacity: 0.27,
    color: CUSTOM_COLOR.White,
  },
});
