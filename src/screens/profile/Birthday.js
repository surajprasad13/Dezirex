import React, {useState} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  SubmitButton,
  ImageComponent,
  Title,
  ClearButton,
} from '../../components';
import {theme} from '../../constants';

//redux
import {connect} from 'react-redux';
import {postBirthday} from '../../redux/actions/profileAction';

const Birthday = ({navigation, postBirthday, loading, token}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onSubmit = () => {
    postBirthday(navigation, date.toLocaleDateString(), token);
  };

  return (
    <View style={styles.container}>
      <ImageComponent
        source={require('../../assets/images/cake.png')}
        style={{width: 130, height: 200, marginTop: -15}}
      />
      <Title first="My" second="Birthday" third="Is" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="calendar"
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
      <View>
        <ClearButton
          title={date.toLocaleDateString()}
          onPress={() => setShow(!show)}
        />

        <SubmitButton title="Next" loading={loading} onPress={onSubmit} />
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
});

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
  userid: state.user.userid,
  token: state.user.token,
});

export default connect(mapStateToProps, {postBirthday})(Birthday);
