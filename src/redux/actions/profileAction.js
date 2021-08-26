import {
  PROFILE_VALUE,
  FETCH_HOBBIES,
  FETCH_INTEREST,
  FETCH_LIFESTYLE,
  FETCH_RELIGION,
  FETCH_SEX,
  POST_NAME,
  PROFILE_LOADING,
  POST_BIRTHDAY,
  POST_GENDER,
  POST_INTEREST,
  POST_HEIGHT,
  POST_RELIGION,
  POST_HOBBIES,
  POST_LIFESTYLE,
  POST_LOCATION,
  POST_PHOTOS,
  POST_AVATAR,
  PHOTOS,
  USER_DETAIL,
  POST_EDUCATION,
  LOGOUT,
} from './types';

import api from '../../api';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const profileValue = ({prop, value}) => {
  return {
    type: PROFILE_VALUE,
    payload: {prop, value},
  };
};

const postName = (navigation, name, lastname, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {name, lastname},
      {
        headers: {
          Authorization: token,
        },
      },
    );

    if (response.status == 200) {
      navigation.navigate('Birthday');
    }
    dispatch({type: POST_NAME, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postBirthday = (navigation, birthday, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {birthday},
      {headers: {Authorization: token}},
    );
    if (response.status == 200) {
      navigation.navigate('Who');
    }
    dispatch({type: POST_BIRTHDAY, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postGender = (navigation, gender, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {
        gender,
      },
      {headers: {Authorization: token}},
    );
    if (response.status == 200) {
      navigation.navigate('Height');
    }

    dispatch({type: POST_GENDER, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postHeight = (navigation, height, marital, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {
        height,
        marital,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );

    dispatch({type: POST_HEIGHT, payload: response.data});

    if (response.status == 200) {
      navigation.navigate('Interest');
    }
  } catch (e) {
    throw e;
  }
};

const postInterest = (navigation, interest, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {interest},
      {headers: {Authorization: token}},
    );

    if (response.status == 200) {
      navigation.navigate('Education');
    }
    dispatch({type: POST_INTEREST, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postEducation =
  (navigation, school, profession, token) => async (dispatch) => {
    try {
      dispatch({type: PROFILE_LOADING});
      const response = await api.patch(
        'api/users/me',
        {
          school,
          profession,
        },
        {headers: {Authorization: token}},
      );

      if (response.status == 200) {
        navigation.navigate('Religion');
      }
      dispatch({type: POST_EDUCATION, payload: 'Data updated successfully'});
    } catch (e) {
      throw e;
    }
  };

const postReligion = (navigation, religion, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {religion},
      {headers: {Authorization: token}},
    );
    if (response.status == 200) {
      navigation.navigate('Lifestyle');
    }
    dispatch({type: POST_RELIGION, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postHobbies = (navigation, hobbies, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {hobbies},
      {headers: {Authorization: token}},
    );
    if (response.status == 200) {
      navigation.navigate('Location');
    }
    dispatch({type: POST_HOBBIES, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const postLifestyle = (navigation, lifestyle, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
      'api/users/me',
      {lifestyle},
      {headers: {Authorization: token}},
    );

    if (response.status == 200) {
      navigation.navigate('Photos');
    }
    dispatch({type: POST_LIFESTYLE, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const setPhoto = (photos) => async (dispatch) => {
  dispatch({type: PHOTOS, payload: photos});
};

const postPhotos = (navigation, photos, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    var formdata = new FormData();

    photos.forEach((item, i) => {
      const newFile = {
        name: 'avatar.png',
        type: 'image/jpg',
        uri: item.path,
      };

      formdata.append('photos', newFile);
    });

    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
      body: formdata,
    };

    fetch('https://dzirex.herokuapp.com/api/users/me/photos', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        navigation.navigate('Selfie');
        if (result.message) {
          setTimeout(() => {
            navigation.navigate('Selfie');
          }, 1000);
        }
        dispatch({type: POST_PHOTOS, payload: result.message});
      })
      .catch((error) => {
        dispatch({type: POST_PHOTOS});
        navigation.navigate('Selfie');
      });
  } catch (e) {
    navigation.navigate('Selfie');
    throw e;
  }
};

const postAvatar = (navigation, photo, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    var formdata = new FormData();
    const newFile = {
      name: 'avatar.png',
      type: 'image/jpg',
      uri: photo,
    };
    formdata.append('avatar', newFile);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: token,
      },
    };

    fetch('https://dzirex.herokuapp.com/api/users/me/avatar', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result) {
          navigation.navigate('Location');
        }
        dispatch({type: POST_AVATAR, payload: result.message});
      })
      .catch((error) => {
        navigation.navigate('Location');
        dispatch({type: POST_AVATAR});
      });
  } catch (e) {
    navigation.navigate('Location');
    throw e;
  }
};

const postLocation = (navigation, lat, long, token) => async (dispatch) => {
  try {
    dispatch({type: PROFILE_LOADING});
    const response = await api.patch(
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
    if (response.status == 200) {
      navigation.navigate('Someone');
    }

    dispatch({type: POST_LOCATION, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const fetchSex = () => async (dispatch) => {
  try {
    const response = await api.get('api/detail/sexual');
    dispatch({type: FETCH_SEX, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const fetchInterest = () => async (dispatch) => {
  try {
    const response = await api.get('api/detail/interest');

    dispatch({type: FETCH_INTEREST, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const fetchReligion = () => async (dispatch) => {
  try {
    const response = await api.get('api/detail/religion');
    dispatch({type: FETCH_RELIGION, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const fetchLifeStyle = () => async (dispatch) => {
  try {
    const response = await api.get('api/detail/lifestyle');
    dispatch({type: FETCH_LIFESTYLE, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const fetchHobbies = () => async (dispatch) => {
  try {
    const response = await api.get('api/detail/hobbies');
    dispatch({type: FETCH_HOBBIES, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const fetchUser = (token) => async (dispatch) => {
  try {
    const response = await api.get('api/users/me', {
      headers: {Authorization: token},
    });
    dispatch({type: USER_DETAIL, payload: response.data});
  } catch (e) {
    throw e;
  }
};

const logout = (navigation) => async (dispatch) => {
  try {
    const data = await AsyncStorage.clear();
    if (data) {
      dispatch({type: LOGOUT});
      navigation.dispatch(StackActions.replace('Login'));
    }
  } catch (error) {
    throw error;
  }
};

export {
  //post
  profileValue,
  postName,
  postBirthday,
  postGender,
  postHeight,
  postInterest,
  postEducation,
  postReligion,
  postHobbies,
  postLifestyle,
  setPhoto,
  postPhotos,
  postLocation,
  postAvatar,
  //fetch
  fetchSex,
  fetchInterest,
  fetchReligion,
  fetchHobbies,
  fetchLifeStyle,
  fetchUser,
  logout,
};
