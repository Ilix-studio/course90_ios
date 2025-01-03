import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const HomeTab = () => {
  return (
    <LinearGradient
      colors={['#243642', '#2b436a', '#243642']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <Text>HomeTab</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
