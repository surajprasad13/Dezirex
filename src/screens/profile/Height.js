import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import {Picker} from '@react-native-picker/picker';

//components
import {Title, SubmitButton} from '../../components';
import {theme} from '../../constants';

//redux
import {connect} from 'react-redux';
import {postHeight} from '../../redux/actions/profileAction';

const {width} = Dimensions.get('window');

const Height = ({navigation, postHeight, loading, userid, token}) => {
  const [value, setValue] = useState('');
  const [height, setHeight] = useState('');
  const [marital, setMarital] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 30}}>My Height</Text>
      <Title first="&" third="Marital Status" />

      <View style={{marginTop: 20, alignItems: 'center'}}>
        <NeuView
          color={theme.colors.gray}
          width={width * 0.85}
          height={50}
          borderRadius={theme.sizes.radius}>
          <Picker
            selectedValue={height}
            onValueChange={(value) => setHeight(value)}
            style={{height: 50, width: '100%'}}
            mode="dialog">
            <Picker.Item label="Height" value="Height" />
            <Picker.Item label="100" value={100} />
            <Picker.Item label="120" value={120} />
            <Picker.Item label="150" value={150} />
          </Picker>
        </NeuView>
        <NeuView
          color={theme.colors.gray}
          width={width * 0.85}
          style={{marginTop: 10}}
          height={50}
          borderRadius={theme.sizes.radius}>
          <Picker
            selectedValue={marital}
            onValueChange={(value) => setMarital(value)}
            style={{height: 50, width: '100%'}}
            mode="dialog">
            <Picker.Item label="Marrital Status" value="Marrital Status" />
            <Picker.Item label="Married" value="Married" />
            <Picker.Item label="Unmarried" value="Unmarried" />
            <Picker.Item label="Divorced" value="Divorced" />
          </Picker>
        </NeuView>
      </View>
      <SubmitButton
        title="Next"
        loading={loading}
        onPress={() => postHeight(navigation, height, marital, token)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 20,
    fontSize: 25,
    color: theme.colors.secondary,
  },
});

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
  userid: state.user.userid,
  token: state.user.token,
});

export default connect(mapStateToProps, {postHeight})(Height);
