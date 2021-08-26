import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {theme} from '../../constants';

import {NeuView} from 'react-native-neu-element';
import {TouchableOpacity} from 'react-native';

const ChatSreen = ({navigation}) => {
  const centerImage = () => {
    return (
      <ImageBackground
        source={require('../../assets/images/user3.png')}
        style={{
          width: 80,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text
          style={{
            padding: 10,
            borderRadius: 100,
            backgroundColor: theme.colors.primary,
            color: 'white',
          }}>
          25+
        </Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Icon
          name="search"
          type="feather"
          color={theme.colors.primary}
          style={{marginLeft: 20}}
        />
        <TextInput placeholder="Search 0 matches" style={{marginLeft: 20}} />
      </View>
      <View style={styles.matches}>
        <Text style={{color: theme.colors.primary}}>New Matches</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>My move </Text>
          <Text style={{color: theme.colors.primary}}> Off</Text>
          <Icon
            name="chevron-right"
            type="entypo"
            color={theme.colors.primary}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <NeuView height={100} width={100} color="#ffffff" borderRadius={100}>
          <Avatar
            rounded
            size={100}
            ImageComponent={centerImage}
            containerStyle={{
              backgroundColor: 'white',
              padding: 10,
              borderWidth: 2.5,
              borderColor: theme.colors.primary,
              opacity: 0.8,
            }}
          />
        </NeuView>
        <NeuView height={100} width={100} color="#ffffff" borderRadius={100}>
          <Avatar
            rounded
            size={100}
            containerStyle={{backgroundColor: 'white'}}
          />
        </NeuView>
        <NeuView height={100} width={100} color="#ffffff" borderRadius={100}>
          <Avatar
            rounded
            size={100}
            containerStyle={{backgroundColor: 'white'}}
          />
        </NeuView>
      </View>
      <View style={{margin: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Text style={{color: theme.colors.primary}}>Messages</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../../assets/images/like.png')}
          resizeMode="contain"
        />
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={[styles.text, {color: theme.colors.primary, fontSize: 25}]}>
            Start
          </Text>
          <Text style={[styles.text, {fontSize: 25}]}> Liking</Text>
        </View>
        <Text style={styles.text}>You can send them a message</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  search: {
    borderColor: 'white',
    backgroundColor: 'white',
    margin: 15,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  matches: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default ChatSreen;
