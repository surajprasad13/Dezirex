import {
  FETCH_USERACTIVITY,
  FETCH_USERDISLIKES,
  FETCH_USERFOLLOW,
} from '../actions/types';

const initial_state = {
  like: [],
  dislikes: [],
  follow: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_USERACTIVITY:
      return {...state, like: action.payload};
    case FETCH_USERDISLIKES:
      return {...state, dislikes: action.payload};
    case FETCH_USERFOLLOW:
      return {...state, follow: action.payload};
    default:
      return state;
  }
};
