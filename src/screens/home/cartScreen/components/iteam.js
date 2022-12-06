import {StyleSheet, Text, View, Dimensions,Image,TouchableOpacity} from 'react-native';
import React,{useEffect,useState} from 'react';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import {CUSTOM_COLOR} from '../../../../constants/color';
import { IC_CartDelete, IC_Delete } from '../../../../assets/icons';

const {width: screenWidth} = Dimensions.get('window');



const Iteam = props => {
  const [count1, setCount1] = useState(props.textNumber);
  let inCount = () => {
  
      setCount1(count1 + 1)
    };
  let decCount = () => {
        setCount1(count1 - 1)
    };
  return (
    <View style={[props.style, styles.view1]}>
      
    <View style={[props.style, styles.view2]}>
      
    
      <View style={styles.viewImage}>
        <Image style={styles.image} source={props.img}></Image>
      </View>

      <>
      <View style={styles.viewInfo}>
        <View style={styles.viewTextName}>
          <Text style={styles.styleTextName} numberOfLines={1}>{props.textName}</Text>
        </View>
        <View style={{marginTop: scale(10)}}></View>

        <View style={styles.viewValue}>
          <TouchableOpacity style={styles.AddSub}
            onPress={decCount}>
            <Text style={styles.texttouch}>-</Text>
          </TouchableOpacity>
          <Text style={styles.styleTextNumber} >{count1}</Text>
          <TouchableOpacity style={styles.AddSub}
            onPress={inCount}>
            <Text style={styles.texttouch}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.viewPrice}>
          <Text style={styles.styleTextPrice}>{props.textPrice} VND</Text>
        </View>
      </View>
      </>

      <>
      <TouchableOpacity> 
        <IC_CartDelete/>
      </TouchableOpacity>
      </>

    </View>
    </View>
  );
};

export default Iteam;

const styles = StyleSheet.create({
  view1: {
    // borderWidth: 1,
    width: screenWidth,
    height: scale(130),
    flexDirection: 'column',
  },
  view2: {
    width: screenWidth,
    height: scale(130),
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewImage:{
    // borderWidth: 1,
    width: scale(120),
    height: scale(120),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    },

  image:{
    // borderWidth: 1,
    width: '75%',
    height: '75%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInfo:{
    // borderWidth: 1,
    width: scale(210),
    height: scale(120),
    marginLeft: scale(20),
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  viewValue: {
    width: scale(50),
    height: scale(30),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Grey,
    justifyContent: 'space-around',
    alignItems: 'center',

    
  },
  AddSub:{
    color: CUSTOM_COLOR.San_Juan,
    fontSize: scale(24),
    fontFamily: FONT_FAMILY.NexaRegular,
    lineHeight: scale(30.59),
    letterSpacing: scale(-0.67),
    opacity: scale(0.4859),


  },
  styleTextNumber: {
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    color: CUSTOM_COLOR.Primary,
    textAlign: 'center',
    letterSpacing: -0.47,
  },
  viewTextName: {
    // borderWidth: 1,
    width: scale(200),
    height: scale(27),
    overflow: 'hidden',
  },
  styleTextName: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    letterSpacing: -0.39,
  },
  viewPrice: {
    width: scale(130),
    height: scale(35),
    justifyContent: 'center',
  },
  styleTextPrice: {
    color: CUSTOM_COLOR.Primary,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    letterSpacing: -0.39,
  },
});
