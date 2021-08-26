import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../constants';

const ChatRoomRightItem = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Working fine and what about you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
    maxWidth: '70%',
    marginRight: '2%',
    alignSelf: 'flex-end',
    margin: '5%',
    padding: 15,
    borderRadius: 10,
    borderBottomRightRadius: -0,
  },
});

export default ChatRoomRightItem;
