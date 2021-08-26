import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title} from '../../components';
import {theme} from '../../constants';
import ChatRoomLeftItem from './ChatRoomLeftItem';
import ChatRoomRightItem from './ChatRoomRightItem';
const {width, height} = Dimensions.get('window');

const ChatRoom = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <ScrollView>
        <Title first="Message" />
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <NeuView
            width={width * 0.85}
            height={height * 0.75}
            color={theme.colors.gray}
            borderRadius={16}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                width: 250,
                marginTop: 10,
              }}>
              <NeuView
                width={50}
                height={50}
                color={theme.colors.gray}
                borderRadius={50}>
                <Icon
                  name="telephone"
                  type="foundation"
                  color={theme.colors.secondary}
                />
              </NeuView>
              <NeuView
                width={50}
                height={50}
                style={{left: 10}}
                color={theme.colors.gray}
                borderRadius={50}>
                <Icon
                  name="video"
                  type="foundation"
                  color={theme.colors.secondary}
                />
              </NeuView>
            </View>
            <ScrollView contentContainerStyle={styles.message}>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Sunday 4:45 pm
              </Text>
              <ChatRoomLeftItem />
              <ChatRoomRightItem />
            </ScrollView>
            <View style={styles.inputContainer}>
              <Icon name="camera" type="entypo" />
              <TextInput
                placeholder="Type Message"
                style={{
                  borderWidth: 1,
                  width: '80%',
                  borderRadius: 5,
                  height: 40,
                }}
              />
              <Icon
                name="send-sharp"
                type="ionicon"
                color={theme.colors.secondary}
              />
            </View>
          </NeuView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  message: {
    marginTop: 10,
    width: width * 0.8,
  },
  inputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    width: width * 0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {},
});

export default ChatRoom;
