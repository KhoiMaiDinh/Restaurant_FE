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
import { useEffect } from 'react';
import { useRef } from 'react';
import FONT_FAMILY from '../../../../constants/fonts';

const SearchBar = ({search, setSearch}) => {
  const textInputRef = useRef();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <IC_Search marginLeft={scale(10)} fill={CUSTOM_COLOR.Black}/>
        <TextInput
          ref={textInputRef}
          onLayout={()=> textInputRef.current.focus()}
          onChangeText={text => setSearch(text)}
          selectionColor={CUSTOM_COLOR.Grey}
          placeholder="Tìm kiếm"
          placeholderTextColor={CUSTOM_COLOR.Grey}
          style={{
            height: '100%',
            color: CUSTOM_COLOR.Black,
            maxWidth: scale(200),
            minWidth: scale(100),
            fontFamily: FONT_FAMILY.NexaLight,
            fontSize: scale(14),
            letterSpacing: scale(-0.7),
            marginLeft: scale(10),
          }}
          value={search}
        />
      </View>
      
      <TouchableOpacity
        onPress={() => {setSearch('')}}>
        <IC_Delete marginRight={scale(10)} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: scale(270),
    height: scale(31),
    backgroundColor: CUSTOM_COLOR.GreySecond,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
