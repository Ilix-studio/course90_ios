import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
