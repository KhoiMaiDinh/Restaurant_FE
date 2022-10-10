import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IC_Binoculars, IC_Calendar, IC_Delivery, IC_MacApple, IC_RestaurantMenu } from '../../../assets/icons'
import scale from '../../../utils/responsive'

const {width: screenWidth} = Dimensions.get('screen');  

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
                <View key={'0'} style={{width: 411.42857142857144, height:'100%', borderWidth:1}}>
                    <IC_RestaurantMenu style={styles.icon}/>
                    <Text  style={styles.titleText}>Browse  Food</Text>
                    <Text style={styles.subText}>{"Welcome to our restaurant app! Log in\n and check out our delicious food."}</Text>
                </View>,
                key: 0,
            },
            { 
                view: 
                <View key={'1'} style={{width: 411.42857142857144, height:'100%', borderWidth:1}}>
                    <IC_Delivery style={styles.icon}/>
                    <Text  style={styles.titleText}>Order Food</Text>
                    <Text style={styles.subText}>{"Hungry? Order food in just a few clicks\nand we'll take care of you."}</Text>
                </View>,
                key: 1,
            },
            { 
                view: 
                <View key={'2'} style={{width: 411.42857142857144, height:'100%', borderWidth:1}}>
                    <IC_Calendar style={styles.icon}/>
                    <Text  style={styles.titleText}>Make Reservations</Text>
                    <Text style={styles.subText}>{"Book a table in advance to avoid\nwaiting in line."}</Text>
                </View>,
                key: 2,
            },
            { 
                view: 
                <View key={'3'} style={{width: 411.42857142857144, height:'100%', borderWidth:1}}>
                    <IC_Binoculars style={styles.icon}/>
                    <Text  style={styles.titleText}>Quick Search</Text>
                    <Text style={styles.subText}>{"Quickly find food items you like\nthe most."}</Text>
                </View>,
                key: 3,
            },
            { 
                view: 
                <View key={'4'} style={{width: 411.42857142857144, height:'100%', borderWidth:1}}>
                    <IC_MacApple style={styles.icon}/>
                    <Text  style={styles.titleText}>Apple Pay</Text>
                    <Text style={styles.subText}>{"We know you're busy, so you can pay\nwith your phone in just one click."}</Text>
                    <TouchableOpacity style={styles.skip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>,
                key: 4,
            },
          
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
            contentContainerStyle={{width: 411.42857142857144 * 5, height:812}}
        >
            {viewList.map((e) => e.view)}
        </ScrollView>
        <View style={styles.wrapDot}>
            {viewList.map((e, index) => (
              <Text
                key={e.key}
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
        top: 351,
        fontSize: scale(17),
        letter: -0.5,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    subText: {
        top: 399,
        fontSize: scale(17),
        letter: -0.47,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
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
        fontSize: scale(17),
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    icon: {
        position: 'absolute',
        top: 194,
        width: scale(113),
        height: 96.37,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#ffffff',
    }
})