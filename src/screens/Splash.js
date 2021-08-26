import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, View, Animated} from 'react-native';
import {theme} from '../constants';

//redux
import {useSelector} from 'react-redux';
import {getUserData} from '../helpers/user';

const Splash = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const {isNewUser, isLoggedIn, token} = user;
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  const image1 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 170],
  });

  const image2 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -350],
  });

  useEffect(() => {
    getUserData();

    setTimeout(() => {
      if (token && isNewUser === false) {
        navigation.replace('Main');
      } else if (isNewUser) {
        navigation.replace('Name');
      } else {
        navigation.replace('Login');
      }
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <ImageComponent source={require('../assets/images/logo.png')} /> */}
      <Animated.Image
        source={require('../assets/images/heart.png')}
        resizeMode="center"
        style={{transform: [{translateY: image1}]}}
        width={150}
      />
      <Animated.Image
        source={require('../assets/images/heart2.png')}
        resizeMode="center"
        style={{
          transform: [{translateY: image2}],
          zIndex: -1000,
        }}
      />
      <Image
        source={require('../assets/images/textlogo.png')}
        resizeMode={'contain'}
        style={{width: 200, height: 100, position: 'absolute'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'italic',
    fontVariant: ['oldstyle-nums', 'small-caps', 'tabular-nums'],
  },
});

export default Splash;
