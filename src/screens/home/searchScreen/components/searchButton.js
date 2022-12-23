import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import scale from '../../../../utils/responsive';
  import {CUSTOM_COLOR} from '../../../../constants/color';
  import {IC_Delete, IC_Search} from '../../../../assets/icons';
  import FONT_FAMILY from '../../../../constants/fonts';
  import { useNavigation } from '@react-navigation/native';
  
  const SearchButton = ({navigation}) => {
    //const navigation=useNavigation();
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SearchScreen')}>
        <IC_Search marginLeft={scale(10)} fill={CUSTOM_COLOR.Black}/>
        <Text style={styles.searchText}>Tìm kiếm</Text>
      </TouchableOpacity>
    );
  };
  
  export default SearchButton;
  
  const styles = StyleSheet.create({
    container: {
      width: scale(270),
      height: scale(31),
      backgroundColor: CUSTOM_COLOR.GreySecond,
      borderRadius: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
    },
    searchText: {
        color: CUSTOM_COLOR.Grey,
        fontFamily: FONT_FAMILY.NexaLight,
        fontSize: scale(14),
        letterSpacing: scale(-0.7),
        marginLeft: scale(10),
      },
  });
  