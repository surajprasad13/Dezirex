import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {theme} from '../constants';

import {userLike, userDislike, userFollow} from '../redux/actions/userAction';

const SliderGallery = ({
  item,
  userid,
  userLike,
  userDislike,
  userFollow,
  onPress,
  onPressBack,
}) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  const [img, setImg] = useState(false);

  fetch(`https://dzirex.herokuapp.com/api/users/${item._id}/avatar`)
    .then((res) => res.status)
    .then((data) => {
      if (data == 200) {
        setImg(true);
      }
    });

  const pressLike = () => {
    setLike(!like);
    !like ? userLike(item._id, userid) : userDislike(item._id, userid);
  };

  const pressBlock = () => {
    console.log('Block pressed');
  };

  const pressFollow = () => {
    console.log('Follow pressed');
    setFollow(!follow);
    userFollow(item._id, userid);
  };

  const avatar = img
    ? {
        uri: `https://dzirex.herokuapp.com/api/users/${item._id}/avatar`,
      }
    : require('../assets/images/avatar.png');

  return (
    <ImageBackground source={avatar} style={styles.imageContainer}>
      <View style={{flex: 1}} />
      <View style={[styles.iconContainer, {flex: 1}]}>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="cross"
            type="entypo"
            color="#c1c0c9"
            size={28}
            style={[styles.icon, {padding: 15}, {backgroundColor: 'white'}]}
          />
        </TouchableOpacity>
        <Avatar
          ImageComponent={FastImage}
          containerStyle={{
            backgroundColor: 'white',
            borderRadius: 100,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          avatarStyle={{
            width: 50,
            height: 50,
            top: 5,
          }}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={styles.dark}>
        <Text style={{color: 'white', fontSize: 25}}>
          {item.name},{item.age ? item.age : 'age'}
        </Text>
        <Text style={{color: 'white', fontSize: 20}}>City</Text>
      </View>

      <View style={[styles.iconContainer, {bottom: -30}]}>
        <View style={[styles.icon, {width: 55}, {backgroundColor: 'white'}]}>
          <TouchableOpacity onPress={onPressBack}>
            <Icon name="refresh" type="foundation" color="orange" size={25} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={pressFollow}>
          <Avatar
            containerStyle={{
              backgroundColor: follow ? theme.colors.secondary : 'white',
              borderRadius: 100,
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            avatarStyle={{
              width: 40,
              height: 40,
              top: 15,
            }}
            source={require('../assets/images/rocket.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={pressLike}>
          <Icon
            name="star"
            type="antdesign"
            color={like ? 'white' : 'green'}
            size={25}
            style={[
              styles.icon,
              {backgroundColor: like ? theme.colors.primary : 'white'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: width,
    height: height * 0.75,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  dark: {
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: 200,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  icon: {
    padding: 15,
    borderRadius: 100,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
  },
});

const mapStateToProps = (state) => ({
  like: state.user.like,
  dislike: state.user.dislike,
  follow: state.user.follow,
  block: state.user.block,
  userid: state.user.userid,
});

export default connect(mapStateToProps, {userLike, userDislike, userFollow})(
  SliderGallery,
);
