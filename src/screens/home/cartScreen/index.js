import { StyleSheet, Text, View,TouchableOpacity, Button, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CUSTOM_COLOR } from '../../../constants/color'
import { IC_GoBack } from '../../../assets/icons'
import scale from '../../../utils/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import PriceAttribute from '../ordersScreen/components/priceAttribute'


const data = [
    {key: 1, number: 23, name: 'dfdfgsdjfhsjdfcjshvjfgsjdhgvfsddbjsbjhcjsbhcjac hbdj', price: 1100000},
    {key: 2, number: 12, name: 'hsgjhdcnjdbcbzjcbjdbjhdbjfhbjdhbfjdbfjdbjdbfjs', price: 80000},
    {key: 3, number: 9, name: 'nanbsm', price: 90000},
    {key: 4, number: 3, name: 'augwdkgawkd', price: 2000},
    {key: 5, number: 23, name: 'asbhdma', price: 4000},
    {key: 6, number: 2, name: 'asnbd', price: 800},
    {key: 7, number: 10, name: 'awhehlawhd', price: 9000},
    {key: 8, number: 20, name: 'jwjdb', price: 8000},
    {key: 9, number: 8, name: 'as', price: 19000},
    {key: 10, number: 19, name: 'asdhbma', price: 8000},
    {key: 11, number: 10, name: 'asdmajbdm', price: 14000},
    {key: 12, number: 5, name: 'asmdhhb', price: 80000},
    {key: 13, number: 5, name: 'asn', price: 8000},
    {key: 14, number: 20, name: 'asnd', price: 8000},
    {key: 15, number: 8, name: 'asdh', price: 1900},
    {key: 16, number: 19, name: 'as ', price: 8000},
    {key: 17, number: 10, name: 'asdj', price: 14000},
    {key: 18, number: 5, name: 'awdasdmnas', price: 8000},
    {key: 19, number: 5, name: 'awn', price: 8000},
    {key: 20, number: 23, name: 'dfdfgsdjfhsjdfcjshvjfgsjdhgvfsddbjsbjhcjsbhcjac hbdj', price: 1100000},
    {key: 21, number: 12, name: 'hsgjhdcnjdbcbzjcbjdbjhdbjfhbjdhbfjdbfjdbjdbfjs', price: 80000},
    {key: 22, number: 9, name: 'nanbsm', price: 90000},
    {key: 23, number: 3, name: 'augwdkgawkd', price: 2000},
    {key: 24, number: 23, name: 'asbhdma', price: 4000},
    {key: 25, number: 2, name: 'asnbd', price: 800},
    {key: 26, number: 9, name: 'nanbsm', price: 90000},
    {key: 27, number: 10, name: 'awhehlawhd', price: 9000},
    {key: 28, number: 20, name: 'jwjdb', price: 8000},
    {key: 29, number: 8, name: 'as', price: 19000},
    {key: 30, number: 19, name: 'asdhbma', price: 8000},
    {key: 31, number: 10, name: 'asdmajbdm', price: 14000},
    {key: 32, number: 5, name: 'asmdhhb', price: 80000},
    {key: 33, number: 5, name: 'asn', price: 8000},
    {key: 34, number: 20, name: 'asnd', price: 8000},
    {key: 35, number: 8, name: 'asdh', price: 1900},
    {key: 36, number: 19, name: 'as ', price: 8000},
    {key: 37, number: 10, name: 'asdj', price: 14000},
    {key: 38, number: 5, name: 'awdasdmnas', price: 8000},
    {key: 39, number: 5, name: 'awn', price: 8000},
]




const CartScreen = () => {
const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        onCalculateAmount()
    },[data]);

    const onCalculateAmount = () => {

        let total = 0
        if(Array.isArray(data)){
            data.map(food => {
                total += food.price * food.number
            })
        }
         setTotalAmount(total);
    }

  return (
    <SafeAreaView style={styles.container }>
        <>
        <View style={styles.view}>
            <View style={styles.viewIconText}> 
                <TouchableOpacity style={styles.goBackButton} >
                    <IC_GoBack style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.textBack}>Back</Text>
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>YOUR CART</Text>
            </View>
        </View>
        </>

        <>
        <View style={styles.viewScroll}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map(dataOrder=>(
                    <PriceAttribute 
                    key={dataOrder.key}
                      textNumber={dataOrder.number}
                      textName={dataOrder.name}
                      textPrice={dataOrder.price}/>
                ))}

            </ScrollView>
        </View>
        </>

        <>
        <View style={styles.viewTotal}>
                <Text style={styles.textTotal}>TOTAL</Text>
                <Text style={styles.textPrice}>{totalAmount} VND</Text>
        </View>
        </>
        <>
        <View style={styles.buttonPlace}>
            <TouchableOpacity > 
                <Text style={styles.textPlace}>PLACE ORDER</Text>
            </TouchableOpacity>
        </View>
        </>

    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.White,
    },
    view:{
        flex: 0.08,
        justifyContent: 'space-between',
        width: '70%',
        height: scale(32),
        flexDirection: 'row',
    },
    textTitle:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        letterSpacing: -0.7,
    },
    viewTitle:{
        justifyContent: 'center',
        width: scale(150),
        height: scale(32),
        alignSelf: 'center',
    },
    viewIconText:{
        justifyContent: 'center',
        width: scale(120),
        height: scale(32),
        flexDirection: 'row',
        alignSelf: 'center',
    },
    textBack:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        opacity: 0.6,
    },
    goBackButton: {
        alignSelf: 'center',
        width: scale(40),
        height: scale(32),
        justifyContent: 'center',
    },
    icon:{
        width: '100%',
        height: '100%',
    },
    buttonPlace:{
        flex: 0.06,
        width: Dimensions.get('window').width,
        height: scale(60),
        // bottom: scale(46),
        backgroundColor: CUSTOM_COLOR.Primary,
        justifyContent: 'center',
    },
    viewTotal:{
        flex: 0.06,
        width: Dimensions.get('window').width,
        height: scale(45),
        // bottom: scale(46),
        backgroundColor: CUSTOM_COLOR.White,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textTotal:{
        color: CUSTOM_COLOR.Primary,
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: 18,
        alignSelf: 'center',
        letterSpacing: -0.3,
        left: scale(20) ,

    },
    textPlace:{
        color: CUSTOM_COLOR.White,
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: 11,
        letterSpacing: -0.3,
        alignSelf:'center',
    },
    textPrice:{
        color: CUSTOM_COLOR.Primary,
        fontFamily: FONT_FAMILY.NexaRegular,
        fontSize: 18,
        alignSelf: 'center',
        letterSpacing: -0.3,
        right: scale(40),
    },

    viewScroll:{
        flex: 0.84,
        width: Dimensions.get('window').width-scale(50),
        height:scale(737),
        alignSelf: 'center',

    },
})