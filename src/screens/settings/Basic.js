import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NeuView} from 'react-native-neu-element';
import {Title, HeartLoading} from '../../components';
import {theme} from '../../constants';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateTimePicker from '@react-native-community/datetimepicker';

//redux
import {
  postPhone,
  postLocation,
  postEducation,
  postBirthday,
  postCity,
  postProfession,
} from '../../redux/actions/updateProfileAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

const initialValues = {
  phone: '',
  city: '',
  school: '',
  profession: '',
  link: '',
  date: '',
  note: '',
};

const Basic = ({
  loading,
  postPhone,
  postCity,
  postBirthday,
  postEducation,
  postProfession,
  userdetail,
  token,
}) => {
  const [multiSliderValue, setMultiSliderValue] = useState([18, 33]);
  const [scrollEnabled, setScrollenabled] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showdate, setShowdate] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');

    setDate(currentDate);
    setShowdate(true);
  };

  const enableScroll = () => setScrollenabled(true);
  const disableScroll = () => setScrollenabled(false);

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  if (loading) {
    return <HeartLoading />;
  }

  const {phone, city, school, profession, birthday} = userdetail;

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Title first="Basic Information" />

        <View>
          <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
            <Text style={[styles.text, {color: theme.colors.secondary}]}>
              Phone
            </Text>
            <Text style={[styles.text, {left: 10}]}>Number</Text>
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
                placeholder={phone}
                style={{width: 100}}
                onChangeText={(e) => handleInputChange('phone', e)}
              />
              <Icon
                name="pencil"
                type="evilicon"
                size={35}
                color={theme.colors.secondary}
                style={{margin: 10}}
                onPress={() => postPhone(values.phone, token)}
              />
            </NeuView>
          </View>
          <Text style={{textAlign: 'center', padding: 10, margin: 10}}>
            Verify a phone number to help secure your account
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
            <Text style={[styles.text, {color: theme.colors.secondary}]}>
              Location
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
                placeholder={city ? city : 'Your current location'}
                style={{width: 150}}
                onChangeText={(e) => handleInputChange('city', e)}
              />
              <Icon
                name="pencil"
                type="evilicon"
                size={35}
                color={theme.colors.secondary}
                style={{margin: 10}}
                onPress={() => postCity(values.city, token)}
              />
            </NeuView>
          </View>
          <Text style={{textAlign: 'center', padding: 10, margin: 10}}>
            Verify a location to help secure your account
          </Text>
        </View>

        <View>
          <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
            <Text style={[styles.text, {color: theme.colors.secondary}]}>
              Education
            </Text>
            <Text style={[styles.text, {left: 10}]}>&</Text>
            <Text
              style={[styles.text, {color: theme.colors.secondary, left: 15}]}>
              Profession
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <NeuView
              height={50}
              width={width * 0.85}
              color={theme.colors.gray}
              containerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              borderRadius={12}>
              <View />
              <TextInput
                placeholder={school ? school : 'School'}
                style={{width: 200}}
                value={values.school}
                onChangeText={(e) => handleInputChange('school', e)}
              />
              <Icon
                name="pencil"
                type="evilicon"
                size={35}
                color={theme.colors.secondary}
                style={{margin: 10}}
                onPress={() => postEducation(values.school, token)}
              />
            </NeuView>
          </View>
          <View style={{alignItems: 'center', margin: 10}}>
            <NeuView
              height={50}
              width={width * 0.85}
              color={theme.colors.gray}
              borderRadius={12}
              containerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View />
              <TextInput
                placeholder={profession ? profession : 'Profession'}
                value={values.profession}
                style={{width: 200}}
                onChangeText={(e) => handleInputChange('profession', e)}
              />
              <Icon
                name="pencil"
                type="evilicon"
                size={35}
                color={theme.colors.secondary}
                style={{margin: 10}}
                onPress={() => postProfession(values.profession, token)}
              />
            </NeuView>
          </View>
          <Text style={{textAlign: 'center', padding: 10, margin: 10}}>
            Verify a school name and profession to help secure your account
          </Text>
        </View>

        <View>
          <View
            style={{flexDirection: 'row', marginBottom: 20, left: 15, flex: 1}}>
            <Text style={[styles.text, {color: theme.colors.secondary}]}>
              Age
            </Text>
            <Text style={[styles.text, {left: 10}]}>Range</Text>
            <Text style={{textAlign: 'right', right: 10, position: 'absolute'}}>
              18-100
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
          <Text style={{textAlign: 'center', padding: 10, margin: 10}}>
            Dezirex uses these preferences to suggest matches
          </Text>
        </View>

        <View>
          <View style={{flexDirection: 'row', marginBottom: 20, left: 15}}>
            <Text style={[styles.text, {color: theme.colors.secondary}]}>
              My
            </Text>
            <Text style={[styles.text, {left: 10}]}>Birthday is</Text>
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
              {showdate ? (
                <TextInput
                  placeholder={birthday ? birthday : 'Birthday'}
                  value={date.toLocaleDateString()}
                  onFocus={() => setShow(!show)}
                />
              ) : (
                <TextInput
                  placeholder={birthday ? birthday : 'Birthday'}
                  //value={date.toLocaleDateString()}
                  onFocus={() => setShow(!show)}
                />
              )}
              <Icon
                name="pencil"
                type="evilicon"
                size={35}
                color={theme.colors.secondary}
                style={{margin: 10}}
                onPress={() => postBirthday(date.toLocaleDateString(), token)}
              />
            </NeuView>
          </View>
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    padding: 10,
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

const mapDispatchToProps = {
  postBirthday,
  postEducation,
  postLocation,
  postPhone,
  postCity,
  postProfession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
