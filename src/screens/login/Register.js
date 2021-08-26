import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {NeuView} from 'react-native-neu-element';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

//components
import {ImageComponent, Title} from '../../components';
import {theme} from '../../constants';
import {ScrollView} from 'react-native';

//redux
import {userValue, loginUser} from '../../redux/actions/authAction';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');

const Register = ({navigation, userValue, loginUser, number, loading}) => {
  const insets = useSafeAreaInsets();

  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (number.length < 10) {
      setError(true);
    } else {
      loginUser({number, navigation});
    }
  };

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={[styles.container, {height: height - insets.top}]}>
      <ImageComponent source={require('../../assets/images/phone.png')} />
      <Title first="Enter" second="Phone" third="Number" />
      <View>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
          }}>
          <NeuView
            width={70}
            height={50}
            borderRadius={10}
            color={theme.colors.gray}>
            <Text style={{color: '#db4437'}}>+91</Text>
          </NeuView>
          <NeuView
            width={width / 1.5}
            height={50}
            borderRadius={10}
            style={{left: 10}}
            color={theme.colors.gray}>
            <TextInput
              placeholder={error ? 'Please enter phone' : 'Enter Phone Number'}
              placeholderTextColor={error ? theme.colors.primary : 'gray'}
              autoFocus={true}
              value={number}
              onChangeText={(number) =>
                userValue({prop: 'number', value: number})
              }
              keyboardType="number-pad"
              maxLength={10}
              style={{fontSize: 20}}
            />
          </NeuView>
        </View>
        <Button
          title="Submit"
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#ea698b', '#ea7a7f'],
            start: {x: 0, y: 0},
            end: {x: 1, y: 0},
          }}
          buttonStyle={{margin: 15, padding: 15, borderRadius: 15}}
          onPress={onSubmit}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.gray,
  },
  text: {
    fontSize: 25,
  },
  imageContainer: {
    borderColor: 'grey',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120 / 2,
    borderWidth: 0.5,
    borderEndColor: 'red',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  confirm: state.auth.confirm,
  loading: state.auth.loading,
  number: state.auth.number,
});

export default connect(mapStateToProps, {userValue, loginUser})(Register);
