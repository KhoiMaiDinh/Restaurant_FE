import React from 'react';
import {View, Image, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { CUSTOM_COLOR } from '../../../../constants/color';
import scale from '../../../../utils/responsive';

const SkeletonHome = () => {
  return (
    <ScrollView>
        <SkeletonPlaceholder style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
                    <View style={{marginTop:scale(35), borderRadius: scale(360), marginLeft: scale(19), width: scale(73), height: scale(73)}}/>
                    <View style={{marginTop:scale(35), borderRadius: scale(360), marginLeft: scale(24), width: scale(73), height: scale(73)}}/>
                    <View style={{marginTop:scale(35), borderRadius: scale(360), marginLeft: scale(29), width: scale(73), height: scale(73)}}/>
                    <View style={{marginTop:scale(35), borderRadius: scale(360), marginLeft: scale(34), width: scale(73), height: scale(73)}}/>
                </View>
                <View style={{marginTop:scale(130), alignSelf:'center', width: scale(375), height: scale(246)}}/>
                <View style={{marginTop:scale(70), alignSelf:'center', width: scale(335), height: scale(180)}}/>
                <View style={{marginTop:scale(70), alignSelf:'center', width: scale(335), height: scale(180)}}/>
            </View>
        </SkeletonPlaceholder>
    </ScrollView>
  );
};
export default SkeletonHome

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