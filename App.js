/* eslint-disable react-hooks/exhaustive-deps */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  LogBox,
  InteractionManager,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';
import {ThemeProvider} from 'react-native-elements';
import {theme} from './src/constants';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {getUserData} from './src/helpers/user';
import {store, persistor} from './src/redux';

import {CometChat} from '@cometchat-pro/react-native-chat';
import {PersistGate} from 'redux-persist/integration/react';
import {COMETCHAT_CONSTANTS} from './CONSTS';

LogBox.ignoreAllLogs([
  'Failed prop type: NeuView: prop type `customLightShadow` is invalid; it must be a function, usually from the `prop-types` package, but received `object`',
]);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [connected, setConnnected] = useState(true);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      const data = performTaskConsuming();
      if (data != null) {
        setLoading(false);
      }
    });
  }, []);

  LogBox.ignoreAllLogs();
  var appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(COMETCHAT_CONSTANTS.REGION)
    .build();

  useEffect(() => {
    console.log('init***');
    CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting).catch(() => {
      return null;
    });

    const getPermissions = async () => {
      if (Platform.OS === 'android') {
        let granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          ]);
        }
      }
    };
    getPermissions();
  }, []);

  const performTaskConsuming = async () => {
    return Promise.all([getUserData()]);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.gray} />
      {loading ? (
        <Image
          source={require('./src/assets/images/logo.png')}
          resizeMode="center"
          style={{width: 100, height: 100}}
        />
      ) : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <ThemeProvider theme={theme}>
                <AppNavigator />
              </ThemeProvider>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      )}
    </SafeAreaProvider>
  );
};

export default App;
