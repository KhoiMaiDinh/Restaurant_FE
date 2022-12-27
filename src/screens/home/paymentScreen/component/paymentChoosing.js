import React, { useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { StyleSheet } from 'react-native';
import scale from '../../../../utils/responsive';
import { CUSTOM_COLOR } from '../../../../constants/color';
const PaymentChoosing = () => {
  const [value, setValue] = useState([
    {
      id: '1',
      label: 'Thanh toán khi nhận hàng',
      value: 'option 1',
      color: CUSTOM_COLOR.Black,
    },
  ]);
  function onPressRadioButton(radioArray) {
    setValue(radioArray);
  }
  return (
    <RadioGroup
      radioButtons={value} 
      onPress={onPressRadioButton} 
    />
  );
};

export default PaymentChoosing;



