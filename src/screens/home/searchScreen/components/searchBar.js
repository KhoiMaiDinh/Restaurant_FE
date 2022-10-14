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

const SearchBar = () => {
  const [searchContent, setSearchContent] = useState('');
  return (
    <View style={styles.container}>
      <IC_Search marginLeft={scale(10)} />
      <TextInput
        ref={input => {
          this.textInput = input;
        }}
        onChangeText={text => setSearchContent(text)}
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
        onPress={() => setSearchContent('') & this.textInput.clear()}>
        <IC_Delete marginRight={scale(10)} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: scale(290),
    height: scale(31),
    backgroundColor: CUSTOM_COLOR.GreySecond,
    position: 'absolute',
    borderRadius: 10,
    top: scale(14),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
