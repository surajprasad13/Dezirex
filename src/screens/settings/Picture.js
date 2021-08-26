import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';

import {Icon, Button} from 'react-native-elements';
import {Title} from '../../components';
import {theme} from '../../constants';

import {NeuView} from 'react-native-neu-element';
import LinearGradient from 'react-native-linear-gradient';

import ImagePicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window');

const data = Array(6)
  .fill()
  .map((val, index) => {
    return {id: index, key: `square-${index}`};
  });

const Photos = ({navigation}) => {
  const [image, setImage] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const onSelect = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
    });
  };

  const renderItem = useCallback(
    ({}) => (
      <View style={{margin: 10}}>
        <NeuView
          height={100}
          width={100}
          color={theme.colors.gray}
          containerStyle={{margin: 0, padding: 10, borderRadius: 10}}>
          <ImageBackground
            style={styles.imageContainer}
            source={{uri: image}}
            imageStyle={{borderRadius: 10}}>
            <TouchableOpacity style={{left: 5, top: 5}} onPress={onSelect}>
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
    ),
    [],
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title first="Edit your profile picture" />
        <View style={styles.photoContainer}>
          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-around'}}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            extraData={selectedId}
          />
        </View>
        <Button
          title="Add Media"
          containerStyle={{margin: 20, padding: 10}}
          buttonStyle={{borderRadius: 12, padding: 15}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [`${theme.colors.primary}`, `${theme.colors.secondary}`],
            start: {x: 0, y: 0},
            end: {x: 1, y: 1},
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Basic')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Basic Information</Text>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Religion')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Religion and about me</Text>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lifestyle')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Lifestyle and hobbies</Text>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Payment account</Text>
          </NeuView>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    top: 30,
    marginBottom: 30,
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

export default Photos;
