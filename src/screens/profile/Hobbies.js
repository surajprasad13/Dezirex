import React, {Component, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//components
import {
  ButtonComponent,
  ClearButton,
  SubmitButton,
  Title,
} from '../../components';
import {theme} from '../../constants';

//redux
import {postHobbies} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

class Hobbies extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({loading: true});
    fetch('https://dzirex.herokuapp.com/api/detail/hobbies')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson = responseJson.map((item) => {
          item.isSelect = false;
          item.selectedClass = styles.list;
          return item;
        });
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        this.setState({loading: false});
      });
  };

  componentWillUnmount() {
    this.setState({loading: false});
  }

  selectItem = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;
    const index = this.state.dataSource.findIndex(
      (item) => data.item._id === item.id,
    );
    this.state.dataSource[index] = data.item;

    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  renderItem = (data) => (
    <ClearButton
      title={data.item.name}
      onPress={() => this.selectItem(data)}
      textColor={data.item.isSelect ? 'red' : 'black'}
    />
  );

  render() {
    const {loading, userid, token, postHobbies, navigation} = this.props;

    const selectData = this.state.dataSource
      .filter((item) => item.isSelect)
      .map((item, index) => {
        return item.name;
      });

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{marginTop: 20}}>
            <Title first="My Hobbies" />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                padding: 10,
                margin: 10,
              }}>
              Let everyone know what you're passionate about by adding it to
              your profile
            </Text>
          </View>
          {this.state.loading && (
            <ActivityIndicator size="large" color={theme.colors.primary} />
          )}
          <FlatList
            data={this.state.dataSource}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item._id.toString()}
            extraData={this.state}
          />
          <SubmitButton
            title="Next"
            loading={loading}
            onPress={() => postHobbies(navigation, selectData, token)}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

const mapStateToProps = (state) => ({
  hobbies: state.profile.hobbies,
  loading: state.profile.loading,
  userid: state.user.userid,
  token: state.user.token,
});

export default connect(mapStateToProps, {postHobbies})(Hobbies);
