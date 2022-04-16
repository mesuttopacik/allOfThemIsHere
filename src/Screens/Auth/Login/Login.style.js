import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../../constants/GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  shopingImage: {
    width: sizes.windowWidth,
    height: sizes.windowHeight / 3,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginVertical: 25,
  },
  logoContainer: {},
  bodyContainer: {},
});
