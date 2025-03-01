import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';
import {normalize, spacing, screenWidth} from '../../../utils/dimensions';

export interface TopicG {
  id: string;
  title: string;
  totalQ: string;
}

interface TopicCardPropsG {
  item: TopicG;
  onPress?: () => void;
}

const TopicCardG: React.FC<TopicCardPropsG> = ({item, onPress}) => {
  return (
    <LinearGradient
      colors={['#453a94', '#f43b47']}
      style={{
        width: screenWidth * 0.8,
        borderRadius: normalize(16),
        padding: 20,
        position: 'relative',
        minHeight: normalize(200),
      }}>
      <Svg
        height="100%"
        width="100%"
        style={{position: 'absolute'}}
        viewBox="0 0 400 300">
        <Path
          d="M0,50 Q100,0 200,50 T400,50"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <Path
          d="M0,100 Q100,50 200,100 T400,100"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <Path
          d="M0,150 Q100,100 200,150 T400,150"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
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
            Start Practice
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default TopicCardG;
