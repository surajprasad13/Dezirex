import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {NeuInput} from 'react-native-neu-element';
import {ButtonComponent, Title} from '../../components';
import {theme} from '../../constants';

const {width} = Dimensions.get('window');

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title first="Email Signup" />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <NeuInput
          placeholder="Email"
          width={width * 0.85}
          height={50}
          color={theme.colors.gray}
          borderRadius={theme.sizes.radius}
        />
        <NeuInput
          placeholder="Password"
          width={width * 0.85}
          height={50}
          color={theme.colors.gray}
          borderRadius={theme.sizes.radius}
          style={{marginTop: 20}}
        />
      </View>
      <ButtonComponent
        title="Signup"
        navigation={navigation}
        routeName="Name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.gray,
  },
});

export default Signup;
