import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Header, Icon, Overlay} from 'react-native-elements';
import {theme} from '../constants';

import {NeuView} from 'react-native-neu-element';
import Filter from './Filter';

const leftComponent = () => (
  <View style={{width: 200}}>
    <Text style={{fontSize: 25}}>Discover</Text>
  </View>
);

const RightComponent = () => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <NeuView
      height={40}
      width={40}
      color={theme.colors.gray}
      borderRadius={100}>
      <Icon
        name="filter"
        type="ionicon"
        color={theme.colors.primary}
        onPress={toggleOverlay}
        style={{
          borderColor: theme.colors.gray,
          padding: 7,
          width: 40,
          height: 40,
        }}
      />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        fullScreen
        overlayStyle={{backgroundColor: theme.colors.gray}}>
        <Filter onPress={toggleOverlay} />
      </Overlay>
    </NeuView>
  );
};

const HeaderComponent = () => {
  return (
    <Header
      backgroundColor={theme.colors.gray}
      leftComponent={leftComponent}
      rightComponent={<RightComponent />}
      containerStyle={{backgroundColor: theme.colors.gray}}
    />
  );
};

export default HeaderComponent;
