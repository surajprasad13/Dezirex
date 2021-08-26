import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {} from 'react-native-elements';

import {theme} from '../constants';

const Subtitle = ({first, second}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={[styles.text, {textAlign: 'center'}]}>{first}</Text>
      </View>
      <Text
        style={[
          styles.text,
          {textAlign: 'center', color: theme.colors.primary},
        ]}>
        {second}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default Subtitle;
