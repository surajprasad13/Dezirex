import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
  PermissionsAndroid,
} from 'react-native';

import {Icon, BottomSheet, Button} from 'react-native-elements';
import {SubmitButton, Subtitle, Title} from '../../components';
import {theme} from '../../constants';

import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';

//redux
import {postPhotos, setPhoto} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

const data = Array(6)
  .fill()
  .map((val, index) => {
    return {id: index, key: `square-${index}`};
  });

const Photos = ({
  navigation,
  userid,
  loading,
  setPhoto,
  postPhotos,
  photos,
  message,
}) => {
  const renderItem = useCallback(
    ({item, index}) => (
      <NewCard item={item} index={index} setPhoto={setPhoto} />
    ),
    [],
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <ScrollView style={{flex: 1, backgroundColor: theme.colors.gray}}>
        <View style={styles.container}>
          <Title first="Add" second="Photos" />
          <Subtitle first="Add at least 2 photos to continue " />
          <View style={styles.photoContainer}>
            <FlatList
              data={data}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-around'}}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <SubmitButton
            title={message ? message : 'Next'}
            loading={loading}
            onPress={() => postPhotos(navigation, photos, userid)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const NewCard = ({setPhoto}) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');

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
            setVisible(!visible);

            setImage(image.path);
            setPhoto(image);
          })
          .catch((e) => {
            setVisible(!visible);
          });
      }
    } catch (error) {}
  };

  const onGallery = async () => {
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
        ImagePicker.openPicker({cropping: true})
          .then((image) => {
            setImage(image.path);
            setVisible(!visible);
            setPhoto(image);
          })
          .catch((e) => {
            setVisible(!visible);
          });
      }
    } catch (error) {}
  };

  return (
    <>
      <View style={{margin: 10}}>
        <NeuView
          height={100}
          width={100}
          color={theme.colors.gray}
          containerStyle={{margin: 0, padding: 10, borderRadius: 10}}>
          <ImageBackground
            source={{uri: image ? image : null}}
            style={styles.imageContainer}
            imageStyle={{borderRadius: 10}}>
            <TouchableOpacity
              style={{left: 5, top: 5}}
              onPress={() => setVisible(!visible)}>
              <Icon
                name="plus"
                type="entypo"
                color="white"
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        </NeuView>
      </View>
      <BottomSheet isVisible={visible}>
        <View style={{backgroundColor: 'white', padding: 15}}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '500'}}>
            Choose Photos
          </Text>
          <SubmitButton title="Camera" onPress={onCamera} />
          <SubmitButton title="Gallery" onPress={onGallery} />
          <Button
            title="Cancel"
            type="clear"
            onPress={() => setVisible(!visible)}
          />
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.gray,
    marginTop: 20,
  },
  photoContainer: {},
  photoSection: {
    padding: 20,
  },
  imageContainer: {
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

const mapStateToProps = (state) => ({
  userid: state.user.userid,
  loading: state.profile.loading,
  photos: state.profile.photos,
  message: state.profile.message,
});

export default connect(mapStateToProps, {setPhoto, postPhotos})(Photos);
