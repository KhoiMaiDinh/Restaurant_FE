import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, {useState } from 'react'
import {IMG_Binoculars,IMG_Calendar,IMG_Delivery,IMG_MacApple,IMG_RestaurantMenuWhite} from '../../../assets/images'
import scale from '../../../utils/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { CUSTOM_COLOR } from '../../../constants/color'

const {width: screenWidth} = Dimensions.get('window');  

const OnboardingScreen = (props) => {
        const navigation = props;
        const [dotActive, setDotActive] = useState(0);
        const onchange = nativeEvent => {
            let slide = 0;
            let temp = 0;
            if (nativeEvent ) {
                nativeEvent.contentOffset.x = Math.round(nativeEvent.contentOffset.x);
              slide = ((nativeEvent.contentOffset.x + (screenWidth/2) ) / screenWidth );
              if(slide > temp) {temp = Math.round(slide);if (temp !== dotActive) {
                setDotActive(temp);
              } console.log(temp);}
                else {temp = Math.round(slide); temp=temp-1;if (temp !== dotActive) {
                    setDotActive(temp);
                  } console.log(temp)
                }
            }
        };
    const views = [
        {source: IMG_RestaurantMenuWhite, titleText: "Browse  Food", subText: "Welcome to our restaurant app! Log in\n and check out our delicious food.", id:0 },
        {source: IMG_Delivery, titleText: "Order Food", subText: "Hungry? Order food in just a few clicks\nand we'll take care of you.", id:1 },
        {source: IMG_Calendar, titleText: "Make Reservations", subText: "Book a table in advance to avoid\nwaiting in line.", id:2 },
        {source: IMG_Binoculars, titleText: "Quick Search", subText: "Quickly find food items you like\nthe most.", id:3 },
        {source: IMG_MacApple, titleText: "Apple Pay", subText: "We know you're busy, so you can pay\nwith your phone in just one click.", id:4 },
    ];

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            onScrollEndDrag={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
        >
            {views.map(item => (
                <View key={item.id} style={{width: screenWidth, height:'100%'}}>
                    <Image source={item.source} style={styles.icon}/>
                    <Text  style={styles.titleText}>{item.titleText}</Text>
                    <Text style={styles.subText}>{item.subText}</Text>
                    <TouchableOpacity style={styles.skip} onPress={() => props.navigation.navigate("Landing_Screen")}>
                        <Text style={4 == item.id ? styles.skipText:styles.skipTextHidden}>Skip</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
        <View style={styles.wrapDot}>
            {views.map(item => (
              <Text
                key={item.id}
                style={dotActive == item.id ? styles.dotActive : styles.dot}
                >
                ●
              </Text>
            ))}
        </View>
        


    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5EA33A',
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
    },
    dotActive: {
        margin: 3,
        color: CUSTOM_COLOR.White,
    },
    dot: {
        margin: 3,
        opacity: 0.27,
        color: CUSTOM_COLOR.White,
    },
    skip: {
        left: scale(150),
        top: 650,
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
        width: scale(113),
        height: 96.37,
        justifyContent: 'center',
        alignSelf: 'center',
    }
})