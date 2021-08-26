import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {ButtonComponent, Title} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../constants';

import {NeuView} from 'react-native-neu-element';

const Terms = () => {
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>
            Terms
          </Text>
          <Text style={[styles.text]}>&</Text>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>
            Conditions
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Text style={{textAlign: 'center', color: theme.colors.secondary}}>
            Dezirex
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Text style={{textAlign: 'center', color: theme.colors.secondary}}>
            Dezirex
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Text style={{textAlign: 'center', color: theme.colors.secondary}}>
            Dezirex
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.sizes.base * 3,
          }}>
          <NeuView
            width={30}
            height={35}
            borderRadius={5}
            color={theme.colors.gray}
            style={{marginLeft: 15}}>
            <CheckBox
              center
              checked={checked}
              onPress={() => setChecked(!checked)}
              containerStyle={{
                marginLeft: 15,
              }}
            />
          </NeuView>
          <Text style={{marginLeft: 10}}>Agree on this</Text>
          <Text style={{color: theme.colors.secondary, marginLeft: 5}}>
            Terms & Conditions
          </Text>
        </View>
        <ButtonComponent title="Submit" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    margin: 5,
  },
  paragraph: {
    textAlign: 'center',
  },
  textContainer: {
    padding: 10,
    margin: 10,
  },
});

export default Terms;
