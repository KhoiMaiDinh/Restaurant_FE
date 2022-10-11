import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
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
  const [imagelist, setImagelist] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef(null);

  useEffect(() => {
    const data = [
      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals1}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>The Fancy Sandwich</Text>
          </View>
        ),
      },
      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals2}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Petty Cash Sandwich</Text>
          </View>
        ),
      },

      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals3}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Red Flag</Text>
          </View>
        ),
      },

      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals4}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Sandwiches</Text>
          </View>
        ),
      },

      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals5}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Breakfast</Text>
          </View>
        ),
      },

      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals6}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Forbidden Salad</Text>
          </View>
        ),
      },

      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals7}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>Ramen</Text>
          </View>
        ),
      },

      {
        image: (
          <View style={styles.view}>
            <Image
              key={'0'}
              source={require('../../../assets/images/index').IMG_BestDeals8}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.text}>The Dirty Deed</Text>
          </View>
        ),
      },
    ];

    //2.cap nhat len state cua trang screen
    setImagelist(data);
  }, []);
  //tu dong
  useEffect(() => {
    if (imagelist.length > 0) {
      let index = 0;
      setInterval(() => {
        stepCarousel.current.scrollTo({
          x: index * screenWidth,
          y: 0,
          animated: true,
        });
        index += 1;
        if (index === imagelist.length) {
          index = 0;
        }
      }, 2000);
    }
  }, [imagelist]);

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
      {/* Scroll view */}
      <View style={{width: screenWidth, height: scale(247), top: scale(278)}}>
        <ScrollView
          horizontal //scroll ngang
          pagingEnabled //giu 1 hinh tai man hinh
          contentContainerStyle={{
            width: screenWidth * imagelist.length,
            height: 300,
          }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          ref={stepCarousel}>
          {imagelist.map((e, index) => (
            <View key={index.toString()}>{e.image}</View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.wrapDot}>
        {imagelist.map((e, index) => (
          <Text
            key={index.toString()}
            style={currentImage == index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default BestDeals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  view: {
    borderWidth: 1,
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
    top: scale(273 + 200),
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
