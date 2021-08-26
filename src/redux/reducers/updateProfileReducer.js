import {UPDATE_PROFILE} from '../actions/types';

const initial_state = {
  userdetail: null,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {...state, userdetail: action.payload};
    default:
      return state;
  }
};
