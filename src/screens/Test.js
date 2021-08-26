import React, {useCallback, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
} from 'react-native';

import {Card} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const DOT_SIZE = 8;
const ITEM_HEIGHT = height * 0.75;

const data = Array(5)
  .fill()
  .map(() => {
    return {
      name: 'Arun',
    };
  });

const Test = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.cotainer}>
      <View style={{height: ITEM_HEIGHT, overflow: 'hidden'}}>
        <Animated.FlatList
          data={data}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          renderItem={() => {
            return (
              <View>
                <Image
                  style={{width, height: ITEM_HEIGHT}}
                  source={{
                    uri: 'https://source.unsplash.com/400x400?water',
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <View style={styles.dotContainer}>
        {data.map((_, index) => {
          return <View key={index} style={styles.dot} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: 'white',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
  dotContainer: {
    position: 'absolute',
    top: ITEM_HEIGHT / 2,
    right: 10,
    height: 200,
    width: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
