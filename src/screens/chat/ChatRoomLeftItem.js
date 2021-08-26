import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatRoomLeftItem = () => {
  return (
    <View style={styles.container}>
      <Text>Hi how are you !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: '2%',
    alignSelf: 'flex-start',
    maxWidth: '70%',
    margin: '5%',
    borderWidth: 0.3,
    padding: 15,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
  },
});

export default ChatRoomLeftItem;
