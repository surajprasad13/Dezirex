import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {theme} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const Camera = ({onPress}) => {
  return (
    <View>
      <Image
        source={require('../assets/images/camera.png')}
        style={{width: 300, height: 200}}
      />
      <Text style={{fontSize: 25, textAlign: 'center', padding: 20}}>
        Camera Access
      </Text>
      <Text style={{textAlign: 'center', padding: 10, margin: 10}}>
        Please allow access to your camera to take photos
      </Text>
      <Button
        title="Enable"
        ViewComponent={LinearGradient}
        containerStyle={{margin: 15}}
        buttonStyle={{padding: 15, borderRadius: 15}}
        linearGradientProps={{
          colors: [`${theme.colors.primary}`, `${theme.colors.secondary}`],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        }}
      />
      <TouchableOpacity onPress={onPress}>
        <Text style={{textAlign: 'center', color: 'gray'}}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Camera;
