import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React , {useState}from 'react'
import FONT_FAMILY from '../../../constants/fonts'
import scale from '../../../utils/responsive'
import { CUSTOM_COLOR } from '../../../constants/color'
import { IC_GoBack } from '../../../assets/icons'

const ReviewScreen = () => {
    const [defaultRating, setDefaultRating] =useState(0)
    const [maxRating,setMaxRating] = useState([1,2,3,4,5])

    const starImgFilled ='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner ='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const CustomRatingBar =() =>{
        return (
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item,key)=>{
                        return (
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=> setDefaultRating(item)}
                            >
                                <Image
                                style={styles.starImgStyle}
                                source={
                                    item <= defaultRating 
                                    ? {uri: starImgFilled}
                                    : {uri: starImgCorner}
                                }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
  
  
    return (
<SafeAreaView style={styles.container}>

    <>
    <View style={styles.view}>
            <View >
                <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => {
                    props.navigation.goBack();
                    }}>
                    <IC_GoBack />
                    <Text style={styles.screenTittle2}>Quay lại</Text>
                </TouchableOpacity>
            </View>
    </View>
    </>

    
    <View style={styles.viewRate}>
    <Text style={styles.textStyle}>Vui lòng đánh giá ứng dụng</Text>
    <CustomRatingBar/>
    <Text style={styles.textStyle2}>
        {defaultRating+ ' / '+ maxRating.length}
    </Text>
    <TouchableOpacity 
        activeOpacity={0.7}   
        style={styles.buttonStyle}
        onPress={() => {}} 
    >
        <Text style={{color: CUSTOM_COLOR.White,fontSize:20 }}>Đánh giá</Text>
    </TouchableOpacity>
    </View>
</SafeAreaView>
  )
}

export default ReviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    viewRate:{
        flex: 0.92,
        padding: 10,
        justifyContent: 'center',
    },
    textStyle:{
        textAlign: 'center',
        fontSize: 23,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Primary,
        marginTop: 20,
    },
    CustomRatingBarStyle:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: scale(30),
    },
    starImgStyle:{
        width: scale(40),
        height: scale(40),
        resizeMode: 'cover'
    },

    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor:CUSTOM_COLOR.Primary,
        borderRadius: 26.5,

    },
    textStyle2: {
        textAlign: 'center',
        fontSize: 23,
        fontFamily: FONT_FAMILY.NexaRegular,
        color: CUSTOM_COLOR.Primary,
        marginTop: 20,
    },
    view:{
        flex: 0.08,
        justifyContent: 'space-between',
        width: '70%',
        height: scale(32),
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackButton: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: scale(32),
        justifyContent: 'center',
    },
    screenTittle2: {
        color: CUSTOM_COLOR.Black,
        fontSize: scale(15),
        fontFamily: FONT_FAMILY.NexaRegular,
        alignSelf: 'center',
    },
})