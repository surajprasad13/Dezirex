import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

const {width} = Dimensions.get('window');

import {NeuView} from 'react-native-neu-element';
import {theme} from '../../constants';

class OtpInputs extends Component {
  state = {otp: []};
  otpTextInput = [];

  componentDidMount() {
    this.otpTextInput[0].focus();
  }

  renderInputs() {
    const inputs = Array(6).fill(0);
    const txt = inputs.map((i, j) => (
      <NeuView
        height={50}
        width={50}
        color={theme.colors.gray}
        borderRadius={10}
        style={{margin: 2}}
        key={j}>
        <TextInput
          placeholder="-"
          style={[styles.inputRadius, {borderRadius: 2}]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(v) => this.focusNext(j, v)}
          onKeyPress={(e) => this.focusPrevious(e.nativeEvent.key, j)}
          ref={(ref) => (this.otpTextInput[j] = ref)}
        />
      </NeuView>
    ));
    return txt;
  }

  focusPrevious(key, index) {
    if (key === 'Backspace' && index !== 0)
      this.otpTextInput[index - 1].focus();
  }

  focusNext(index, value) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1].focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index].blur();
    }
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({otp});
    this.props.getOtp(otp.join(''));
  }

  render() {
    return <View style={styles.gridPad}>{this.renderInputs()}</View>;
  }
}

const styles = StyleSheet.create({
  gridPad: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.2,
  },

  inputRadius: {
    textAlign: 'center',
    borderWidth: 0.4,
  },
});

export default OtpInputs;
