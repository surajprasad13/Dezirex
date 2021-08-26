import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

//components
import {ClearButton, Title, SubmitButton} from '../../components';
import {theme} from '../../constants';

//redux
import {fetchReligion, postReligion} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

const Religion = ({
  navigation,
  fetchReligion,
  postReligion,
  religion,
  userid,
  loading,
  token,
}) => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    fetchReligion();
  }, []);
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <View style={styles.container}>
        <View style={{left: 10}}>
          <Title first="Religion" />
        </View>
        {}
        {religion.map((item, index) => {
          const color = item.name === selected ? 'red' : 'black';
          return (
            <ClearButton
              title={item.name}
              key={index}
              onPress={() => setSelected(item.name)}
              textColor={color}
            />
          );
        })}

        <SubmitButton
          title="Next"
          loading={loading}
          onPress={() => postReligion(navigation, selected, token)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    marginTop: 30,
  },
});

const mapStateToProps = (state) => ({
  religion: state.profile.religion,
  userid: state.user.userid,
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {fetchReligion, postReligion})(
  Religion,
);
