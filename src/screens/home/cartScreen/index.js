import { StyleSheet, Text, View,TouchableOpacity, Button, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CUSTOM_COLOR } from '../../../constants/color'
import { IC_GoBack } from '../../../assets/icons'
import scale from '../../../utils/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import { IMG_BestDeals1, IMG_BestDeals2, IMG_BestDeals3, IMG_BestDeals4, IMG_BestDeals5,IMG_BestDeals6, IMG_BestDeals7, IMG_BestDeals8 } from '../../../assets/images'
import Iteam from './components/iteam'



const data = [
    {key: 1, number: 23, name: 'nem công chả phượng ', price: 1100000, img: IMG_BestDeals1},
    {key: 2, number: 12, name: 'cá viên', price: 80000, img: IMG_BestDeals2},
    {key: 3, number: 9, name: 'bún đậu', price: 90000,img: IMG_BestDeals3},
    {key: 4, number: 3, name: 'chân gà', price: 2000,img: IMG_BestDeals4},
    {key: 5, number: 23, name: 'chân gà sốt thái', price: 4000,img: IMG_BestDeals5},
    {key: 6, number: 2, name: 'chè bưởi', price: 800,img: IMG_BestDeals6},
    {key: 7, number: 10, name: 'nem công chả phượng ', price: 9000,img: IMG_BestDeals7},
    {key: 8, number: 20, name: 'cá viên', price: 8000,img: IMG_BestDeals8},
    {key: 9, number: 8, name: 'cá viên', price: 19000,img: IMG_BestDeals1},
    {key: 10, number: 19, name: 'chân gà sốt thái', price: 8000,img: IMG_BestDeals2},
    {key: 11, number: 10, name: 'chan ga sot thai', price: 14000,img: IMG_BestDeals3},
    {key: 12, number: 5, name: 'nem công chả phượng ', price: 80000,img: IMG_BestDeals4},
    {key: 13, number: 5, name: 'nem công chả phượng', price: 8000,img: IMG_BestDeals5},
 
]

const CartScreen = (props) => {
const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        onCalculateAmount()
    },[data])

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
                <TouchableOpacity style={styles.goBackButton} onPress={() => {props.navigation.goBack()}}>
                    <IC_GoBack style={styles.icon}/>
                    <Text style={styles.textBack}>Trở lại</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Giỏ hàng của tôi</Text>
            </View>
        </View>
        </>

        <>
        <View style={styles.viewScroll}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map(dataOrder=>(
                    <Iteam 
                        key={dataOrder.key}
                      img={dataOrder.img}
                      textNumber={dataOrder.number}
                      textName={dataOrder.name}
                      textPrice={dataOrder.price}/>
                ))}

            </ScrollView>
        </View>
        </>

        <>
        <View style={styles.viewTotal}>
                <Text style={styles.textTotal}>Tổng Cộng</Text>
                <Text style={styles.textPrice}>{totalAmount} VND</Text>
        </View>
        </>
        <>
        <View style={styles.buttonPlace}>
            <TouchableOpacity > 
                <Text style={styles.textPlace}>ĐẶT MÓN</Text>
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
        top: -13,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        opacity: 0.6,
    },
    goBackButton: {
        alignSelf: 'center',
        width: scale(120),
        height: scale(32),
        justifyContent: 'center',
    },
    icon:{
        width: '100%',
        height: '100%',
        top: 10,
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
        fontSize: scale(18),
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
        width: Dimensions.get('window').width-scale(10),
        height:scale(737),
        alignSelf: 'center',
        marginLeft: scale(20),

    },
})