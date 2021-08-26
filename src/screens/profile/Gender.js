import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ButtonComponent, ClearButton, Title} from '../../components';
import {theme} from '../../constants';

//redux
import {fetchSex} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

const Gender = ({navigation, fetchSex, sex, token}) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(false);

  useEffect(() => {
    fetchSex();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Title first="My" second="Sexual" third="Orientation is" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}>
            <Text style={{textAlign: 'center'}}>Select up to</Text>
            <Text style={{color: theme.colors.primary, left: 5}}>2</Text>
          </View>
          <View>
            {sex.map(({name}, index) => (
              <MyButton name={name} index={index} />
            ))}
          </View>
          <ButtonComponent
            title="Next"
            navigation={navigation}
            routeName="Height"
          />
          <View style={[styles.center, {flexDirection: 'row'}]}>
            <NeuView
              width={30}
              height={30}
              color={theme.colors.gray}
              borderRadius={10}>
              <CheckBox
                checkedIcon="dot-circle-o"
                checked={checked}
                onPress={() => setChecked(!checked)}
                containerStyle={{width: 40, height: 45}}
              />
            </NeuView>
            <Text style={{left: 10}}> Show my gender on </Text>
            <Text style={{color: theme.colors.primary, left: 10}}>
              my Profile
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  sex: state.profile.sex,
  token: state.user.token,
});

const MyButton = ({name, index}) => {
  const [value, setValue] = useState(false);
  return (
    <ClearButton
      title={name}
      key={index}
      textColor={value ? theme.colors.primary : '#000'}
      onPress={() => setValue(!value)}
    />
  );
};

export default connect(mapStateToProps, {fetchSex})(Gender);
