import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = ({thema = 'primary', onPress, text}) => {
  return (
      <TouchableOpacity onPress = {onPress} style={styles[thema].button}>
        <Text style={styles[thema].buttonText}>{text}</Text>
      </TouchableOpacity>

  );
};

export default Button;
