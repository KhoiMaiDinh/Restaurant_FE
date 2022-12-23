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

const SearchBar = ({search, setSearch}) => {
  
  return (
    <View style={styles.container}>
      <IC_Search marginLeft={scale(10)} fill={CUSTOM_COLOR.Black}/>
      <TextInput
        onChangeText={text => setSearch(text)}
        selectionColor={CUSTOM_COLOR.Grey}
        placeholder="Search"
        placeholderTextColor={CUSTOM_COLOR.Grey}
        style={{
          height: 42,
          color: CUSTOM_COLOR.Black,
          top: scale(2),
          width: scale(210),
        }}
      />
      <TouchableOpacity
        onPress={() => setSearch('')}>
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
    alignSelf: 'center',
  },
});
