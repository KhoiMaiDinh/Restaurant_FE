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
} from '../../../assets/images';
import scale from '../../../utils/responsive';
import {CUSTOM_COLOR} from '../../../constants/color';

const {width: screenWidth} = Dimensions.get('window');

const BestDeals = () => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef();

  useEffect(() => {
    const data = [
      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals1}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>The Fancy Sandwich</Text>
          </TouchableOpacity>
        ),
      },
      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals2}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Petty Cash Sandwich</Text>
          </TouchableOpacity>
        ),
      },

      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals3}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Red Flag</Text>
          </TouchableOpacity>
        ),
      },

      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals4}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Sandwiches</Text>
          </TouchableOpacity>
        ),
      },

      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals5}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Breakfast</Text>
          </TouchableOpacity>
        ),
      },

      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals6}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Forbidden Salad</Text>
          </TouchableOpacity>
        ),
      },

      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals7}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Ramen</Text>
          </TouchableOpacity>
        ),
      },

      {
        image: (
          <TouchableOpacity style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals8}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>The Dirty Deed</Text>
          </TouchableOpacity>
        ),
      },
    ];

    //2.cap nhat len state cua trang screen
    setImageList(data);
  }, []);
  //tu dong
  useEffect(() => {
    if (imageList.length > 0) {
      let index = 0;
      setInterval(() => {
        stepCarousel.current.scrollTo({
          x: index * screenWidth,
          y: 0,
          animated: true,
        });
        index += 1;
        if (index === imageList.length) {
          index = 0;
        }
      }, 2000);
    }
  }, [imageList]);

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
    <View style={styles.container}>
      {/* Scroll view */}
      <View style={{width: screenWidth, height: scale(247)}}>
        <ScrollView
          horizontal //scroll ngang
          showsHorizontalScrollIndicator={false}
          pagingEnabled //giu 1 hinh tai man hinh
          contentContainerStyle={{
            width: screenWidth * imageList.length,
            height: 300,
          }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ref={stepCarousel}>
          {imageList.map((e, index) => (
            <View key={index.toString()}>{e.image}</View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.wrapDot}>
        {imageList.map((e, index) => (
          <Text
            key={index.toString()}
            style={currentImage == index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
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
    backgroundColor: 'white',
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
    margin: 3,
    color: CUSTOM_COLOR.White,
  },
  dot: {
    margin: 3,
    opacity: 0.27,
    color: CUSTOM_COLOR.White,
  },
});
