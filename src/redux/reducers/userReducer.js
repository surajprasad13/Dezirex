import {
  FETCH_USERS,
  GET_USER_SUCCESS,
  LOGOUT,
  USER_BLOCK,
  USER_DISLIKE,
  USER_FOLLOW,
  USER_LIKE,
} from '../actions/types';

const initial_state = {
  ID: 0,
  isLoggedIn: false,
  isNewUser: false,
  token: null,
  userid: '',
  first_name: '',
  last_name: '',
  display_name: '',
  registered_email: '',
  email: '',
  phone: '',
  avatar: '',
  users: null,
  like: '',
  dislike: '',
  follow: '',
  block: '',
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload, loading: false};
    case USER_LIKE:
      return {...state, like: action.payload};
    case USER_DISLIKE:
      return {...state, dislike: action.payload};
    case USER_FOLLOW:
      return {...state, follow: action.payload};
    case USER_BLOCK:
      return {...state, block: action.payload};
    case GET_USER_SUCCESS:
      return {...state, ...action.payload, loading: false};
    case LOGOUT:
      return {...state, token: null, ...state};
    default:
      return state;
  }
};
