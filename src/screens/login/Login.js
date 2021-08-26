import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Animated,
  Image,
} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import {theme} from '../../constants';
import {ImageComponent, Title} from '../../components';
import {NeuButton, NeuView} from 'react-native-neu-element';

//login manager

import {GoogleSignin} from '@react-native-google-signin/google-signin';

//redux
import {googleSignin, facebookSignin} from '../../redux/actions/authAction';
import {connect} from 'react-redux';

GoogleSignin.configure({
  webClientId:
    '812465112186-sfg7no0fabl2l558vq8oefh0p11v86ug.apps.googleusercontent.com',
});

const {width} = Dimensions.get('window');

const Login = ({navigation, googleSignin, facebookSignin, loading}) => {
  const animation = useRef(new Animated.Value(0)).current;

  const [value, setValue] = useState(false);

  useEffect(() => {
    isSignedIn();
  }, []);

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setValue(isSignedIn);
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const move = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <View style={styles.container}>
      <Overlay isVisible={loading}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Overlay>
      {/* <ImageComponent source={require('../../assets/images/logo.png')} /> */}
      <Animated.View style={{justifyContent: 'center', alignItems: 'center'}}>
        <NeuView
          height={180}
          width={180}
          color={theme.colors.gray}
          borderRadius={100}>
          <Animated.Image
            source={require('../../assets/images/logo.png')}
            resizeMode="center"
            width={100}
            style={{transform: [{translateY: move}]}}
          />
        </NeuView>
      </Animated.View>
      <Title first="Welcome" second="To" third="Dzirex" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <NeuButton
          color={theme.colors.gray}
          width={width * 0.8}
          height={50}
          onPress={() => navigation.navigate('Register')}
          borderRadius={10}
          containerStyle={{
            flexDirection: 'row',
          }}
          style={{margin: 10}}>
          <Icon name="phone" type="feather" color="green" />
          <Text style={[styles.title, {fontWeight: 'bold'}]}>
            Login with Phone
          </Text>
        </NeuButton>
        <NeuButton
          color={theme.colors.gray}
          width={width * 0.8}
          height={50}
          onPress={() => googleSignin({navigation})}
          borderRadius={10}
          containerStyle={{
            flexDirection: 'row',
          }}
          style={{margin: 10}}>
          <Icon name="logo-google" type="ionicon" color="#db4437" />
          <Text style={[styles.title, {fontWeight: 'bold', color: '#db4437'}]}>
            Login with Google
          </Text>
        </NeuButton>
        <NeuButton
          color={theme.colors.gray}
          width={width * 0.8}
          height={50}
          onPress={() => facebookSignin({navigation})}
          borderRadius={10}
          containerStyle={{
            flexDirection: 'row',
          }}
          style={{margin: 10}}>
          <Icon name="sc-facebook" type="evilicon" color="#3b5998" />
          <Text style={[styles.title, {fontWeight: 'bold', color: '#3b5998'}]}>
            Login with facebook
          </Text>
        </NeuButton>
      </View>
      <View style={[styles.center, {flexDirection: 'row'}]}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: theme.colors.secondary, fontWeight: 'bold'}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.gray,
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
  text: {
    fontSize: 25,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 0.7,
    borderColor: 'grey',
    justifyContent: 'space-evenly',
  },
  title: {
    color: theme.colors.primary,
    marginLeft: 40,
  },
});

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {googleSignin, facebookSignin})(Login);
