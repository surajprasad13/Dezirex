import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';

import {theme} from '../../constants';

//redux
import {connect} from 'react-redux';
import {fetchUserFollow} from '../../redux/actions/discoverAction';

const {width} = Dimensions.get('window');

const Following = ({token, userid, fetchUserFollow, follow}) => {
  useEffect(() => {
    fetchUserFollow(token, userid);
  }, []);

  const [img, setImg] = useState(false);

  const renderItem = ({item}) => {
    fetch(`https://dzirex.herokuapp.com/api/users/${item._id}/avatar`)
      .then((res) => res.status)
      .then((data) => {
        if (data == 200) {
          setImg(true);
        }
      });

    const avatar = img
      ? {
          uri: `https://dzirex.herokuapp.com/api/users/${item._id}/avatar`,
        }
      : require('../../assets/images/avatar.png');

    return (
      <View style={styles.listContainer}>
        <Avatar
          source={avatar}
          containerStyle={{width: 70, height: 70}}
          avatarStyle={{borderRadius: 5}}
        />
        <NeuView
          width={width * 0.7}
          height={70}
          color={theme.colors.gray}
          borderRadius={10}>
          <Text>{item.name}</Text>
          <Text style={{color: theme.colors.secondary}}>{item.lastname}</Text>
        </NeuView>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={follow}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>No data</Text>
          </View>
        }
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  listContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.gray,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  follow: state.discover.follow,
  token: state.user.token,
  userid: state.user.userid,
});

export default connect(mapStateToProps, {fetchUserFollow})(Following);
