import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
  SET_AUTH_REDIRECT_PATH,
} from '../actions/types';

const initialState = {
  user: {},
  isLoggedIn: false,
  error: null,
  loading: false,
  authRedirectPath: '/',
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    user: action.user,
    error: null,
    isLoggedIn: action.isLoggedIn,
    loading: false,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const authLogout = (state, action) => {
  return {
    ...state,
    isLoggedIn: false,
    user: null,
  };
};

const setAuthRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.path,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
