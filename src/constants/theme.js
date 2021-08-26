import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default {
  colors: {
    primary: '#FF7192',
    secondary: '#FF8585',
    //gray: '#eff0f6',
    gray: '#f1f1f1',
    white: '#f2f2f2',
  },
  sizes: {
    base: 16,
    radius: 12,
    input_width: width * 0.85,
    input_height: 50,
  },
};
