import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import scale from '../../../../utils/responsive';

class ButtonOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigate = location => {
    this.props.navigation.navigate(location);
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.touchableContainer(this.props)]}
        onPress={this.props.onPress}>
        <Text
          style={{
            color: this.props.textColor,
            ...this.props.textStyle
          }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonOne;

const styles = StyleSheet.create({
  touchableContainer: props => ({
    top: 0.85 * Dimensions.get('window').height,
    height: scale(65),
    position: 'absolute',
    width: scale(270),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: props.color,
    ...props.style,
  }),
});
