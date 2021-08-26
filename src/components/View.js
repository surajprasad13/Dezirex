import React from 'react';
import {StyleSheet} from 'react-native';
import {} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {theme} from '../constants';

const CustomView = ({children, height, width}) => {
  return (
    <NeuView
      color={theme.colors.gray}
      height={height}
      width={width}
      containerStyle={{justifyContent: 'center'}}>
      {children}
    </NeuView>
  );
};

const styles = StyleSheet.create({});

export default CustomView;
