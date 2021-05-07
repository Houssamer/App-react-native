import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const Buttons = ({ type, text }) => {
  const background = type == 'primary' ? '#333438' : 'white';
  const textColor = type == 'primary' ? 'white' : 'black';
  function press() {
        Alert.alert(
            "Comming Soon",
            'this feature is not ready'
        )
  }
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: background }]}
      activeOpacity={0.5}
      onPress={press}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
