import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {IMG_Binoculars,IMG_Calendar,IMG_Delivery,IMG_PaymentMethod,IMG_RestaurantMenuWhite, IMG_Logo} from '../../../assets/images'
import scale from '../../../utils/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { CUSTOM_COLOR } from '../../../constants/color'
import { SwiperFlatList } from 'react-native-swiper-flatlist'

const {width: screenWidth} = Dimensions.get('window');  

const OnboardingScreen = (props) => {
        const navigation = props;
    const views = [
        {source: IMG_RestaurantMenuWhite, titleText: "Browse Food", subText: "Welcome to our restaurant app! Log in\n and check out our delicious food.", id:0 },
        {source: IMG_Delivery, titleText: "Order Food", subText: "Hungry? Order food in just a few clicks\nand we'll take care of you.", id:1 },
        {source: IMG_Calendar, titleText: "Make Reservations", subText: "Book a table in advance to avoid\nwaiting in line.", id:2 },
        {source: IMG_Binoculars, titleText: "Quick Search", subText: "Quickly find food items you like\nthe most.", id:3 },
        {source: IMG_PaymentMethod, titleText: "Online Pay", subText: "We know you're busy, so you can pay\nwith your phone in just one click.", id:4 },
    ];

  return (
    <SafeAreaView style={styles.container}>
        <SwiperFlatList
            showPagination
            paginationStyle={styles.wrapDot}
            paginationStyleItemActive={styles.dotActive}
            paginationStyleItemInactive={styles.dot}
            data={views}
            renderItem={({ item }) => (
                <View key={item.id} style={{width: screenWidth, height:'100%'}}>
                    <Image source={item.source} style={styles.icon}/>
                    <Text  style={styles.titleText}>{item.titleText}</Text>
                    <Text style={styles.subText}>{item.subText}</Text>
                    <TouchableOpacity style={styles.skip} onPress={() => props.navigation.navigate("Landing_Screen")}>
                        <Text style={4 == item.id ? styles.skipText:styles.skipTextHidden}>Skip</Text>
                    </TouchableOpacity>
                </View>
            )}
        />      


    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Primary,
    },
    titleText: {
        top: 351,
        fontSize: scale(17),
        letter: -0.5,
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.White,
    },
    subText: {
        top: 399,
        fontSize: scale(17),
        letter: -0.47,
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.White,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        top: 574,
        marginTop:3,
        marginHorizontal: 3,
        
    },
    dotActive: {
        margin: 1,
        color: CUSTOM_COLOR.White,
        width: 7,
        height: 7,
    },
    dot: {
        margin: 1,
        opacity: 0.27,
        color: CUSTOM_COLOR.White,
        size: 3,
        width: 7,
        height: 7,
    },
    skip: {
        left: scale(150),
        paddingTop: scale(600),
    },
    skipText: {
        fontSize: scale(17),
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.White,
    },
    skipTextHidden: {
        fontSize: scale(17),
        alignSelf: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY.NexaRegular,
        color: 'transparent',
    },
    icon: {
        position: 'absolute',
        top: 194,
        width: scale(116),
        height: scale(120),
        justifyContent: 'center',
        alignSelf: 'center',
    }
})