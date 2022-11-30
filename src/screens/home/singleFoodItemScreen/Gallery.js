/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  Icon,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useEffect, useState, useRef} from 'react';
import {IMG_1, IMG_2, IMG_3, IMG_4} from '../../../assets/images/index';
import scale from '../../../utils/responsive';
import Swiper from 'react-native-swiper';
import {CUSTOM_COLOR} from '../../../constants/color';
import FONT_FAMILY from '../../../constants/fonts';

const Gallery = props => {
  const swiperRef = useRef(null);

  console.log(props.images);
  return (
    <View style={styles.container}>
      {/* Scroll view */}
      <View style={{width: scale(385), height: scale(215)}}>
        <Swiper
          ref={swiperRef}
          index={0}
          autoplayDelay={1}
          paginationStyle={styles.wrapDot}
          paginationStyleItemActive={styles.dotActive}
          paginationStyleItemInactive={styles.dot}
          pagingEnabled
          showsButtons>
          {props.images.slice(0, 4).map(item => (
            <View key={item._id} style={styles.view}>
              <Image
                style={styles.view}
                source={{uri: `${item.url}`}}
                resizeMode={'cover'}
              />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.imageContainer}>
        {props.images.slice(0, 4).map((item, idx) => (
          <TouchableOpacity
            key={item._id}
            style={[styles.itemContainer]}
            onPress={() => {
              swiperRef.current.scrollTo(idx + 1);
            }}>
            <Image
              style={styles.smallImage}
              source={{uri: `${item.url}`}}
              resizeMode={'cover'}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  Buttons: {
    color: CUSTOM_COLOR.White,
  },
  paginationStyle: {
    position: 'absolute',
    top: scale(300),
    right: scale(140),
  },
  paginationText: {
    color: 'white',
    fontSize: 20,
  },
  view: {
    width: scale(385),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: CUSTOM_COLOR.White,
  },
  image: {
    width: scale(385),
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 20,
    left: scale(100),
    color: CUSTOM_COLOR.White,
    top: scale(-120),
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    top: scale(190),
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
    opacity: 0.5,
    color: CUSTOM_COLOR.White,
  },
  foodName: {
    position: 'absolute',
    top: scale(-250),
    left: scale(20),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(20),
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  imageContainer: {
    width: scale(385),
    flexDirection: 'row',
    marginTop: 10,
    height: scale(80),
    justifyContent: 'flex-start',
  },
  itemContainer: {
    marginRight: 10,
    width: '23%',
    height: '100%',
  },
  smallImage: {
    width: '100%',
    height: '100%',
  },
});
