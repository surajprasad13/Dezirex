import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonComponent, Subtitle, Title} from '../../components';
import {theme} from '../../constants';

const Someone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Title first="Want to avoid" third="Someone you know" />
        <Subtitle first="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eu quam vitae vehicula." />
        <Subtitle first="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eu quam vitae vehicula." />
      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <ButtonComponent
        title="Continue"
        navigation={navigation}
        routeName="Main"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.gray,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    margin: 10,
    textDecorationLine: 'underline',
  },
});

export default Someone;
