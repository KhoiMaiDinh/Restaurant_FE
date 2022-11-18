import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import scale from '../../../utils/responsive';
import { CUSTOM_COLOR } from '../../../constants/color';
import { IC_NoInternet } from '../../../assets/icons';
import ButtonOne from './components/buttonOne';
import FONT_FAMILY from '../../../constants/fonts';

const NoInternetScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.viewAll}>
        <View style={styles.viewIcon}>
          <IC_NoInternet />
        </View>
        <Text style={styles.textContainer}>No internet Connection</Text>
        <Text style={styles.descriptionsContainer}>
          {
            'Your internet connection is currently \nnot available please check or try again.'
          }{' '}
        </Text>
        <ButtonOne
          text="Try again"
          style={{top:'110%'}}
          color={CUSTOM_COLOR.Primary}
          textColor={CUSTOM_COLOR.White}
        />
        </View>
    </SafeAreaView>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Athens_Gray,
  },
  viewAll:{
    top: '32%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewIcon: {
    width: scale(113.13),
    height: scale(107.99),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CUSTOM_COLOR.Athens_Gray,
  },
  textContainer: {
    marginTop: scale(30),
    textAlign: 'center',
    fontSize: scale(28),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Primary,
    fontFamily: FONT_FAMILY.NexaRegular,
  },
  descriptionsContainer: {
    marginTop: scale(10),
    textAlign: 'center',
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: scale(17),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Primary,
    opacity: 0.57,
  },
});
