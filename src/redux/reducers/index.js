import {combineReducers} from 'redux';
import auth from './authReducer';
import callAuth from './callAuthReducer';
import profile from './profileReducer';
import user from './userReducer';
import discover from './discoverReducer';

export default combineReducers({
  auth,
  callAuth,
  profile,
  user,
  discover,
});
