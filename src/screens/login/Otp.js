import React, {useState} from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';

import {Button} from 'react-native-elements';
import {theme} from '../../constants';

import LinearGradient from 'react-native-linear-gradient';

import OtpInputs from './OtpInput';
import {ImageComponent, Title} from '../../components';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');
  const getOtp = (otp) => {
    setOtp(otp);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ImageComponent source={require('../../assets/images/phone.png')} />
      <Title first="Enter" second="The" third="OTP" />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 15,
            borderWidth: 0,
            borderColor: 'white',
          }}>
          <OtpInputs getOtp={getOtp} />
        </View>
        <Button
          title="Submit"
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#ea698b', '#ea7a7f'],
            start: {x: 0, y: 0},
            end: {x: 1, y: 1},
          }}
          buttonStyle={{margin: 15, padding: 15, borderRadius: 15}}
          onPress={() => navigation.navigate('Name')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.gray,
  },
  text: {
    fontSize: 25,
  },
  imageContainer: {
    borderColor: 'grey',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120 / 2,
    borderWidth: 0.5,
    borderEndColor: 'red',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Otp;
