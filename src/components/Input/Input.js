import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './Input.style';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = (props) => {
  return (
    <View  style={styles.inputContainer} >
      <TextInput {...props} autoCapitalize={'none'} style={styles.input}/>
      <Icon name={props.iconName} size={25} color='grey' />
    </View>
  );
};

export default Input;
