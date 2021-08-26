import {
  FETCH_USERACTIVITY,
  FETCH_USERDISLIKES,
  FETCH_USERFOLLOW,
} from './types';

import api from '../../api';

const fetchUserActivity = (token, likeid) => async (dispatch) => {
  try {
    const response = await api.post(
      'api/useractivity',
      {likeid},
      {
        headers: {
          Authorization: token,
        },
      },
    );
    dispatch({type: FETCH_USERACTIVITY, payload: response.data});
  } catch (error) {
    throw error;
  }
};

const fetchUserDislikes = (token, likeid) => async (dispatch) => {
  try {
    const response = await api.post(
      'api/useractivity/dislike',
      {
        likeid,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    console.log(response.status);
    dispatch({type: FETCH_USERDISLIKES, payload: response.data});
  } catch (error) {
    throw error;
  }
};

const fetchUserFollow = (token, likeid) => async () => {
  try {
    const response = await api.get(
      'api/useractivity/follow',
      {
        likeid,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    console.log(response.status);
    dispatch({type: FETCH_USERFOLLOW, payload: response.data});
  } catch (error) {
    throw error;
  }
};

export {fetchUserActivity, fetchUserDislikes, fetchUserFollow};
