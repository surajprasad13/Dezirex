import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {Card} from '../../components';
import {theme} from '../../constants';

//redux
import {connect} from 'react-redux';
import {fetchUserFollow} from '../../redux/actions/discoverAction';

const Follower = ({token, userid, fetchUserFollow, follow}) => {
  const renderItem = useCallback(
    ({item, index}) => <Card data={item} key={index} />,
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={follow}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        ListEmptyComponent={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>No data</Text>
          </View>
        }
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
  follow: state.discover.follow,
  token: state.user.token,
  userid: state.user.userid,
});

export default connect(mapStateToProps, {fetchUserFollow})(Follower);
