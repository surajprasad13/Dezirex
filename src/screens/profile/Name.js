import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NeuInput} from 'react-native-neu-element';
import {Title, SubmitButton} from '../../components';
import {theme} from '../../constants';

//redux
import {connect} from 'react-redux';
import {postName, profileValue} from '../../redux/actions/profileAction';

import {createNewUser} from '../../redux/actions/callAuthAction';
import {COMETCHAT_CONSTANTS} from '../../../CONSTS';

const Name = ({
  navigation,
  profileValue,
  postName,
  name,
  lastname,
  loading,
  token,
  createNewUser,
}) => {
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (!name || !lastname) {
      setError(!error);
    } else {
      createNewUser(`${name}`, COMETCHAT_CONSTANTS.AUTH_KEY);
      postName(navigation, name, lastname, token);
    }
  };

  return (
    <View style={styles.container}>
      <Title first="My" second="Name is" />
      <View style={{alignItems: 'center'}}>
        {error && (
          <Text style={{textAlign: 'center', color: theme.colors.primary}}>
            Please fill all field
          </Text>
        )}
        <NeuInput
          color={theme.colors.gray}
          placeholder="First Name"
          width={theme.sizes.input_width}
          height={theme.sizes.input_height}
          borderRadius={theme.sizes.radius}
          value={name}
          onChangeText={(text) => profileValue({prop: 'name', value: text})}
        />
        <NeuInput
          color={theme.colors.gray}
          placeholder="Last Name"
          width={theme.sizes.input_width}
          height={theme.sizes.input_height}
          borderRadius={theme.sizes.radius}
          style={{marginTop: 15}}
          value={lastname}
          onChangeText={(text) => profileValue({prop: 'lastname', value: text})}
        />
      </View>
      <SubmitButton title="Next" loading={loading} onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.gray,
  },
});

const mapStateToProps = (state) => ({
  name: state.profile.name,
  lastname: state.profile.lastname,
  userid: state.user.userid,
  token: state.user.token,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, {
  postName,
  profileValue,
  createNewUser,
})(Name);
