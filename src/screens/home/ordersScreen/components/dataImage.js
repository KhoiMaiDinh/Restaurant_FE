import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import PriceAtribute from './priceAtribute';

const DataImage = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [dataImage, setDataImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const {width: screenWidth} = Dimensions.get('window');

  useEffect(() => {
    const dataIMG = [
      {
        data: (
          <View style={styles.dataIMG}>
            <PriceAtribute textNumber="12" textPrice="11" textName="Salad" />
          </View>
        ),
      },

      {
        data: (
          <View>
            <PriceAtribute textNumber="2" textPrice="14" textName="Salad" />
          </View>
        ),
      },
    ];
    setDataImage(dataIMG);
  }, []);

  useEffect(() => {
    onCalculateAmount();
  }, [dataImage]);

  const onCalculateAmount = () => {
    let total = 0;
    if (Array.isArray(dataImage)) {
      dataImage.map(food => {
        total += food.price * food.unit;
      });
    }

    setTotalAmount(total);
  };

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
    <View>
      {dataImage.map((e, index) => (
        <View key={index.toString()}>{e.image}</View>
      ))}
    </View>
  );
};

export default DataImage;

const styles = StyleSheet.create({});
