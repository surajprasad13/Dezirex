import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonComponent, Title} from '../../components';
import {theme} from '../../constants';

const {width} = Dimensions.get('window');

const CardDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Title first="Payment" second="Account" />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Title first="Add" second="Card Details" />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <NeuView
              width={width * 0.85}
              height={50}
              color={theme.colors.gray}
              borderRadius={12}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: width * 0.85,
                }}>
                <TextInput placeholder="Card Number" />
                <TextInput placeholder="CVV" />
                <TextInput placeholder="Expiry Date" />
              </View>
            </NeuView>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('CardEdit')}>
            <Text style={{textAlign: 'center', color: theme.colors.secondary}}>
              Change Card Details ?
            </Text>
          </TouchableOpacity>
          <ButtonComponent title="Save" navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

export default CardDetail;
