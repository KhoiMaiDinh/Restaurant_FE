import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';
import React, {useState} from 'react';
import { CUSTOM_COLOR } from '../../../constants/color';
import { IC_GoBack } from '../../../assets/icons';
import scale from '../../../utils/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import {IMG_BigPic, IMG_1, IMG_2, IMG_3, IMG_4} from '../../../assets/images/index';
import Gallery from './Gallery';

  const SingleFoodItemScreen = props => 
  {
    const [count1, setCount1] = useState(1);
    const [price, setprice] = useState(11);
  
    let inccount =()=>
    {
        if(count1<100)
        {
          setCount1(count1 + 1);
          setprice(11 + price);
        }
    
    };
    let deccount = () => 
    {
      if(count1>0)
      {
        setCount1(count1 - 1);
        setprice(price - 11);
      }
      
    };
    let  incprice =()=>
    {
      if(count1<100)
      {
        setprice(price * count1);
      }
      
    };
    let decprice = () => 
    {
      if(count1>0)
      {
        setprice(price / count1);
      }
    };
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.goBackButton}>
          <IC_GoBack style = {styles.goBack}/>
        </TouchableOpacity>
        <View style={styles.tittleBox}>
          <Text style={styles.screenTittle}>Forbidden Salad</Text>
        </View>
        <View style={styles.tittleBox2}>
          <Text style={styles.screenTittle2}>Bữa sáng</Text>
        </View>
        

        <Gallery style={styles.galleryBox}/>

        <View style={styles.contentBox}>
          <Text style={styles.content}>Bơ, Arugula, phô mai rau bina, phô mai, cà rốt, hạt quinoa, củ cải đường</Text>
        </View>
        
        <View style={styles.countBox}>
        <TouchableOpacity
              onPress={deccount}>
              <View style={styles.minusBox}>
            <Text style={styles.minus}>-</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.amount}>{count1}</Text>
        <TouchableOpacity
              onPress={inccount}>
          <View style={styles.plusBox}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.price}>${price}</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.AddButtonBox}>
            <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      );
  };
  
  export default SingleFoodItemScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.White,
      flex: 1,
    },
    goBackButton: {
      position: 'absolute',
      left: scale(9),
      top: scale(18),
    },
    tittleBox: {
      position: 'absolute',
      left: scale(145),
      top: scale(20),
    },
    tittleBox2: {
      position: 'absolute',
      top: scale(23),
      left: scale(42),
    },
    screenTittle: {
      fontFamily: FONT_FAMILY.NexaBold,
      fontSize: scale(17),
      letterSpacing: scale(-0.42),
      color: CUSTOM_COLOR.Black,
    },
    screenTittle2: {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(15),
      fontFamily: FONT_FAMILY.NexaRegular,
    },
    
    galleryBox: {
      position: 'absolute',
      top: scale(135), 
      left: scale(15.5),
      width: scale(324),
      height: scale(215),
    },
    contentBox:
    {
      width: scale(385),
      height: scale(36),
      top: scale(130),
      left: scale(15),
    },
    content:
    {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(15),
      fontFamily: FONT_FAMILY.NexaRegular,
      lineHeight: scale(18),
      letterSpacing: scale(-0.39),
      opacity: 0.8,
    },
    countBox: 
    {
      position: 'absolute',
      top: scale(420),
      width: scale(108),
      height: scale(45),
      borderRadius: scale(22.5),
      borderWidth: scale(1),
      alignSelf: 'center',
      alignSelf: 'center',
    },
    minusBox:
    {
      position: 'absolute',
      height: scale(45),
      width: scale(11),
      left: scale(13),
      top: scale(-2),
    },
    minus:
    {
      color: CUSTOM_COLOR.Gray,
      fontSize: scale(35),
      fontFamily: FONT_FAMILY.NexaRegular,
      lineHeight: scale(44.6),
      letterSpacing: scale(-0.97),
      opacity: scale(0.4859),
    },
    plusBox:
    {
      position: 'absolute',
      height: scale(31),
      width: scale(14),
      left: scale(83),
      top: scale(-15),
    },
    plus:
    {
      color: CUSTOM_COLOR.San_Juan,
      fontSize: scale(24),
      fontFamily: FONT_FAMILY.NexaRegular,
      lineHeight: scale(30.59),
      letterSpacing: scale(-0.67),
      opacity: scale(0.4859),
     
    },
    amount:
    {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(17),
      fontFamily: FONT_FAMILY.NexaRegular,
      lineHeight: scale(22),
      letterSpacing: scale(-0.47),
      left: scale(50.5),
      top: scale(11),
    },
    priceBox:
    {
      position: 'absolute',
      top: scale(500),
      left: scale(28),
      height: scale(44),
      width: scale(90),
      borderRadius: scale(8),
      borderWidth: scale(1),
      justifyContent: 'center',
      alignItems: 'center',
    },
    price:
    {
      color: CUSTOM_COLOR.Black,
      fontSize: scale(25),
      fontFamily: FONT_FAMILY.NexaLight,
      lineHeight: scale(34.41),
      letterSpacing: scale(-0.75),
    },

    AddButtonBox: {
      position: 'absolute', 
      backgroundColor: CUSTOM_COLOR.Primary,
      width: scale(252),
      right: scale(28),
      borderRadius: scale(8),
      justifyContent: 'center',
      alignItems: 'center',
      top: scale(249),
      height: scale(43.9),
    },
    buttonText: {
      fontSize: scale(18),
      color: CUSTOM_COLOR.White,
      fontFamily: FONT_FAMILY.NexaRegular,
    },
  });
    