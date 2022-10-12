import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import {IMG_Binoculars,IMG_Calendar,IMG_Delivery,IMG_MacApple,IMG_RestaurantMenu} from '../../../assets/images'
import scale from '../../../utils/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { CUSTOM_COLOR } from '../../../constants/color'

const {width: screenWidth} = Dimensions.get('window');  

const OnboardingScreen = () => {
        const [viewList, setViewList] = useState([]);
        const [currentView, setCurrentView] = useState(0);
        const stepCarousel = useRef();

  const handleScroll = (e) => {
    if (!e) {
        return;
    }
    const {nativeEvent} = e;
    if(nativeEvent && nativeEvent.contentOffset) {
        const currentOffset = nativeEvent.contentOffset.x;
        let viewIndex = 0;
        if(nativeEvent.contentOffset.x > 0) {
            viewIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
        }
        setCurrentView(viewIndex);
    }
  };

    useEffect(() => {
        const views = [
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Image source={IMG_RestaurantMenu} style={styles.icon}/>
                    <Text  style={styles.titleText}>Browse  Food</Text>
                    <Text style={styles.subText}>{"Welcome to our restaurant app! Log in\n and check out our delicious food."}</Text>
                </View>,
                id:0,
            },
            { 
                view: 
                <View  style={{width: screenWidth, height:'100%'}}>
                    <Image source={IMG_Delivery} style={styles.icon}/>
                    <Text  style={styles.titleText}>Order Food</Text>
                    <Text style={styles.subText}>{"Hungry? Order food in just a few clicks\nand we'll take care of you."}</Text>
                </View>,
                id:1,
            },
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Image source={IMG_Calendar} style={styles.icon}/>
                    <Text  style={styles.titleText}>Make Reservations</Text>
                    <Text style={styles.subText}>{"Book a table in advance to avoid\nwaiting in line."}</Text>
                </View>,
                id:2,
            },
            { 
                view: 
                <View  style={{width: screenWidth, height:'100%'}}>
                    <Image source={IMG_Binoculars} style={styles.icon}/>
                    <Text  style={styles.titleText}>Quick Search</Text>
                    <Text style={styles.subText}>{"Quickly find food items you like\nthe most."}</Text>
                </View>,
                id:3,
            },
            { 
                view: 
                <View  style={{width: screenWidth, height:'100%'}}>
                    <Image source={IMG_MacApple} style={styles.icon}/>
                    <Text  style={styles.titleText}>Apple Pay</Text>
                    <Text style={styles.subText}>{"We know you're busy, so you can pay\nwith your phone in just one click."}</Text>
                    <TouchableOpacity style={styles.skip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>,
                id:4,
            },
          
    ]
    setViewList(views);
    }, [])
    
    useEffect(() => {
        if(viewList.length > 0) {
            let index = 0;
            setInterval(() => {
                stepCarousel.current.scrollTo({ x: index * screenWidth, y:0, animated:true});
                index += 1;
                // if(index === viewList.length) {
                //     index = 0;
                //     //ADJUST NAVIGATE HERE-------------------
                // }
            }, 3000);
        }
    }, [viewList])

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16}
            ref={stepCarousel}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{width: screenWidth * viewList.length, height:812}}
        >
            {viewList.map((e, index) => 
                <View key={index.toString()}>
                    {e.view}
                </View>            
            )}
        </ScrollView>
        <View style={styles.wrapDot}>
            {viewList.map((e,index) => (
              <Text
                key={index.toString()}
                style={currentView == index ? styles.dotActive : styles.dot}
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
    icon: {
        position: 'absolute',
        top: 194,
        width: scale(113),
        height: 96.37,
        justifyContent: 'center',
        alignSelf: 'center',
    }
})