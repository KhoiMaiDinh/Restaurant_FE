import React from 'react';
import {View, Image, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { CUSTOM_COLOR } from '../../../../constants/color';
import scale from '../../../../utils/responsive';

const SkeletonMenu = () => {
  return (
    <ScrollView>
        <SkeletonPlaceholder style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{marginTop:80, alignSelf:'center', width: scale(335), height: 180}}/>
                <View style={{marginTop:80, alignSelf:'center', width: scale(335), height: 180}}/>
                
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