import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PerformanceTab = () => {
  return (
    <LinearGradient
      colors={['#243642', '#2b436a', '#243642']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <Text>Performance</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PerformanceTab;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
