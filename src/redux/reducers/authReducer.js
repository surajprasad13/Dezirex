import {
  ERROR,
  GOOGLE_SIGNIN,
  LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SET_PHONE,
  USER_VALUE,
} from '../actions/types';

const initial_state = {
  confirm: null,
  code: '',
  error: '',
  message: '',
  loading: false,
  number: '',
  otp: '',
  user: null,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};
    case ERROR:
      return {...state, error: 'Something went wrong', loading: false};
    case USER_VALUE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        loading: false,
      };
    case GOOGLE_SIGNIN:
      return {...state, user: action.payload, loading: false};
    case SET_PHONE:
      return {...state, confirm: action.payload, loading: false};
    case LOGIN_FAIL:
      return {...state, error: action.payload, loading: false};
    case LOGIN_SUCCESS:
      return {...state, message: action.payload, loading: false};
    case REGISTER_FAIL:
      return {...state, error: action.payload, loading: false};
    case REGISTER_SUCCESS:
      return {...state, message: action.payload, loading: false};
    case LOGOUT:
      return {...state, user: null, loading: false};
    default:
      return state;
  }
};
