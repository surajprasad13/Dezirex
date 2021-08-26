import React, {useEffect, useRef} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {SliderGallery} from '../components';
import {data, theme} from '../constants';
import {NeuView} from 'react-native-neu-element';

import Carousel from 'react-native-snap-carousel';

//redux
import {fetchUser} from '../redux/actions/profileAction';
import {fetchUsers} from '../redux/actions/userAction';
import {connect} from 'react-redux';

import {auth} from '../redux/actions/callAuthAction';
import {COMETCHAT_CONSTANTS} from '../../CONSTS';
import {User} from '../constants/data';

const {width} = Dimensions.get('window');

const Home = ({fetchUser, fetchUsers, token, userdetail, auth, users}) => {
  const carousel = useRef(null);

  useEffect(() => {
    fetchUser(token);
    fetchUsers();
    if (userdetail != null) {
      auth(`${userdetail.name}`, COMETCHAT_CONSTANTS.AUTH_KEY);
    }
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: theme.colors.gray}}>
        <View style={styles.container}>
          <SliderGallery
            item={item}
            onPress={() => carousel.current.snapToNext()}
            onPressBack={() => carousel.current.snapToPrev()}
          />
          <View style={{alignItems: 'center'}}>
            <View style={styles.dark}>
              <Icon
                name="shopping-bag"
                type="entypo"
                color={theme.colors.primary}
                size={15}
              />
              <Text style={styles.text}>
                {item.profession ? item.profession : 'Profession'}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dark}>
                <Icon
                  name="moon"
                  type="ionicon"
                  color={theme.colors.primary}
                  size={15}
                />
                <Text style={styles.text}>
                  {item.religion ? item.religion : 'religion'}
                </Text>
              </View>
              <View style={styles.dark}>
                <Icon
                  name="refresh"
                  type="foundation"
                  color={theme.colors.primary}
                  size={15}
                />
                <Text style={styles.text}>
                  {item.marital ? item.marital : 'Status'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <NeuView
              width={width - 20}
              height={200}
              style={{top: 10, bottom: 50}}
              color={theme.colors.gray}
              containerStyle={styles.card}>
              <Card.Title style={{color: theme.colors.primary}}>
                About me
              </Card.Title>
              <Text style={{padding: 20, textAlign: 'center'}}>
                {item.bio ? item.bio : 'Nothing to show here'}
              </Text>
              <View style={styles.section}>
                <View style={styles.section}>
                  <Icon
                    name="arrowsalt"
                    type="antdesign"
                    color={theme.colors.primary}
                  />
                  <Text>{item.height ? item.height : 'Height'} cm (5'4)</Text>
                </View>
                <View style={styles.section}>
                  <Icon
                    name="brush-outline"
                    type="ionicon"
                    color={theme.colors.primary}
                  />
                  <Text>
                    {item.lifestyle[0] ? item.lifestyle[0] : 'Lifestyle'}
                  </Text>
                </View>
              </View>
            </NeuView>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <Carousel
      ref={carousel}
      layout={'stack'}
      layoutCardOffset={`18`}
      data={users}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  card: {
    borderRadius: 15,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  dark: {
    backgroundColor: 'rgba(0,0,0,.7)',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
});

const mapStateToProps = (state) => ({
  token: state.user.token,
  userdetail: state.profile.userdetail,
  users: state.user.users,
});

export default connect(mapStateToProps, {fetchUser, auth, fetchUsers})(Home);
