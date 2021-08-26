import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import api from '../../api';

import {useSelector} from 'react-redux';
import {theme} from '../../constants';

const Gmail = ({navigation}) => {
  const data = useSelector((state) => state.user);

  const {userid} = data;

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    if (currentUser) {
      const response = await api.post('login/googleregister', {
        userid,
        gmail: currentUser.user.email,
      });
      response.status == 200
        ? navigation.navigate('Name')
        : Alert.alert('failed');
    } else {
      navigation.navigate('Name');
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default Gmail;
