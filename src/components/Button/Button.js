import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from './Button.style'

const Button = (props) => {
  return (
    <View style = {styles.contanier}>
      <TouchableOpacity {...props} style={{ ...styles.button, ...props.style }}>
        <Text style = {styles.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Button;