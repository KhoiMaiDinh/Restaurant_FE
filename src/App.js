import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './routes/RootNavigator';

const Root = (props) => {
  return (
    <RootNavigator initialProps={props} />
  )
};

export default Root;


