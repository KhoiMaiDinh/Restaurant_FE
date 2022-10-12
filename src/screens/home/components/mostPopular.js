import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import scale from '../../../utils/responsive';

const MostPopular = () => {
  return (
      <OneFood />
  );
};

export default MostPopular;

const OneFood = () => {
  return (
    <View style={styles.container}>
      <Text>IMG</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(335),
    height: scale(178),
    borderWidth: 1,
  },
});
