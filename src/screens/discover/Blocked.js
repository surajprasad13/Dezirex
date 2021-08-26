import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import {theme} from '../../constants';
import {Follow} from '../../constants/data';

const Blocked = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Follow}
        renderItem={({item, index}) => {
          return (
            <Card containerStyle={styles.card}>
              <Avatar size={100} rounded source={item.image} />

              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </Card>
          );
        }}
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
  card: {
    alignItems: 'center',
    borderWidth: 0.8,
    backgroundColor: theme.colors.gray,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    color: theme.colors.secondary,
    fontSize: 15,
  },
});

export default Blocked;
