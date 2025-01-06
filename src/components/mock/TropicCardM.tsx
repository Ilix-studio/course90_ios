import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Ellipse} from 'react-native-svg';
const {width} = Dimensions.get('window');

export interface TopicM {
  id: string;
  title: string;
}

interface TopicCardPropsM {
  item: TopicM;
  onPress?: () => void;
}

const TopicCardM: React.FC<TopicCardPropsM> = ({item, onPress}) => {
  return (
    <LinearGradient
      colors={['#330867', '#30cfd0']}
      style={{
        width: width * 0.8,
        borderRadius: 16,
        padding: 20,
        minHeight: 200,
      }}>
      <Svg height="100%" width="100%" style={{position: 'absolute'}}>
        <Ellipse cx="50" cy="50" rx="60" ry="30" fill="rgba(255,255,255,0.1)" />
        <Ellipse
          cx="350"
          cy="100"
          rx="40"
          ry="40"
          fill="rgba(255,255,255,0.1)"
        />
        <Ellipse
          cx="200"
          cy="150"
          rx="80"
          ry="30"
          fill="rgba(255,255,255,0.08)"
        />
      </Svg>

      <View style={{zIndex: 1}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: 8,
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#ffffff',
            opacity: 0.9,
            marginBottom: 16,
          }}>
          Total Questions: 25
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#ffffff',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            alignSelf: 'flex-start',
          }}
          onPress={onPress}>
          <Text
            style={{
              color: '#4c1d95',
              fontWeight: '600',
            }}>
            Start Test
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default TopicCardM;
