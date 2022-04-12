import React from "react";
import { TextInput, StyleSheet } from "react-native";
import styles from './Input.style'


const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};


export default Input;