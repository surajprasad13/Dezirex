import {ToastAndroid} from 'react-native';
import {
  ERROR,
  FACEBOOK_SIGNIN,
  GOOGLE_SIGNIN,
  LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_PHONE,
  USER_VALUE,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import api from '../../api';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {getUserData} from '../../helpers/user';

const userValue = ({prop, value}) => {
  return {
    type: USER_VALUE,
    payload: {prop, value},
  };
};

const loginUser =
  ({number, navigation}) =>
  async (dispatch) => {
    try {
      dispatch({type: LOADING});
      const confirmation = await auth().signInWithPhoneNumber('+91' + number);
      if (confirmation) {
        navigation.navigate('Security');
        dispatch({type: SET_PHONE, payload: confirmation});
      }
    } catch (e) {
      dispatch({type: ERROR});
      ToastAndroid.show(`${e}`, ToastAndroid.CENTER);
    }
  };

const verifyOtp =
  ({confirm, otp, navigation}) =>
  async (dispatch) => {
    try {
      dispatch({type: LOADING});
      const confirmation = await confirm.confirm(otp);
      if (confirmation.user) {
        const {user} = confirmation;

        try {
          const phone = user.phoneNumber.slice(3, 13);
          const response = await api.post('api/auth/register', {
            phone,
          });
          const jsonvalue = JSON.stringify({
            isLoggedIn: true,
            token: response.data.token,
            userid: response.data.user._id,
            isNewUser: response.data.message,
            emailId: response.data.gmail,
          });
          await AsyncStorage.setItem('user', jsonvalue);
          getUserData();

          if (response.status == 201) {
            dispatch({type: LOGIN_SUCCESS, payload: 'Login Successful'});
            navigation.replace('Gmail');
          } else {
            dispatch({type: LOGIN_SUCCESS, payload: 'Login Successful'});
            navigation.replace('Main');
          }

          ToastAndroid.show('Login Successful', ToastAndroid.CENTER);
        } catch {
          return false;
        }
      }
    } catch (e) {
      dispatch({type: ERROR});
      ToastAndroid.show(`${e}`, ToastAndroid.CENTER);
    }
  };

const googleSignin =
  ({navigation}) =>
  async (dispatch) => {
    try {
      dispatch({type: LOADING});
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch({type: GOOGLE_SIGNIN, payload: userInfo});
      if (userInfo.user.email) {
        const google = await api.post('api/auth/googlelogin', {
          gmail: userInfo.user.email,
        });

        if (google.data.message) {
          dispatch({type: GOOGLE_SIGNIN, payload: userInfo});
          navigation.navigate('Main');
        } else {
          dispatch({type: GOOGLE_SIGNIN, payload: userInfo});
          navigation.navigate('Register');
        }
      }

      ToastAndroid.show('Successful login', ToastAndroid.CENTER);
      // navigation.navigate('Main');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        ToastAndroid.show('Signin canceled', ToastAndroid.CENTER);
        dispatch({type: ERROR});
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        ToastAndroid.show('Progress in already', ToastAndroid.CENTER);
        dispatch({type: ERROR});
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        ToastAndroid.show(
          'Google play services not available',
          ToastAndroid.CENTER,
        );
        dispatch({type: ERROR});
      } else {
        // some other error happened
      }
    }
  };

const facebookSignin = () => async (dispatch) => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    ToastAndroid.show('Signin canceled', ToastAndroid.CENTER);
  }
  // navigation.navigate('Name');
  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();
  // ToastAndroid.show(data, ToastAndroid.CENTER);

  if (!data) {
    ToastAndroid.show(
      'Something went wrong obtaining access token',
      ToastAndroid.CENTER,
    );
    dispatch({type: ERROR});
  }
  dispatch({type: FACEBOOK_SIGNIN, payload: data});
  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return [
    auth().signInWithCredential(facebookCredential),
    //navigation.navigate('Main'),
  ];
};

const logout = () => async (dispatch) => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    dispatch({type: LOGOUT}); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

export {userValue, loginUser, verifyOtp, googleSignin, facebookSignin, logout};
