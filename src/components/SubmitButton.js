import React from 'react';
import {Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants';

const ButtonComponent = ({title, onPress, loading}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: [`${theme.colors.primary}`, `${theme.colors.secondary}`],
        start: {x: 0, y: 0},
        end: {x: 1, y: 1},
      }}
      buttonStyle={{margin: 20, padding: 15, borderRadius: 15}}
      loading={loading}
    />
  );
};

export default ButtonComponent;
