import {
    StatusBar,
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    KeyboardAvoidingView, 
    ScrollView, 
    Dimensions
  } from 'react-native';
  import React, {useState,  useEffect} from 'react';
  // import {CUSTOM_COLOR} from '../../../constants/color';
  // import { IMG_2 } from '../../../assets/images';
  // import scale from '../../../utils/responsive';
  // import FONT_FAMILY from '../../../constants/fonts';
  import {Dropdown} from 'react-native-element-dropdown';
  import { BASE_URL_EX } from '../../../../utils/api';
  import axios from 'axios';


  const RestaurantsList = (props) => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [restaurant, setRestaurant] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const restaurant_Data = [
      {name: 'Bình Dương', key: 1},
      {name: 'Tp.Hồ Chí Minh', key: 2},
      {name: 'Hà Nội', key: 3},
      {name: 'Đà Nẵng', key: 4},
      {name: 'Tp.Cần Thơ', key: 5},
    ];
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 15}}>
                    <Dropdown
                    style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={restaurant_Data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select country' : '...'}
                    searchPlaceholder="Search..."
                    value={restaurant}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setRestaurant(item.value);
                        handleState(item.value);
                        setRestaurantName(item.label);
                        setIsFocus(false);
                    }}
                    />
                </View>
            </View>
        );
};
  
  export default RestaurantsList;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#533483',
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center',
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 10,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
  });
  