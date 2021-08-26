import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {SubmitButton, Title} from '../../components';
import {theme} from '../../constants';

import {Picker} from '@react-native-picker/picker';
import {NeuView} from 'react-native-neu-element';

//redux
import {postEducation} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

const Education = ({navigation, loading, userid, token, postEducation}) => {
  const [school, setSchool] = useState('');
  const [profession, setProfession] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <View style={{marginBottom: 50}}>
          <Text style={{textAlign: 'center', fontSize: 30}}>Education</Text>
          <Title first="&" third="Profession" />
        </View>

        <View style={{marginTop: 20, alignItems: 'center'}}>
          <NeuView
            color={theme.colors.gray}
            width={width * 0.85}
            height={50}
            borderRadius={theme.sizes.radius}>
            <Picker
              selectedValue={school}
              onValueChange={(value) => setSchool(value)}
              style={{height: 50, width: '100%'}}
              mode="dialog">
              <Picker.Item label="School Name" value="School Name" />
              <Picker.Item
                label="Delhi public school"
                value="Delhi public school"
              />
              <Picker.Item
                label="Noida public school"
                value="Noida public school"
              />
              <Picker.Item label="Standford" value="Standford" />
            </Picker>
          </NeuView>
          <NeuView
            color={theme.colors.gray}
            width={width * 0.85}
            style={{marginTop: 10}}
            height={50}
            borderRadius={theme.sizes.radius}>
            <Picker
              selectedValue={profession}
              onValueChange={(value) => setProfession(value)}
              style={{height: 50, width: '100%'}}
              mode="dialog">
              <Picker.Item label="Profession" value="Profession" />
              <Picker.Item label="Student" value="Student" />
              <Picker.Item label="Salaried" value="Salaried" />
              <Picker.Item label="Self Employed" value="Self Employed" />
            </Picker>
          </NeuView>
        </View>
        <SubmitButton
          title="Next"
          loading={loading}
          onPress={() => postEducation(navigation, school, profession, token)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.gray,
  },
});

const mapStateToProps = (state) => ({
  userid: state.user.userid,
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {postEducation})(Education);
