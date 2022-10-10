import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IC_Binoculars } from '../../../assets/icons'
import scale from '../../../utils/responsive'

const {width: screenWidth} = Dimensions.get('window');  

const OnboardingScreen = () => {
     const [viewActive, setViewActive] = useState(0);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != viewActive) {
        setViewActive(slide);
      }
    }
  };
    const [viewList, setViewList] = useState([]);
    useEffect(() => {
        const views = [
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Text  style={styles.titleText}>Browse  Food</Text>
                    <Text style={styles.subText}>{"Welcome to our restaurant app! Log in\n and check out our delicious food."}</Text>
                </View>,
            },
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Text  style={styles.titleText}>Order Food</Text>
                    <Text style={styles.subText}>{"Hungry? Order food in just a few clicks\nand we'll take care of you."}</Text>
                </View>,
            },
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Text  style={styles.titleText}>Make Reservations</Text>
                    <Text style={styles.subText}>{"Book a table in advance to avoid\nwaiting in line."}</Text>
                </View>,
            },
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Text  style={styles.titleText}>Quick Search</Text>
                    <Text style={styles.subText}>{"Quickly find food items you like\nthe most."}</Text>
                </View>,
            },
            { 
                view: 
                <View style={{width: screenWidth, height:'100%'}}>
                    <Text  style={styles.titleText}>Apple Pay</Text>
                    <Text style={styles.subText}>{"We know you're busy, so you can pay\nwith your phone in just one click."}</Text>
                    <TouchableOpacity style={styles.skip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>,
            }
    ]
    setViewList(views);
    }, [])
    
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{width: screenWidth * viewList.length, height:812}}
        >
            {viewList.map((e,index) =>
                <View key={index.toString()}>
                    {e.view}
                </View> 
            )}
        </ScrollView>
        <View style={styles.wrapDot}>
            {viewList.map((e, index) => (
              <Text
                key={e}
                style={viewActive == index ? styles.dotActive : styles.dot}>
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
        fontWeight: '400',
        top: 351,
        fontSize: scale(17),
        letter: -0.5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    subText: {
        fontWeight: '400',
        top: 399,
        fontSize: scale(17),
        letter: -0.47,
        alignSelf: 'center',
        justifyContent: 'center',
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
        color: 'white',
    },
    dot: {
        margin: 3,
        opacity: 0.28,
        color: 'white',
    },
    skip: {
        left: scale(150),
        top: 650,
    },
    skipText: {
        fontWeight: '400',
        fontSize: scale(17),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    IC_Binoculars: {
        position: 'absolute',
        top: 194,
        width: scale(113),
        height: 96.37,
        justifyContent: 'center',
        alignSelf: 'center',
    }
})