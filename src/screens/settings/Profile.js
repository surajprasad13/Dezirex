import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import {Title} from '../../components';
import {theme} from '../../constants';

import {Button} from 'react-native-elements';

const {width} = Dimensions.get('window');

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title first="Edit Profile" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 30,
        }}>
        <Button
          title="Preview"
          onPress={() => navigation.navigate('Preview')}
          buttonStyle={{width: 100, borderRadius: 10}}
        />

        <Button title="Edit" buttonStyle={{width: 100, borderRadius: 10}} />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Basic')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Basic Information</Text>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Religion')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Religion and about me</Text>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lifestyle')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Lifestyle and hobbies</Text>
          </NeuView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <NeuView
            color={theme.colors.gray}
            height={50}
            width={width * 0.8}
            style={{margin: 10}}
            borderRadius={12}>
            <Text>Payment account</Text>
          </NeuView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    backgroundColor: theme.colors.gray,
  },
});

export default Profile;
