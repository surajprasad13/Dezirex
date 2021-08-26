import {
  FETCH_HOBBIES,
  FETCH_INTEREST,
  FETCH_LIFESTYLE,
  FETCH_RELIGION,
  FETCH_SEX,
  LOGOUT,
  PHOTOS,
  POST_AVATAR,
  POST_BIRTHDAY,
  POST_EDUCATION,
  POST_GENDER,
  POST_HEIGHT,
  POST_HOBBIES,
  POST_INTEREST,
  POST_LIFESTYLE,
  POST_LOCATION,
  POST_NAME,
  POST_PHOTOS,
  POST_RELIGION,
  PROFILE_LOADING,
  PROFILE_VALUE,
  USER_DETAIL,
} from '../actions/types';

const initial_state = {
  loading: false,
  message: '',
  error: '',
  name: '',
  lastname: '',
  photos: [],
  sex: [],
  interest: [],
  religion: [],
  hobbies: [],
  lifestyle: [],
  userdetail: null,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {...state, loading: true};
    case PROFILE_VALUE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        loading: false,
      };
    case POST_NAME:
      return {...state, message: action.payload, loading: false};
    case POST_BIRTHDAY:
      return {...state, message: action.payload, loading: false};
    case POST_GENDER:
      return {...state, message: action.payload, loading: false};
    case POST_HEIGHT:
      return {...state, message: action.payload, loading: false};
    case POST_INTEREST:
      return {...state, message: action.payload, loading: false};
    case POST_EDUCATION:
      return {...state, message: action.payload, loading: false};
    case POST_RELIGION:
      return {...state, message: action.payload, loading: false};
    case POST_HOBBIES:
      return {...state, message: action.payload, loading: false};
    case POST_LIFESTYLE:
      return {...state, message: action.payload, loading: false};
    case POST_LOCATION:
      return {...state, message: action.payload, loading: false};
    case PHOTOS:
      return {
        ...state,
        photos: [...state.photos, action.payload],
        loading: false,
      };
    case POST_PHOTOS:
      return {...state, message: action.payload, loading: false};
    case POST_AVATAR:
      return {...state, message: action.payload, loading: false};
    case FETCH_SEX:
      return {...state, sex: action.payload, loading: false};
    case FETCH_INTEREST:
      return {...state, interest: action.payload, loading: false};
    case FETCH_RELIGION:
      return {...state, religion: action.payload, loading: false};
    case FETCH_HOBBIES:
      return {...state, hobbies: action.payload, loading: false};
    case FETCH_LIFESTYLE:
      return {...state, lifestyle: action.payload, loading: false};
    case USER_DETAIL:
      return {...state, userdetail: action.payload, loading: false};
    case LOGOUT:
      return {...state};
    default:
      return state;
  }
};
