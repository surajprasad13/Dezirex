import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Switch,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import Title from './Title';
import {theme} from '../constants';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import ClearButton from './ClearButton';
const {width} = Dimensions.get('window');

const Filter = ({onPress}) => {
  const [multiSliderValue, setMultiSliderValue] = useState([18, 33]);
  const [scrollEnabled, setScrollenabled] = useState(false);
  const enableScroll = () => setScrollenabled(true);
  const disableScroll = () => setScrollenabled(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title first="Filter" />
        <View style={styles.heading}>
          <Text>Show me</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
          }}>
          <Button
            title="Guys"
            type="outline"
            buttonStyle={{width: width * 0.25}}
          />
          <Button
            title="Girls"
            type="outline"
            buttonStyle={{width: width * 0.3}}
          />
          <Button title="Both" buttonStyle={{width: width * 0.3}} />
        </View>
        <View style={styles.heading}>
          <Text>Location</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <NeuView
            width={width * 0.85}
            height={50}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            color={theme.colors.gray}
            borderRadius={12}>
            <Text>Current Location(San Fransisco)</Text>
            <Icon name="navigation" type="feather" />
          </NeuView>
        </View>
        <View style={styles.heading}>
          <Text>Distance</Text>
          <Text>300 km</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <NeuView
            height={50}
            width={width * 0.85}
            color={theme.colors.gray}
            borderRadius={12}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ScrollView
              scrollEnabled={scrollEnabled}
              style={{flex: 1}}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MultiSlider
                selectedStyle={{backgroundColor: theme.colors.secondary}}
                values={[multiSliderValue[0], multiSliderValue[1]]}
                min={18}
                max={33}
                step={1}
                allowOverlap={false}
                snapped
                minMarkerOverlapDistance={40}
                onValuesChangeStart={disableScroll}
                onValuesChangeFinish={enableScroll}
                customMarker={() => (
                  <Icon
                    name="heart"
                    type="antdesign"
                    color={theme.colors.secondary}
                  />
                )}
              />
            </ScrollView>
          </NeuView>
        </View>

        <View style={styles.heading}>
          <Text>Age Range</Text>
          <Text>18-100</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <NeuView
            height={50}
            width={width * 0.85}
            color={theme.colors.gray}
            borderRadius={12}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ScrollView
              scrollEnabled={scrollEnabled}
              style={{flex: 1}}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MultiSlider
                selectedStyle={{backgroundColor: theme.colors.secondary}}
                values={[multiSliderValue[0], multiSliderValue[1]]}
                min={18}
                max={33}
                step={1}
                allowOverlap={false}
                snapped
                minMarkerOverlapDistance={40}
                onValuesChangeStart={disableScroll}
                onValuesChangeFinish={enableScroll}
                customMarker={() => (
                  <Icon
                    name="heart"
                    type="antdesign"
                    color={theme.colors.secondary}
                  />
                )}
              />
            </ScrollView>
          </NeuView>
        </View>
        <View style={styles.heading}>
          <Text>Religion</Text>
        </View>
        <View>
          <ClearButton title="Hindus" />
          <ClearButton title="Buddhists" />
          <ClearButton title="Islam" />
          <ClearButton title="Judaism" />
          <ClearButton title="Jainism" />
          <ClearButton title="Sikshs" />
          <ClearButton title="American Traditional Religion" />
          <ClearButton title="Chinese Traditional Religion" />
        </View>
        <View style={styles.heading}>
          <Text>Marital Status</Text>
        </View>
        <View>
          <ClearButton title="Married" />
          <ClearButton title="Unmarried" />
          <ClearButton title="Divorced" />
        </View>
        <View style={{alignItems: 'center'}}>
          <NeuView
            width={width * 0.85}
            height={50}
            borderRadius={10}
            style={{margin: 10}}
            color={theme.colors.gray}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View style={{flex: 1}} />
              <View style={{flex: 1}}>
                <Text>Lock your profile</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={
                  isEnabled ? theme.colors.primary : theme.colors.secondary
                }
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </NeuView>
        </View>
        <Button
          title="Submit"
          type="outline"
          containerStyle={{
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPress}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  heading: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});

export default Filter;
