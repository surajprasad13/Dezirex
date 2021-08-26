import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Dimensions,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {NeuView} from 'react-native-neu-element';

//components
import {ButtonComponent, Title, SubmitButton} from '../../components';
import {theme} from '../../constants';

//redux
import {fetchLifeStyle, postLifestyle} from '../../redux/actions/profileAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

class Lifestyle extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      dataSource: [],
      isEnabled: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({loading: true});
    fetch('https://dzirex.herokuapp.com/api/detail/lifestyle')
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

  onValueChange = (state) => {
    this.setState({isEnabled: !this.state.isEnabled});
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

  renderItem = (data) => <NewCard data={data} selectItem={this.selectItem} />;
  render() {
    const {navigation, token, loading, postLifestyle} = this.props;

    const selectData = this.state.dataSource
      .filter((item) => item.isSelect)
      .map((item, index) => {
        return item.name;
      });

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Title first="Lifestyle" />
          <View style={{alignItems: 'center'}}>
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
            onPress={() => postLifestyle(navigation, selectData, token)}
          />
        </View>
      </ScrollView>
    );
  }
}
const NewCard = ({data, selectItem}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <NeuView
      width={width - 30}
      height={50}
      borderRadius={10}
      style={{margin: 10}}
      color={theme.colors.gray}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{flex: 1}} />
        <View style={{flex: 1}}>
          <Text>{data.item.name}</Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? theme.colors.primary : theme.colors.secondary}
          onValueChange={() => [selectItem(data), setIsEnabled(!isEnabled)]}
          value={isEnabled}
        />
      </View>
    </NeuView>
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
  lifestyle: state.profile.lifestyle,
  userid: state.user.userid,
  loading: state.profile.loading,
  token: state.user.token,
});

export default connect(mapStateToProps, {postLifestyle})(Lifestyle);
