import React, {useState} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';
import {theme} from '../constants';

const Card = ({data}) => {
  const {image, name, star, status, _id} = data;

  const [img, setImg] = useState(false);

  fetch(`https://dzirex.herokuapp.com/api/users/${data._id}/avatar`)
    .then((res) => res.status)
    .then((data) => {
      if (data == 200) {
        setImg(true);
      }
    });

  const avatar = img
    ? {
        uri: `https://dzirex.herokuapp.com/api/users/${data._id}/avatar`,
      }
    : require('../assets/images/avatar.png');

  return (
    <View style={styles.container} key={image}>
      <ImageBackground source={avatar} style={styles.imageContainer}>
        <View style={[styles.section, {padding: 10}]}>
          <Text style={{fontSize: 18, color: 'gray', textAlign: 'justify'}}>
            {name}
          </Text>
          <View style={styles.iconSection}>
            <Icon name="star" size={15} color="white" />
            <Text style={{color: 'white'}}>{star}</Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{textAlign: 'center', padding: 10, color: theme.colors.primary}}>
        Recently/active
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 1,
  },
  imageContainer: {
    width: 150,
    height: 200,
    justifyContent: 'flex-end',
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    width: 50,
    borderRadius: 100,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default Card;
