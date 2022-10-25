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

  const CategoryScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
            <View style={styles.viewIconText}> 
                <TouchableOpacity style={styles.goBackButton}>
                    <IC_GoBack style={styles.icon}/>
                    <Text style={styles.textBack}>Quay lại</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Thái Lan</Text>
            </View>
        </View>
        <View style={styles.food}>
          <Foods/>
        </View>
      </SafeAreaView>
    );
  };
  
  export default CategoryScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: CUSTOM_COLOR.White,
      flex: 1,
    },
    view:{
      position: 'relative',
      flexDirection: 'row',
      backgroundColor: CUSTOM_COLOR.White,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 10,
    },
    food: {
      flexDirection: 'row',
      display: 'flex',
      width: '100%',
      flex: 1,
      backgroundColor: CUSTOM_COLOR.GreySecond,
    },
    textTitle:{
      fontSize: 18,
      fontFamily: FONT_FAMILY.NexaRegular,
      color: CUSTOM_COLOR.Black,
      alignSelf: 'center',
      letterSpacing: -0.7,
    },
    viewTitle:{
      position: 'absolute',
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems:'center',
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
      flexDirection: 'row',
      height: scale(32),
      justifyContent: 'center',
    },
  });
  