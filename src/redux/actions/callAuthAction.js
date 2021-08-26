import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
  SET_AUTH_REDIRECT_PATH,
} from './types';

import {CometChat} from '@cometchat-pro/react-native-chat';

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (user) => {
  return {
    type: AUTH_SUCCESS,
    user: user,
    isLoggedIn: true,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const createNewUser = (uid, authKey) => {
  return (dispatch) => {
    let apiKey = 'API_KEY';
    let name = uid;
    let user = new CometChat.User(uid);
    user.setName(name);
    CometChat.createUser(user, authKey).then(
      (user) => {
        if (user) {
          console.log(user);
          dispatch(auth(uid, authKey));
        } else {
          dispatch(authFail(user));
        }
      },
      (error) => {
        console.log(error);
        dispatch(authFail(error));
      },
    );
  };
};

export const logoutSuccess = () => {
  return {
    type: AUTH_LOGOUT,
    authRedirectPath: '/login',
  };
};

export const logout = () => {
  return (dispatch) => {
    CometChat.logout().then(dispatch(logoutSuccess()));
  };
};

export const auth = (uid, authKey, createUser) => {
  return (dispatch) => {
    console.log('Auth Start');
    dispatch(authStart());

    CometChat.login(uid, authKey)
      .then((user) => {
        if (user) {
          dispatch(authSuccess(user));
          console.log(user);
        } else {
          dispatch(authFail(user));
        }
      })
      .catch((error) => {
        // console.log('CometChatLogin Failed', error);
        console.log(error);
        if (error.code === 'ERR_UID_NOT_FOUND') {
          dispatch(createNewUser(uid, authKey));
        } else {
          dispatch(authFail(error));
        }
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    CometChat.getLoggedinUser()
      .then((user) => {
        if (user) {
          dispatch(authSuccess(user));
        } else {
          dispatch(authFail(user));
        }
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
