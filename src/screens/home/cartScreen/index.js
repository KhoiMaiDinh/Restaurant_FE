import { StyleSheet, Text, View,TouchableOpacity, Button, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CUSTOM_COLOR } from '../../../constants/color'
import { IC_GoBack } from '../../../assets/icons'
import scale from '../../../utils/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import PriceAttribute from '../ordersScreen/components/priceAttribute'
import HeaderBar from '../../../components/headerBar'


const data = [
    {key: 1, number: 23, name: 'Salad', price: 11},
    {key: 2, number: 12, name: 'hsgjhds', price: 8},
    {key: 3, number: 9, name: 'nanbsm', price: 9},
    {key: 4, number: 3, name: 'augwdkgawkd', price: 2},
    {key: 5, number: 23, name: 'asbhdma', price: 4},
    {key: 6, number: 2, name: 'asnbd', price: 8},
    {key: 7, number: 10, name: 'awhehlawhd', price: 9},
    {key: 8, number: 20, name: 'jwjdb', price: 8},
    {key: 9, number: 8, name: 'as', price: 19},
    {key: 10, number: 19, name: 'asdhbma', price: 8},
    {key: 11, number: 10, name: 'asdmajbdm', price: 14},
    {key: 12, number: 5, name: 'asmdhhb', price: 8},
    {key: 13, number: 5, name: 'asn', price: 8},
    {key: 14, number: 20, name: 'asnd', price: 8},
    {key: 15, number: 8, name: 'asdh', price: 19},
    {key: 16, number: 19, name: 'as ', price: 8},
    {key: 17, number: 10, name: 'asdj', price: 14},
    {key: 18, number: 5, name: 'awdasdmnas', price: 8},
    {key: 19, number: 5, name: 'awn', price: 8},
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

                
                <Text style={styles.textPrice}>${totalAmount}</Text>
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
    viewIconText:{
        flex: 0.08,
        justifyContent: 'center',
        width: scale(120),
        height: scale(32),
        flexDirection: 'row',
        top: scale(10),
    },
    textBack:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
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