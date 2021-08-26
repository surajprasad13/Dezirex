import React from 'react';
import {Image, ScrollView} from 'react-native';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Title} from '../../components';
import {theme} from '../../constants';

const {width} = Dimensions.get('window');

const Free = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <ScrollView>
        <Title first="Free Package" third="Dezirex Diamond" />
        <View
          style={{
            flex: 1,
            //height: 200,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Image
            source={require('../../assets/images/package.png')}
            resizeMode="contain"
          />
          <View style={{margin: 30}}>
            <Text style={{fontSize: 20}}>Enjoy free package</Text>
            <Text style={{fontSize: 20}}>Dezirex Diamond</Text>
          </View>
          <Button
            title="Add free"
            ViewComponent={LinearGradient}
            containerStyle={{width: width * 0.85, margin: 40}}
            buttonStyle={{borderRadius: 10, padding: 15}}
            linearGradientProps={{
              colors: [`${theme.colors.primary}`, `${theme.colors.secondary}`],
              start: {x: 0, y: 0},
              end: {x: 1, y: 1},
            }}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{color: 'gray', margin: 20}}>
            Your subscription will auto renew after year
          </Text>
          <NeuView
            width={width * 0.75}
            height={width * 0.7}
            style={{margin: 10}}
            containerStyle={{justifyContent: 'space-between'}}
            borderRadius={theme.sizes.radius}
            color={theme.colors.gray}>
            <Button
              title="Starter  99/-"
              containerStyle={{margin: 20}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [
                  `${theme.colors.primary}`,
                  `${theme.colors.secondary}`,
                ],
                start: {x: 0, y: 0},
                end: {x: 1, y: 1},
              }}
              buttonStyle={{borderRadius: 10, width: 180, padding: 15}}
            />
            <Text>Monthly Package</Text>
            <Text>Add free package</Text>
            <Text>Boost in Month - 3</Text>
            <Text>Super like in Month - 10</Text>
            <Button title="Buy Now" type="clear" />
          </NeuView>
          <NeuView
            width={width * 0.75}
            height={width * 0.65}
            style={{margin: 10}}
            containerStyle={{justifyContent: 'space-between'}}
            borderRadius={theme.sizes.radius}
            color={theme.colors.gray}>
            <Button
              title="Basic  399/-"
              containerStyle={{margin: 20}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [
                  `${theme.colors.primary}`,
                  `${theme.colors.secondary}`,
                ],
                start: {x: 0, y: 0},
                end: {x: 1, y: 1},
              }}
              buttonStyle={{borderRadius: 10, width: 180, padding: 15}}
            />
            <Text>6 Months</Text>
            <Text>Boost in Month - 4</Text>
            <Text>Super like in Month - 15</Text>
            <Button title="Buy Now" type="clear" />
          </NeuView>
          <NeuView
            width={width * 0.75}
            height={width * 0.65}
            style={{margin: 10}}
            containerStyle={{justifyContent: 'space-between'}}
            borderRadius={theme.sizes.radius}
            color={theme.colors.gray}>
            <Button
              title="Pro  650/-"
              containerStyle={{margin: 20}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [
                  `${theme.colors.primary}`,
                  `${theme.colors.secondary}`,
                ],
                start: {x: 0, y: 0},
                end: {x: 1, y: 1},
              }}
              buttonStyle={{borderRadius: 10, width: 180, padding: 15}}
            />
            <Text>1 Year Package</Text>
            <Text>Boost in Month - 6</Text>
            <Text>Super like in Month - 20</Text>
            <Button title="Buy Now" type="clear" />
          </NeuView>
          <NeuView
            width={width * 0.75}
            height={width * 0.5}
            style={{margin: 10}}
            containerStyle={{justifyContent: 'space-between'}}
            borderRadius={theme.sizes.radius}
            color={theme.colors.gray}>
            <Button
              title="Super like  199/-"
              containerStyle={{margin: 20}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [
                  `${theme.colors.primary}`,
                  `${theme.colors.secondary}`,
                ],
                start: {x: 0, y: 0},
                end: {x: 1, y: 1},
              }}
              buttonStyle={{borderRadius: 10, width: 180, padding: 15}}
            />
            <Text>Super like buy - 50</Text>
            <Button title="Buy Now" type="clear" />
          </NeuView>
          <NeuView
            width={width * 0.75}
            height={width * 0.5}
            style={{margin: 10}}
            containerStyle={{justifyContent: 'space-between'}}
            borderRadius={theme.sizes.radius}
            color={theme.colors.gray}>
            <Button
              title="Super like  299/-"
              containerStyle={{margin: 20}}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: [
                  `${theme.colors.primary}`,
                  `${theme.colors.secondary}`,
                ],
                start: {x: 0, y: 0},
                end: {x: 1, y: 1},
              }}
              buttonStyle={{borderRadius: 10, width: 180, padding: 15}}
            />
            <Text>Super like Buy - 100</Text>
            <Button title="Buy Now" type="clear" />
          </NeuView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.gray,
  },
});

export default Free;
