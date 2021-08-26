import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';

import {SubmitButton, Title, ClearButton} from '../../components';

//redux
import {connect} from 'react-redux';
import {postInterest} from '../../redux/actions/profileAction';
import {theme} from '../../constants';

class Interest extends Component {
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
    fetch('https://dzirex.herokuapp.com/api/detail/interest')
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
    const {loading, token, postInterest, navigation} = this.props;

    const selectData = this.state.dataSource
      .filter((item) => item.isSelect)
      .map((item, index) => {
        return item.name;
      });

    return (
      <View style={styles.container}>
        <Title first="My" second="Interest" />
        <View>
          {this.state.loading && (
            <ActivityIndicator size="large" color={theme.colors.primary} />
          )}
          <FlatList
            data={this.state.dataSource}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item._id.toString()}
            extraData={this.state}
          />
        </View>
        <SubmitButton
          title="Next"
          loading={loading}
          onPress={() => postInterest(navigation, selectData, token)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 5,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#192338',
    alignItems: 'center',
  },
  lightText: {
    color: '#f7f7f7',
    width: 200,
    paddingLeft: 15,
    fontSize: 12,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  selected: {
    color: '#FA7B5F',
  },
});

const mapStateToProps = (state) => ({
  userid: state.user.userid,
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {postInterest})(Interest);
