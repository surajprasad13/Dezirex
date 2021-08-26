import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {launchCamera} from 'react-native-image-picker';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Title, SubmitButton} from '../../components';
import {theme} from '../../constants';

//redux
import {connect} from 'react-redux';
import {postAvatar} from '../../redux/actions/updateProfileAction';

const {width, height} = Dimensions.get('window');

const Selfie = ({navigation, postAvatar, loading, token}) => {
  const [avatar, setAvatar] = useState(
    'https://source.unsplash.com/400x400?man',
  );
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
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
        launchCamera(
          {
            includeBase64: false,
            cameraType: 'front',
          },
          (response) => {
            if (response.didCancel) {
              return null;
            }
            let type = null;
            let name = null;
            if (Platform.OS === 'ios' && response.fileName !== undefined) {
              name = response.fileName;
            } else {
              type = response.type;
              name = 'Camera_001.jpeg';
            }
            const file = {
              name: Platform.OS === 'android' ? response.fileName : name,
              type: Platform.OS === 'android' ? response.type : type,
              uri:
                Platform.OS === 'android'
                  ? response.uri
                  : response.uri.replace('file://', ''),
            };
            setAvatar(response.uri);
            setImage(file);
          },
        );
      }
    } catch (e) {
      throw e;
    }
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
            onPress={takePhoto}
          />
          <View style={styles.bottomLeftEdge} />
          <View style={styles.bottomRightEdge} />
        </View>
        <SubmitButton
          title="Selfie Verification Complete"
          onPress={() => postAvatar(image, token)}
          loading={loading}
        />
        <Button
          title="Skip"
          type="clear"
          onPress={() => navigation.navigate('Settings')}
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
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {postAvatar})(Selfie);
