import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon, SearchBar} from 'react-native-elements';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      <SearchBar leftIcon={<Icon name="search" type="feather" />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
