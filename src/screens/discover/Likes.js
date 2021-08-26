import React, {useCallback, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card} from '../../components';
import {theme} from '../../constants';

import {Follow as Data} from '../../constants/data';

//redux
import {connect} from 'react-redux';
import {fetchUserActivity} from '../../redux/actions/discoverAction';

const Likes = ({token, userid, fetchUserActivity, like}) => {
  useEffect(() => {
    fetchUserActivity(token, userid);
  }, []);

  const renderItem = useCallback(
    ({item, index}) => <Card data={item} key={index} />,
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={like}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.gray,
  },
});

const mapStateToProps = (state) => ({
  token: state.user.token,
  userid: state.user.userid,
  like: state.discover.like,
});

export default connect(mapStateToProps, {fetchUserActivity})(Likes);
