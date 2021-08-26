import React from 'react';

import {} from 'react-native';
import LottieView from 'lottie-react-native';

const HeartLoading = () => {
  return (
    <LottieView
      source={require('../assets/animation/loading.json')}
      autoPlay={true}
    />
  );
};

export default HeartLoading;
