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

// const styles = StyleSheet.create({

//     label: {
//       position: 'absolute',
//       backgroundColor: 'transparent',
//       marginLeft: scale(22),
//       top: scale(8),
//       zIndex: scale(999),
//       paddingHorizontal: scale(8),
//       fontSize: scale(14),
//       color: CUSTOM_COLOR.White,
//     },
   
// });

// const radioButtonsData = [{
//   id: '1', // acts as primary key, should be unique and non-empty string
//   label: 'Option 1',
//   value: 'option1'
// }, {
//   id: '2',
//   label: 'Option 2',
//   value: 'option2'
// }]

// export default function App() {
//   const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  
//   useEffect(() => {
//     radioButtonsData[0].selected = true;
//     setTimeout(() => {
//       console.log(radioButtonsData);
//       setRadioButtons([...radioButtonsData]);
//     }, 1000)
//   }, []);

//   function onPressRadioButton(radioButtonsArray) {
//       setRadioButtons(radioButtonsArray);
//   }

//   return (
//       <RadioGroup 
//           radioButtons={radioButtons} 
//           onPress={onPressRadioButton} 
//       />
//   );

// }

