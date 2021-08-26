import {
  EDIT_PROFILE_CLOSE_POPUP,
  EDIT_PROFILE_SUBMITTING,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  FETCH_USERS,
} from './types';

import axios from 'axios';
import api from '../../api';

const profileClosePopup = () => {
  return {
    type: EDIT_PROFILE_CLOSE_POPUP,
  };
};

const profileSubmitting = (data) => {
  return {
    type: EDIT_PROFILE_SUBMITTING,
    payload: data,
  };
};

const submitProfileSuccess = (data) => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: data,
    // submitting: false,
  };
};
const submitProfileFailure = (data) => {
  return {
    type: EDIT_PROFILE_FAILURE,
    payload: data,
    // submitting: false,
  };
};

const fetchUsers = () => async (dispatch) => {
  try {
    const response = await api.get('api/users/me/findlocation');
    dispatch({type: FETCH_USERS, payload: response.data});
  } catch (error) {
    throw error;
  }
};

const userLike = (profileid, likeid) => async (dispatch) => {
  console.log('Like', profileid);
  try {
    const response = await api.post('api/userlike', {
      profileid,
      likeid,
    });
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};

const userDislike = (profileid, likeid) => async (dispatch) => {
  console.log('Dislike', profileid);
  try {
    const response = await api.post('api/userlike/dislike', {
      profileid,
      likeid,
    });
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};

const userFollow = (profileid, likeid) => async (dispatch) => {
  try {
    const response = await api.post('api/userFollow', {
      profileid,
      likeid,
    });
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};

const userBlock = () => async (dispatch) => {
  try {
    const response = await api.post('api/userfollow/block');
  } catch (error) {
    throw error;
  }
};

export {fetchUsers, userLike, userDislike, userFollow, userBlock};
