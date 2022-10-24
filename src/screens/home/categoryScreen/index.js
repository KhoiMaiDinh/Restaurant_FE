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
                <Text style={styles.textTitle}>Sandwiches</Text>
            </View>
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
      top: scale(20),
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
      top: scale(20),
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
      
  });
  