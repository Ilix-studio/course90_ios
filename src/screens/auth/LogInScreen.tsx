import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {} from '@react-navigation/elements';

const LogInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/course90-b95d3.appspot.com/o/Black%20White%20Modern%20Handwritten%20Square%20Studio%20Logo.png?alt=media&token=604126a7-2971-4bb0-95f1-640f147e1510',
        }}
        style={{
          width: 400, // specify width
          height: 400, // specify height
          resizeMode: 'contain', // or 'cover', 'stretch', 'center'
        }}
      />
      <Text style={styles.welcomeText}>Welcome to course90</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Please enter the passkey</Text>
        <TextInput
          style={styles.passkeyInput}
          placeholder="provided by your educational center"
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={() => {}}>
          <Text style={styles.buttonTextt}>Login to continue...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    padding: 170,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#4A4A4A',
  },
  form: {
    padding: 30,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  passkeyInput: {
    height: 40,
    borderColor: '#2E5077',
    borderWidth: 1,
    marginBottom: 25,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18, // text-lg
    fontFamily: 'Rubik-Medium',
    color: '#333333', // text-black-300
    marginLeft: 8, // ml-2
  },
  buttonLogin: {
    backgroundColor: '#2E5077',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonTextt: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#FFFFFF',
  },
});
