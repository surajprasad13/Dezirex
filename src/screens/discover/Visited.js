import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card} from '../../components';
import {theme} from '../../constants';

import {Follow as Data} from '../../constants/data';

const Visited = () => {
  const renderItem = useCallback(
    ({item, index}) => <Card data={item} key={index} />,
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        keyExtractor={(item, index) => index.toString()}
      />
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

export default Visited;
