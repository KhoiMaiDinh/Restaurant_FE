import React from 'react';
import {View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { CUSTOM_COLOR } from '../../../../constants/color';
import scale from '../../../../utils/responsive';

const SkeletonMenu = () => {
  return (
    <ScrollView>
        <SkeletonPlaceholder style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row',marginTop:scale(15) }}>
                    <View style={{ marginLeft: scale(20), width: scale(165), height: scale(113)}}/>
                    <View style={{ marginLeft: scale(45), width: scale(165), height: scale(113)}}/>
                </View>
                <View style={{flexDirection: 'row',marginTop:scale(142)  }}>
                    <View style={{ marginLeft: scale(20), width: scale(165), height: scale(113)}}/>
                    <View style={{ marginLeft: scale(45), width: scale(165), height: scale(113)}}/>
                </View>
                <View style={{flexDirection: 'row',marginTop:scale(142)}}>
                    <View style={{ marginLeft: scale(20), width: scale(165), height: scale(113)}}/>
                    <View style={{ marginLeft: scale(45), width: scale(165), height: scale(113)}}/>
                </View>
            </View>
        </SkeletonPlaceholder>
    </ScrollView>
  );
};
export default SkeletonMenu

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