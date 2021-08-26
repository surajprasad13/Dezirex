import React, {useEffect, useState} from 'react';
import {StyleSheet, View, PermissionsAndroid} from 'react-native';
import {ImageComponent, SubmitButton, Subtitle, Title} from '../../components';
import {theme} from '../../constants';

import Geolocation from '@react-native-community/geolocation';

import {postLocation} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

const Location = ({navigation, postLocation, loading, token}) => {
  const [position, setPosition] = useState({
    latitude: 10.4273336,
    longitude: 10.3791945,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    }).catch((err) => {
      throw err;
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <ImageComponent source={require('../../assets/images/location.png')} />
      </View>
      <View>
        <Title first="Enable" third="Location" />
        <Subtitle
          first="You will need to enable your location in order to use"
          second="Dezirex"
        />
      </View>
      <SubmitButton
        title="Enable Location"
        onPress={() =>
          postLocation(navigation, position.longitude, position.latitude, token)
        }
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.gray,
  },
});

const mapStateToProps = (state) => ({
  userid: state.user.userid,
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {postLocation})(Location);
