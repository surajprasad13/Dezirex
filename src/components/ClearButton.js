import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {theme} from '../constants';

import {NeuButton} from 'react-native-neu-element';

const {width} = Dimensions.get('window');

const ClearButton = ({title, onPress, style, icon, textColor, ...rest}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
      <NeuButton
        color={theme.colors.gray}
        onPress={onPress}
        height={50}
        width={width * 0.85}
        borderRadius={10}
        {...rest}
        containerStyle={[
          {...style},
          {
            alignItems: 'center',
            borderRadius: 20,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 250,
          }}>
          <Text style={{color: textColor}}>{title}</Text>
          {icon ? icon : null}
        </View>
      </NeuButton>
    </View>
  );
};

export default ClearButton;
