import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {} from 'react-native-elements';

import {theme} from '../constants';

const Title = ({first, second, third, four}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={[styles.text, {color: theme.colors.primary}]}>
          {first}
        </Text>
        <Text style={[styles.text, {marginLeft: 15}]}>{second}</Text>
      </View>
      <Text style={[styles.text, {textAlign: 'center'}]}>{third}</Text>
      {four ? <View></View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 27,
  },
});

export default Title;
