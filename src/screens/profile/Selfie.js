import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title, SubmitButton} from '../../components';
import {theme} from '../../constants';

import ImagePicker from 'react-native-image-crop-picker';

import {connect} from 'react-redux';
import {postAvatar} from '../../redux/actions/profileAction';

const {width, height} = Dimensions.get('window');

const Selfie = ({navigation, postAvatar, token, loading}) => {
  const [avatar, setAvatar] = useState(
    'https://source.unsplash.com/400x400?man',
  );

  const [image, setImage] = useState(null);

  const onCamera = async () => {
    try {
      let granted = null;
      if (Platform.OS === 'android') {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'CometChat Camera Permission',
            message: 'CometChat needs access to your camera ',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
      }
      if (
        Platform.OS === 'ios' ||
        granted === PermissionsAndroid.RESULTS.GRANTED
      ) {
        ImagePicker.openCamera({width: 300, height: 400, cropping: true})
          .then((image) => {
            setAvatar(image.path);
            setImage(image.path);
          })
          .catch((e) => {
            throw e
          });
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: theme.colors.gray}}>
        <Title first="Selfie Verification" />
        <View style={styles.imageContainer}>
          <View style={styles.topLeftEdge} />
          <View style={styles.topRightEdge} />
          <Avatar
            rounded
            size={width / 2}
            source={{uri: avatar}}
            containerStyle={{borderWidth: 7, borderColor: '#76d6b2'}}
          />
          <View style={styles.bottomLeftEdge} />
          <View style={styles.bottomRightEdge} />
        </View>
        {image == null ? (
          <SubmitButton
            title="Selfie Verification Complete"
            loading={loading}
            onPress={onCamera}
          />
        ) : (
          <SubmitButton
            title="Selfie Verification Complete"
            loading={loading}
            onPress={() => postAvatar(navigation, avatar, token)}
          />
        )}

        <Button
          title="Skip"
          type="clear"
          onPress={() => navigation.navigate('Location')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: height * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#747579',
    borderRadius: theme.sizes.base,
  },
  topLeftEdge: {
    position: 'absolute',
    top: 120,
    left: 50,
    height: 30,
    width: 30,
    borderColor: '#76d6b2',
    borderLeftWidth: 5,
    borderTopWidth: 5,
  },
  topRightEdge: {
    position: 'absolute',
    top: 120,
    right: 50,
    height: 30,
    width: 30,
    borderColor: '#76d6b2',
    borderRightWidth: 5,
    borderTopWidth: 5,
  },
  bottomLeftEdge: {
    position: 'absolute',
    bottom: 120,
    left: 50,
    height: 30,
    width: 30,
    borderColor: '#76d6b2',
    borderLeftWidth: 5,
    borderBottomWidth: 5,
  },
  bottomRightEdge: {
    position: 'absolute',
    bottom: 120,
    right: 50,
    height: 30,
    width: 30,
    borderColor: '#76d6b2',
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },
});

const mapStateToProps = (state) => ({
  userid: state.user.userid,
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {postAvatar})(Selfie);
