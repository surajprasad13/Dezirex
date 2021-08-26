import {
  PROFILE_LOADING,
  POST_BIRTHDAY,
  POST_EDUCATION,
  POST_LOCATION,
  USER_DETAIL,
  POST_GENDER,
  POST_RELIGION,
  POST_INTEREST,
  POST_AVATAR,
} from './types';

import api from '../../api';
import axios from 'axios';

const postPhone = (phone, token) => async (dispatch) => {
  try {
    console.log(phone);
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {phone},
      {headers: {Authorization: token}},
    );
    console.log(response.data);
    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (error) {
    throw e;
  }
};

const postGender = (gender, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {
        gender,
      },
      {headers: {Authorization: token}},
    );

    dispatch({type: POST_GENDER, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postCity = (city, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {city},
      {headers: {Authorization: token}},
    );

    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (error) {
    throw e;
  }
};

const postBirthday = (birthday, token) => async (dispatch) => {
  try {
    console.log(birthday);
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {
        birthday,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );

    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postInterest = (interest, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const data = [interest];
    const response = await api.patch(
      'api/users/me',
      {interest},
      {headers: {Authorization: token}},
    );
    
    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postHobbies = (hobbies, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {hobbies},
      {headers: {Authorization: token}},
    );
    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postLifestyle = (lifestyle, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {lifestyle},
      {headers: {Authorization: token}},
    );

    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postEducation = (school, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {
        school,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postProfession = (profession, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {
        profession,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postReligion = (religion, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {religion},
      {headers: {Authorization: token}},
    );

    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postLocation = (lat, long, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.post(
      'api/users/me/location',
      {
        lat,
        long,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );

    dispatch({type: POST_LOCATION, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postAvatar = (photo, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    var formdata = new FormData();
    const newFile = {
      name: 'avatar.png',
      type: 'image/jpg',
      uri: photo.uri,
    };
    formdata.append('avatar', newFile);

    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
      body: formdata,
    };

    fetch('https://dzirex.herokuapp.com/api/users/me/avatar', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        dispatch({type: POST_AVATAR, payload: result.message});
      })
      .catch((error) => {
        dispatch({type: POST_AVATAR});
        console.log('error', error);
      });
  } catch (e) {
    throw e;
  }
};

export {
  postPhone,
  postGender,
  postInterest,
  postCity,
  postBirthday,
  postEducation,
  postProfession,
  postLocation,
  postReligion,
  postAvatar,
  postHobbies,
  postLifestyle,
};
