import React from 'react';
import {View, Image, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { CUSTOM_COLOR } from '../constants/color';
import scale from '../utils/responsive';
import FONT_FAMILY from '../constants/fonts';

const Skeleton = () => {
  return (
    <ScrollView>
        <SkeletonPlaceholder style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{marginTop:30, alignSelf:'center', width: scale(347), height: 30}}/>
                {/* <View style={{marginTop:70, marginLeft: scale(22), width: scale(114), height: 22}}/> */}
                <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
                    <View style={{marginTop:35, borderRadius: scale(360), marginLeft: scale(19), width: scale(73), height: 73}}/>
                    <View style={{marginTop:35, borderRadius: scale(360), marginLeft: scale(24), width: scale(73), height: 73}}/>
                    <View style={{marginTop:35, borderRadius: scale(360), marginLeft: scale(29), width: scale(73), height: 73}}/>
                    <View style={{marginTop:35, borderRadius: scale(360), marginLeft: scale(34), width: scale(73), height: 73}}/>
                </View>
                <View style={{marginTop:130, alignSelf:'center', width: scale(375), height: 246}}/>
                <View style={{marginTop:80, alignSelf:'center', width: scale(335), height: 180}}/>
                <View style={{marginTop:80, alignSelf:'center', width: scale(335), height: 180}}/>
            </View>
        </SkeletonPlaceholder>
    </ScrollView>
  );
};
export default Skeleton

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CUSTOM_COLOR.White,
      speed: 500,
    },
    scrollView: {
        flex: 1,
        height: Dimensions.get('window').height * 0.95,
    },
    
})