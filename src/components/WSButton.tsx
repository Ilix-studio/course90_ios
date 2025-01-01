import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ButtonProps} from '../../types/type';

const WSButton = ({onPress, title}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWS}>
      <Text style={styles.buttomText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WSButton;

const styles = StyleSheet.create({
  buttonWS: {
    width: '90%',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#295F98',
    marginBottom: 15,
  },
  buttomText: {
    color: '#FCFAEE',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
