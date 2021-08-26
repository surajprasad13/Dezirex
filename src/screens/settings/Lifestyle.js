import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

import {NeuView} from 'react-native-neu-element';

import {theme} from '../../constants';
import {Title, HeartLoading} from '../../components';

//redux
import {connect} from 'react-redux';
import {
  postLifestyle,
  postHobbies,
} from '../../redux/actions/updateProfileAction';

const {width} = Dimensions.get('window');

const initialValues = {
  lifestyle: '',
  hobbies: '',
};

const Lifestyle = ({
  loading,
  token,
  userdetail,
  postHobbies,
  postLifestyle,
}) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const {lifestyle, hobbies} = userdetail;

  if (loading) {
    return <HeartLoading />;
  }

  return (
    <View style={styles.container}>
      <Title first="Lifestyle & hobbies" />
      <View>
        <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>
            Lifestyle
          </Text>
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
            <View />
            <TextInput
              placeholder={lifestyle[0]}
              value={values.lifestyle}
              onChangeText={(e) => handleInputChange('lifestyle', e)}
            />
            <Icon
              name="pencil"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
              onPress={() => postLifestyle(values.lifestyle, token)}
            />
          </NeuView>
        </View>
      </View>

      <View style={{top: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>My</Text>
          <Text style={[styles.text, {left: 10}]}>hobbies</Text>
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
            <View />
            <TextInput
              placeholder={hobbies[0] ? hobbies[0] : 'Hobbies'}
              value={values.hobbies}
              onChangeText={(e) => handleInputChange('hobbies', e)}
            />
            <Icon
              name="pencil"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
              onPress={() => postHobbies(values.hobbies, token)}
            />
          </NeuView>
        </View>
        {/* <View style={{alignItems: 'center', top: 15}}>
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
            <View />
            <TextInput placeholder="Vegetarian" />
            <Icon
              name="pencil"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
            />
          </NeuView>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.gray,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
  token: state.user.token,
  userdetail: state.profile.userdetail,
});

export default connect(mapStateToProps, {postHobbies, postLifestyle})(
  Lifestyle,
);
