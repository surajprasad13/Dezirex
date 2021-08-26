import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {ImageComponent, Title} from '../components';
import {theme} from '../constants';

import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import OtpInputs from './login/OtpInput';
import {connect} from 'react-redux';
import {userValue, verifyOtp} from '../redux/actions/authAction';

const {width, height} = Dimensions.get('window');

const Security = ({
  navigation,
  otp,
  userValue,
  verifyOtp,
  confirm,
  loading,
}) => {
  const getOtp = (otp) => {
    userValue({prop: 'otp', value: otp});
  };

  const resendPress = () => {
    ToastAndroid.show('Sms sent successfully', ToastAndroid.TOP);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageComponent source={require('../assets/images/security.png')} />
      <Title first="Enter" second="Security" third="Code" />
      <View>
        <View style={styles.otp}>
          <OtpInputs getOtp={getOtp} />
        </View>
        <Button
          title="Submit"
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [theme.colors.primary, theme.colors.secondary],
            start: {x: 0, y: 0},
            end: {x: 1, y: 1},
          }}
          loading={loading}
          buttonStyle={{margin: 15, padding: 15, borderRadius: 15}}
          onPress={() => verifyOtp({confirm, otp, navigation})}
        />
      </View>
      <View style={[styles.center, {flexDirection: 'row'}]}>
        <Text>Not received ?</Text>
        <TouchableOpacity onPress={resendPress}>
          <Text style={{color: theme.colors.secondary, fontWeight: 'bold'}}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    justifyContent: 'space-evenly',
    height: height,
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15,
    borderWidth: 0,
    borderColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  confirm: state.auth.confirm,
  otp: state.auth.otp,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {userValue, verifyOtp})(Security);
