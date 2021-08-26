import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent} from '../../components';
import {theme} from '../../constants';

const Success = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.conatainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="star"
            type="feather"
            color={theme.colors.secondary}
            size={theme.sizes.base * 2}
          />
          <Icon
            name="star"
            type="feather"
            color={theme.colors.secondary}
            size={theme.sizes.base * 2}
            containerStyle={{margin: 20, marginTop: -20}}
          />
          <Icon
            name="star"
            type="feather"
            color={theme.colors.secondary}
            size={theme.sizes.base * 2}
          />
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text style={styles.text}>Congratulations</Text>
          <Text style={styles.text}>you got the subscription of </Text>
          <Text style={styles.text}>Dezirex</Text>
        </View>
      </View>
      <ButtonComponent
        title="Back to home"
        navigation={navigation}
        routeName="Settings"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: theme.colors.secondary,
  },
});

export default Success;
