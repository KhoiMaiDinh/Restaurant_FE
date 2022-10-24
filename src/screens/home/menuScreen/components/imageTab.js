import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import scale from '../../../../utils/responsive';
import { CUSTOM_COLOR } from '../../../../constants/color';
import { IMG_BestDeals1 } from '../../../../assets/images';
import FONT_FAMILY from '../../../../constants/fonts';

const ImageTab = (props) => {
  return (
    <SafeAreaView style={styles.container} >
        <TouchableOpacity style={{backgroundColor: CUSTOM_COLOR.Black,}} onPress={() => {props.navigation.navigate("CategoryScreen", props.categoryData)}}>
            <Image source={props.source}
                resizeMode="stretch"
                style={styles.image}></Image>
                <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ImageTab;

const styles = StyleSheet.create({
    container:{
        width: scale(167.5),
        height: 114,
        backgroundColor: CUSTOM_COLOR.White,
        
    },
    image:{
        width: '100%',
        height: '100%',
        opacity: 0.72,
    },
        text: {
        position: 'absolute',
        fontSize: 14,
        alignSelf: 'center',
        color: CUSTOM_COLOR.White,
        opacity: 0.72,
        top: 50,
        fontFamily: FONT_FAMILY.NexaRegular,
    },
})