import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {theme} from '../constants';

import {BottomTabBar} from '@react-navigation/bottom-tabs';

function Bottom({state, descriptors, navigation}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach((eventListener) =>
            eventListener.remove(),
          );
      }
    };
  }, []);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (!visible) return null;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const IconNames = [
          'heart',
          'circle',
          'chatbox-ellipses-outline',
          'user',
        ];
        const IconTypes = ['antdesign', 'fontawesome5', 'ionicon', 'entypo'];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (index === 0) {
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, left: 10}}>
              <NeuView
                height={50}
                width={50}
                color={theme.colors.gray}
                borderRadius={100}>
                <Image
                  source={require('../assets/images/logo.png')}
                  style={[
                    styles.icon,
                    {width: 50, height: 50},
                    {borderColor: isFocused ? theme.colors.primary : 'white'},
                  ]}
                />
              </NeuView>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, left: 10, backgroundColor: theme.colors.gray}}>
            <NeuView
              height={50}
              width={50}
              color={theme.colors.gray}
              borderRadius={100}>
              <Icon
                name={IconNames[index]}
                type={IconTypes[index]}
                size={30}
                color={isFocused ? theme.colors.primary : 'gray'}
                style={[
                  styles.icon,
                  {borderColor: isFocused ? theme.colors.primary : 'white'},
                ]}
              />
            </NeuView>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: theme.colors.gray,
  },
  icon: {
    backgroundColor: 'white',
    borderWidth: 4,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 50,
  },
});

export default Bottom;
