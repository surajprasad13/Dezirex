import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {NeuView} from 'react-native-neu-element';
import {connect} from 'react-redux';

import {Title, HeartLoading} from '../../components';
import {theme} from '../../constants';

import {
  postInterest,
  postReligion,
  postGender,
} from '../../redux/actions/updateProfileAction';

const {width} = Dimensions.get('window');

const initialValues = {
  interest: '',
  religion: '',
  gender: '',
  profession: '',
  sexual: '',
};

const Religion = ({
  loading,
  userdetail,
  postInterest,
  postGender,
  postReligion,
  token,
}) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  if (loading) {
    return <HeartLoading />;
  }

  const {gender, religion, birthday, interest} = userdetail;
  return (
    <View style={styles.container}>
      <Title first="Religion and about me" />
      <View>
        <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>My</Text>
          <Text style={[styles.text, {left: 10}]}>Sexual orientation is</Text>
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
              placeholder={interest[0]}
              onChangeText={(e) => handleInputChange('interest', e)}
            />
            <Icon
              name="pencil"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
              onPress={() => postInterest(values.interest, token)}
            />
          </NeuView>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>
            Religion
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
              placeholder={religion ? religion : 'Religion'}
              value={values.religion}
              onChangeText={(e) => handleInputChange('religion', e)}
            />
            <Icon
              name="pencil"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
              onPress={() => postReligion(values.religion, token)}
            />
          </NeuView>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>
            Who
          </Text>
          <Text style={[styles.text, {left: 10}]}>You are</Text>
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
              placeholder={gender}
              value={values.gender}
              onChangeText={(e) => handleInputChange('gender', e)}
            />
            <Icon
              name="pencil"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
              onPress={() => postGender(values.gender, token)}
            />
          </NeuView>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
          <Text style={[styles.text, {color: theme.colors.secondary}]}>My</Text>
          <Text style={[styles.text, {left: 10}]}>Interest</Text>
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
              placeholder="Everyone"
              value={values.interest}
              onChangeText={(e) => handleInputChange('interest', e)}
            />
            <Icon
              name="chevron-right"
              type="evilicon"
              size={35}
              color={theme.colors.secondary}
              style={{margin: 10}}
              onPress={() => postInterest(values.interest, token)}
            />
          </NeuView>
        </View>
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
  userid: state.user.userid,
  userdetail: state.profile.userdetail,
  token: state.user.token,
});

export default connect(mapStateToProps, {
  postInterest,
  postGender,
  postReligion,
})(Religion);
