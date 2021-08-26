import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Title} from '../../components';
import {theme} from '../../constants';

const {width} = Dimensions.get('window');

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.conatainer}>
        <Title first="Payment" second="Account" />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('CardDetail')}>
              <NeuView
                width={width * 0.85}
                height={50}
                color={theme.colors.gray}
                borderRadius={12}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width * 0.85,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text>Manage Payment Account</Text>
                  <Icon
                    name="chevron-right"
                    type="evilicon"
                    color={theme.colors.secondary}
                  />
                </View>
              </NeuView>
            </TouchableOpacity>
          </View>
          <ButtonComponent
            title="Cancel"
            navigation={navigation}
            routeName="Profile"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

export default Payment;
