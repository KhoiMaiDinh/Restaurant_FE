import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {CUSTOM_COLOR} from '../../../constants/color';
  import Foods from './components/foodInfo';
  import scale from '../../../utils/responsive';
  import FONT_FAMILY from '../../../constants/fonts';
  import { IC_GoBack } from '../../../assets/icons';

  const CategoryScreen = (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => {props.navigation.goBack()}}>
            <IC_GoBack style = {styles.goBack}/>
            <Text style={styles.screenTittle2}>Quay lại</Text>
        </TouchableOpacity>
        <View style={styles.tittleBox}>
            <Text style={styles.screenTittle}>Sandwiches</Text>
        </View>
        <Foods />
      </SafeAreaView>
    );
  };
  
  export default CategoryScreen;
  
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
        left: scale(156),
        top: scale(20),
        justifyContent: 'center',
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
        top:-23,
        left: scale(30)
      },
      
  });
  