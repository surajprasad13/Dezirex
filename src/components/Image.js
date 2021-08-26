import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import {theme} from '../constants';

import FastImage from 'react-native-fast-image';

const ImageComponent = ({source, ...rest}) => {
  return (
    <View style={styles.center}>
      <NeuView
        color={theme.colors.gray}
        height={180}
        width={180}
        containerStyle={{justifyContent: 'center'}}
        borderRadius={100}>
        <View style={styles.imageContainer}>
          <FastImage
            source={source}
            style={{width: 180, height: 180}}
            resizeMode={'contain'}
            {...rest}
          />
        </View>
      </NeuView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray,
  },
  imageContainer: {
    borderColor: 'grey',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120 / 2,
    borderEndColor: 'red',
  },
});

export default ImageComponent;
