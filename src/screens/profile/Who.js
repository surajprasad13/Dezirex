import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {SubmitButton, ClearButton, Title} from '../../components';

import {theme} from '../../constants';
import {NeuView} from 'react-native-neu-element';

//redux
import {connect} from 'react-redux';
import {postGender} from '../../redux/actions/profileAction';

const Who = ({loading, userid, postGender, navigation, token}) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const [man, setMan] = useState(false);
  const [woman, setWoman] = useState(false);
  const [other, setOther] = useState(false);

  const onSubmit = () => {
    postGender(navigation, value, token);
  };
  return (
    <View style={styles.container}>
      <Title first="Who" second="You" third="Are ??" />

      <View>
        <ClearButton
          title="Men"
          textColor={man ? theme.colors.primary : '#000'}
          onPress={() => [
            setMan(!man),
            setWoman(false),
            setOther(false),
            setValue('Man'),
          ]}
        />
        <ClearButton
          title="Women"
          textColor={woman ? theme.colors.primary : '#000'}
          onPress={() => [
            setWoman(!woman),
            setMan(false),
            setOther(false),
            setValue('Woman'),
          ]}
        />
        <ClearButton
          title="More"
          textColor={other ? theme.colors.primary : '#000'}
          onPress={() => [
            setOther(!other),
            setWoman(false),
            setMan(false),
            setValue('Other'),
          ]}
        />
        <SubmitButton title="Next" loading={loading} onPress={onSubmit} />
      </View>
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
        <Text style={{color: theme.colors.primary, left: 10}}> my Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.gray,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
  gender: state.profile.gender,
  userid: state.user.userid,
  token: state.user.token,
});

export default connect(mapStateToProps, {postGender})(Who);
