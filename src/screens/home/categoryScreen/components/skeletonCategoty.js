import React from 'react';
import {View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { CUSTOM_COLOR } from '../../../../constants/color';
import scale from '../../../../utils/responsive';

const SkeletonCategory = () => {
  return (
    <ScrollView>
        <SkeletonPlaceholder style={styles.container}>
            <View style={{flex: 1, flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{  marginTop: scale(15),alignSelf: 'center', width: scale(375), height: scale(103)}}/>
                <View style={{  marginTop: scale(24),alignSelf: 'center', width: scale(375), height: scale(103)}}/>
                <View style={{  marginTop: scale(25),alignSelf: 'center', width: scale(375), height: scale(103)}}/>
                <View style={{  marginTop: scale(25),alignSelf: 'center', width: scale(375), height: scale(103)}}/>
                <View style={{  marginTop: scale(25),alignSelf: 'center', width: scale(375), height: scale(103)}}/>
                
            </View>
        </SkeletonPlaceholder>
    </ScrollView>
  );
};
export default SkeletonCategory

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