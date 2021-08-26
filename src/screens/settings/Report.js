import React from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent} from '../../components';

import {theme} from '../../constants';

const {width, height} = Dimensions.get('window');

const Report = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[styles.text, {color: theme.colors.secondary}]}>
          Report
        </Text>
        <Text style={[styles.text]}>Your</Text>
        <Text style={[styles.text, {color: theme.colors.secondary}]}>
          Problem
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <NeuView
          width={width * 0.8}
          height={width * 0.8}
          borderRadius={15}
          color={theme.colors.gray}>
          <TextInput placeholder="Write your problem here" />
        </NeuView>
      </View>
      <ButtonComponent title="Send" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    margin: 5,
  },
});

export default Report;
