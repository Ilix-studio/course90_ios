import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/tabs/HomeTab';

import PerformanceTab from '../screens/tabs/PerformanceTab';

import {icons} from '../../constants';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  source,
  color,

  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  color: string;
}) => {
  return (
    <View style={styles.tabIconView}>
      <Image
        source={source}
        tintColor={color}
        style={styles.tabiconsimg}
        resizeMode="contain"
      />
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
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#181818',
          borderTopWidth: 1,
          position: 'absolute',
          borderTopColor: '#232533',
          height: 84,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => {
            return (
              <TabIcon
                source={icons.homeTabLogo}
                focused={focused}
                color={color}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Performance"
        component={PerformanceTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <TabIcon
                source={icons.chartPyramid}
                focused={focused}
                color={color}
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
  tabIconView: {
    flex: 1,
    paddingTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabiconsimg: {
    width: 24,
    height: 24,
  },
});
