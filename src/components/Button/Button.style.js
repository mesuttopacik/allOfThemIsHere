import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/GlobalStyles';

const baseStyle = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
export default {
  primary: StyleSheet.create({
    button: {
      ...baseStyle.button,
      backgroundColor: '#219ebc',
    },
    buttonText: {
      color: 'white',
      ...baseStyle.buttonText,
    },
  }),

  secondary: StyleSheet.create({
    button: {
      ...baseStyle.button,
      backgroundColor: 'white',
      borderColor: '#219ebc',
      borderWidth: 1,
    },
    buttonText: {
      color: '#219ebc',
      ...baseStyle.buttonText,
    },
  }),
};
