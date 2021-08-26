import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux';
import {GET_USER_SUCCESS, LOGOUT_SUCCESS} from '../redux/actions/types';

export const getUserData = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    if (user != null) {
      try {
        const userObj = JSON.parse(user);
        store.dispatch({type: GET_USER_SUCCESS, payload: {...userObj}});
      } catch (e) {
        throw e;
      }
    }
  } catch (e) {
    throw e;
  }
};

export const getLoggedInID = () => {
  const {user} = store.getState();
  if (
    null != user &&
    null != user.isLoggedIn &&
    user.isLoggedIn &&
    null != user.ID
  ) {
    return user.ID;
  }
  return 0;
};

export const isUserLoggedIn = () => {
  const {user} = store.getState();
  if (null != user && null != user.isLoggedIn && user.isLoggedIn) {
    return true;
  }
  return false;
};

export const logOut = async () => {
  try {
    await AsyncStorage.removeItem('user');
    store.dispatch({type: LOGOUT_SUCCESS});
  } catch (e) {
    // read key error
    // return false;
  }
};
