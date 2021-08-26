import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../constants';
import {Icon, Card} from 'react-native-elements';

//redux
import {connect} from 'react-redux';
import exampleImage from '../../assets/images/user3.png';

const {width, height} = Dimensions.get('window');

const windowHeight = Dimensions.get('window').height;

const defaultImage = Image.resolveAssetSource(exampleImage).uri;

const Preview = ({userdetail}) => {
  const {name, profession, city, religion, height, marital, _id, lifestyle} =
    userdetail;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.gray}}>
      <ScrollView style={{flex: 1}}>
        <Image
          source={{
            uri:
              userdetail != null
                ? `https://dzirex.herokuapp.com/api/users/${_id}/avatar`
                : defaultImage,
          }}
          resizeMode="contain"
          style={{
            width,
            height: windowHeight * 0.75,
            backgroundColor: theme.colors.secondary,
          }}
        />
        <View style={styles.container}>
          <View style={{alignItems: 'center', margin: 20}}>
            <NeuView
              width={180}
              height={80}
              color={theme.colors.gray}
              borderRadius={theme.sizes.radius}>
              <Text style={{color: theme.colors.secondary, fontSize: 25}}>
                {name ? name : 'Name'},28
              </Text>
              <Text>{city ? city : 'City'}</Text>
            </NeuView>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.dark}>
              <Icon
                name="shopping-bag"
                type="entypo"
                color={theme.colors.primary}
                size={15}
              />
              <Text style={styles.text}>
                {profession ? profession : 'Profession'}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dark}>
                <Icon
                  name="moon"
                  type="ionicon"
                  color={theme.colors.primary}
                  size={15}
                />
                <Text style={styles.text}>
                  {religion ? religion : 'Religion'}
                </Text>
              </View>
              <View style={styles.dark}>
                <Icon
                  name="refresh"
                  type="foundation"
                  color={theme.colors.primary}
                  size={15}
                />
                <Text style={styles.text}>{marital ? marital : 'Single'}</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', margin: 15}}>
            <NeuView
              width={width - 20}
              height={200}
              style={{top: 10, bottom: 50}}
              borderRadius={theme.sizes.radius}
              color={theme.colors.gray}
              containerStyle={styles.card}>
              <Card.Title style={{color: theme.colors.primary}}>
                About me
              </Card.Title>
              <Text style={{padding: 20, textAlign: 'center'}}>
                Nothing to show here
              </Text>
              <View style={styles.section}>
                <View style={styles.section}>
                  <Icon
                    name="arrowsalt"
                    type="antdesign"
                    color={theme.colors.primary}
                  />
                  <Text>{height ? height : 'Height'} cm</Text>
                </View>
                <View style={styles.section}>
                  <Icon
                    name="brush-outline"
                    type="ionicon"
                    color={theme.colors.primary}
                  />
                  <Text>{lifestyle[0] ? lifestyle[0] : 'Lifestyle'}</Text>
                </View>
              </View>
            </NeuView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  dark: {
    backgroundColor: 'rgba(0,0,0,.8)',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    flexDirection: 'row',
    margin: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  userdetail: state.profile.userdetail,
});

export default connect(mapStateToProps, {})(Preview);
