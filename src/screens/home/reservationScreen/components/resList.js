import {
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
  import React, {useState,  useEffect} from 'react';
  // import {CUSTOM_COLOR} from '../../../constants/color';
  // import { IMG_2 } from '../../../assets/images';
  // import scale from '../../../utils/responsive';
  // import FONT_FAMILY from '../../../constants/fonts';
  import {Dropdown} from 'react-native-element-dropdown';
  import scale from '../../../../utils/responsive';
  import { CUSTOM_COLOR } from '../../../../constants/color';
  import FONT_FAMILY from '../../../../constants/fonts';

  const RestaurantsList = (props) => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [restaurant, setRestaurant] = useState(null);
    // const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState([{
      key: 1,
      value: 'Australia'
    }, {
      key: 2,
      value: 'New Zeland'
    }, {
      key: 3,
      value: 'The United State'
    }]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  
    const getSelected = () => {
      fetch('https://api.agify.io/?name=michael').then(res => {
        setSelectedValue(3);
      }).catch((err) => {
        console.log(err);
      })
    }
  
    useEffect(() => {
       getSelected();
    }, []);
        return (
            <View >
                <StatusBar barStyle="light-content" />
                <View style={{backgroundColor: 'transparent', padding: 20, borderRadius: 15}}>
                    <Dropdown
                    style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="value"
                    valueField="key"
                    placeholder={!isFocus ? 'Vui lòng chọn chi nhánh đặt bàn' : '...'}
                    searchPlaceholder="Tìm kiếm..."
                    value={restaurant}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        //setRestaurant(item.value);
                        // handleState(item.value);
                        setSelectedValue(item.key);
                        //setRestaurantName(item.label);
                        setIsFocus(false);
                    }
                  }
                    />
                </View>
            </View>
        );
};
  
  export default RestaurantsList;
  
  const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#533483',
    //     padding: 16,
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //   },
      dropdown: {
        height: scale(43),
        width: scale(323),
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: CUSTOM_COLOR.San_Juan,
        borderRadius: 4,
        paddingHorizontal: scale(5),
        marginBottom: 10,
        position: 'absolute',
      },
      label: {
        position: 'absolute',
        backgroundColor: 'transparent',
        marginLeft: scale(22),
        top: scale(8),
        zIndex: scale(999),
        paddingHorizontal: scale(8),
        fontSize: scale(14),
      },
      placeholderStyle: {
        marginLeft: scale(15),
        color: CUSTOM_COLOR.Gray,
        width: scale(299),
        fontFamily: FONT_FAMILY.NexaRegular,
        lineHeight: scale(20,67),
        fontSize: scale(15),
        opacity: scale(0.8),
      },
      selectedTextStyle: {
        fontSize: scale(15),
        marginLeft: scale(15),
      },
      iconStyle: {
        width: scale(20),
        height: scale(20),
      },
      inputSearchStyle: {
        height: scale(40),
        fontSize: scale(15),
      },
  });
  