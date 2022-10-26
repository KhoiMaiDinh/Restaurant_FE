import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import React ,{useEffect,useState}from 'react';
import scale from '../../../../utils/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import {CUSTOM_COLOR} from '../../../../constants/color';

const {width: screenWidth} = Dimensions.get('window');



const ButtonPrice = props => {
  
  

    const [value, setValue] = useState(props.textNumber);

    useEffect(() => {
  
    },[])
  return ( 
    <View style={[props.style, styles.view1]}>
        <TouchableOpacity style={styles.addSub} 
            onPress={() =>{
            let newValue= value-1;
            setValue(newValue);
            
        }}
        >
            <Text style={styles.iconAddSub}>-</Text>
        </TouchableOpacity>
        <View style={styles.viewValue}>
            <Text style={styles.styleTextNumber} >{value}</Text>
        </View>
        <TouchableOpacity style={styles.addSub}
            onPress={() =>{
            let newValue= value+1;
            setValue(newValue);
        }}
        >
            <Text style={styles.iconAddSub}>+</Text>
        </TouchableOpacity>
        <View style={styles.viewTextName}>
            <Text style={styles.styleTextName} numberOfLines={1}>{props.textName}</Text>
        </View>
        <View style={styles.viewPrice}>
            <Text style={styles.styleTextPrice}>{props.textPrice} VND</Text>
        </View>
    </View>
  );
};

export default ButtonPrice;

const styles = StyleSheet.create({
  view1: {
    width: screenWidth,
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  addSub:{
    width: scale(35),
    height: scale(35),
  },
  iconAddSub:{
    fontSize: 20,
    alignSelf: 'center',
  },
  viewValue: {
    width: scale(35),
    height: scale(35),
    borderWidth: 1,
    borderColor: CUSTOM_COLOR.Black,
    justifyContent: 'center',
    // marginLeft: scale(10),
  },
  styleTextNumber: {
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    color: CUSTOM_COLOR.Primary,
    textAlign: 'center',
    letterSpacing: -0.47,
  },
  viewTextName: {
    width: scale(160),
    height: scale(27),
    justifyContent: 'center',
    marginRight:scale(10),
    overflow: 'hidden',
  },
  styleTextName: {
    color: CUSTOM_COLOR.San_Juan,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 17,
    textAlign: 'left',
    letterSpacing: -0.39,
  },
  viewPrice: {
    width: scale(120),
    height: scale(35),
    justifyContent: 'center',
  },
  styleTextPrice: {
    color: CUSTOM_COLOR.San_Juan,
    fontFamily: FONT_FAMILY.NexaRegular,
    fontSize: 14,
    textAlign: 'right',
    letterSpacing: -0.39,
  },
})
