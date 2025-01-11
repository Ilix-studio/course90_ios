import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackParamList from './RootStackParamList';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LogInScreen from '../screens/auth/LogInScreen';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/main/ProfileScreen';
import SeeAllGT from '../screens/main/SeeAllGT';
import SeeAllMT from '../screens/main/SeeAllMT';
import SeeAllMini from '../screens/main/SeeAllMini';

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
          <Stack.Screen name="HomeScreen" component={TabNavigator} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="SeeAllGT" component={SeeAllGT} />
          <Stack.Screen name="SeeAllMT" component={SeeAllMT} />
          <Stack.Screen name="SeeAllMini" component={SeeAllMini} />
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
