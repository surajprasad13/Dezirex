import React, {memo} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Home from '../screens/Home';
import Discover from '../screens/discover/Discover';
import ChatScreen from '../screens/chat/ChatScreen';
import Settings from '../screens/settings/Settings';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

import {Header} from '../components';

import {Bottom as Tabbar} from '../components';
import Profile from '../screens/settings/Profile';
import Basic from '../screens/settings/Basic';
import Lifestyle from '../screens/settings/Lifestyle';
import Religion from '../screens/settings/Religion';
import Photos from '../screens/settings/Picture';
import Report from '../screens/settings/Report';
import Payment from '../screens/payment/Payment';
import CardDetail from '../screens/payment/CardDetail';
import CardEdit from '../screens/payment/CardEdit';
import Success from '../screens/payment/Success';
import Terms from '../screens/settings/Terms';
import ChatRoom from '../screens/chat/ChatRoom';
import Selfie from '../screens/settings/Selfie';
import Preview from '../screens/settings/Preview';

import Free from '../screens/subscription/Free';

import {
  CometChatUserProfile,
  CometChatUI,
  CometChatMessages,
  CometChatUserListWithMessages,
  CometChatUserList,
  CometChatGroupListWithMessages,
  CometChatGroupList,
  CometChatConversationListWithMessages,
  CometChatConversationList,
} from '../screens/cometchat/src';

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => <Header {...props} />}}
      />
    </Stack.Navigator>
  );
}

function DiscoverStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{header: () => <Header {...props} />}}
      />
    </Stack.Navigator>
  );
}

function ChatStack(props) {
  return (
    <Stack.Navigator mode="card" initialRouteName="Users">
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{header: () => <Header {...props} />}}
      />
      <Stack.Screen name="CometChatUI" component={CometChatUI} />
      <Stack.Screen
        name="Conversation"
        component={CometChatConversationListWithMessages}
      />
      <Stack.Screen
        name="ConversationComponent"
        component={CometChatConversationList}
      />
      <Stack.Screen name="Group" component={CometChatGroupListWithMessages} />
      <Stack.Screen name="GroupComponent" component={CometChatGroupList} />
      <Stack.Screen name="Users" component={CometChatUserListWithMessages} />
      <Stack.Screen name="UsersComponent" component={CometChatUserList} />
      <Stack.Screen
        options={{}}
        name="CometChatMessages"
        component={CometChatMessages}
      />
      <Stack.Screen
        name="Message"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{header: () => <Header {...props} />}}
      />
      <Stack.Screen
        name="Free"
        component={Free}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Preview"
        component={Preview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Selfie"
        component={Selfie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Basic"
        component={Basic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lifestyle"
        component={Lifestyle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Religion"
        component={Religion}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Photo"
        component={Photos}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardDetail"
        component={CardDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CardEdit"
        component={CardEdit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Bottom.Navigator lazy={true} tabBar={(props) => <Tabbar {...props} />}>
      <Bottom.Screen name="Home" component={HomeStack} />
      <Bottom.Screen name="Discover" component={DiscoverStack} />
      <Bottom.Screen name="Chat" component={ChatStack} />
      <Bottom.Screen name="Settings" component={SettingsStack} />
    </Bottom.Navigator>
  );
}

export default memo(MainNavigator);
