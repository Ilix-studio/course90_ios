import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/tabs/HomeTab';
import CareerAITab from '../screens/tabs/CareerAITab';
import PerformanceTab from '../screens/tabs/PerformanceTab';

import {icons} from '../../constants';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  source,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  size: number;
}) => {
  return (
    <View style={styles.icon}>
      <Image source={source} tintColor="white" />
    </View>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#629584',
        tabBarStyle: {
          backgroundColor: '#181818',
          position: 'absolute',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 55,
          paddingBottom: 9,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon source={icons.homeTabLogo} focused={focused} size={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name="CareerAI"
        component={CareerAITab}
        options={{
          tabBarLabel: 'Career AI',
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon source={icons.microchipAI} focused={focused} size={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Performance"
        component={PerformanceTab}
        options={{
          tabBarLabel: 'Performance',
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                source={icons.chartPyramid}
                focused={focused}
                size={30}
              />
            );
          },
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'column',
  },
});
