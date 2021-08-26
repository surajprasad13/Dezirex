import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {theme} from '../../constants';
import {NeuView} from 'react-native-neu-element';

//redux
import {fetchUser, logout} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';
import exampleImage from '../../assets/images/user3.png';
const defaultImage = Image.resolveAssetSource(exampleImage).uri;

const {width, height} = Dimensions.get('window');

const Settings = ({navigation, token, fetchUser, userdetail, logout}) => {
  const { name, school, _id } = userdetail;
  console.log(_id)
  const avatar =
    userdetail != null
      ? {
          uri: `https://dzirex.herokuapp.com/api/users/${_id}/avatar`,
        }
      : require('../../assets/images/avatar.png');

  useEffect(() => {
    fetchUser(token);
  }, [logout]);

  return (
    <ScrollView style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.imageContainer}>
          <Avatar
            rounded
            size={150}
            avatarStyle={{resizeMode: 'cover'}}
            containerStyle={styles.image}
            source={avatar}
            onPress={() => navigation.navigate('Photo')}
          />
          <View style={styles.iconContainer}>
            <Icon
              name="pencil"
              type="evilicon"
              size={25}
              color={theme.colors.primary}
              onPress={() => navigation.navigate('Selfie')}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <NeuView
          color={theme.colors.gray}
          height={80}
          width={width * 0.6}
          borderRadius={12}>
          <Text
            style={[styles.text, {color: theme.colors.primary, fontSize: 25}]}>
            {userdetail != null ? name : 'Rameesh'} , 23
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.text, {color: theme.colors.primary}]}>
              Rameesh,
            </Text>
            {userdetail ? (
              <Text style={styles.text}>{userdetail.school}</Text>
            ) : (
              <Text style={styles.text}>School</Text>
            )}
          </View>
        </NeuView>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Free')}>
          <View
            style={{
              height: 50,
              width: width * 0.75,
              backgroundColor: theme.colors.secondary,
              borderRadius: theme.sizes.radius,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
              Dezirex Packages
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          height: theme.sizes.base * 17,
          justifyContent: 'space-around',
          top: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            borderRadius={12}
            width={width * 0.75}>
            <View
              style={{
                flexDirection: 'row',
                width: width / 2,
              }}>
              <Icon
                name="pencil"
                type="evilicon"
                color={theme.colors.primary}
              />
              <Text style={[styles.text, {left: 20}]}>Edit Profile</Text>
            </View>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Report')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            borderRadius={12}
            width={width * 0.75}>
            <View
              style={{
                flexDirection: 'row',
                width: width / 2,
              }}>
              <Icon
                name="infocirlce"
                type="antdesign"
                color={theme.colors.primary}
              />
              <Text style={[styles.text, {left: 20}]}>Report your problem</Text>
            </View>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            borderRadius={12}
            width={width * 0.75}>
            <View
              style={{
                flexDirection: 'row',
                width: width / 2,
              }}>
              <Icon
                name="newspaper-outline"
                type="ionicon"
                color={theme.colors.primary}
              />

              <Text style={[styles.text, {left: 20}]}>
                Terms and conditions
              </Text>
            </View>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logout(navigation)}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            borderRadius={12}
            width={width * 0.75}>
            <View
              style={{
                flexDirection: 'row',
                width: width / 2,
              }}>
              <Icon
                name="logout"
                type="antdesign"
                color={theme.colors.primary}
              />
              <Text style={[styles.text, {left: 20}]}>Logout</Text>
            </View>
          </NeuView>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    borderWidth: 2.5,
    borderColor: theme.colors.primary,
    padding: 10,
  },
  iconContainer: {
    borderColor: theme.colors.primary,
    borderWidth: 2.5,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    backgroundColor: 'white',
  },
  listContainer: {
    backgroundColor: 'transparent',
    margin: 10,
    borderRadius: 12,
    borderColor: theme.colors.gray,
    borderWidth: 2,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
  userid: state.user.userid,
  userdetail: state.profile.userdetail,
  token: state.user.token,
});

const mapDispatchToProps = {
  fetchUser,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
