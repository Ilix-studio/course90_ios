import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackParamList from './RootStackParamList';
import HomeScreen from '../screens/main/HomeScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LogInScreen from '../screens/auth/LogInScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  const isAuthenticated = true;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={TabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
