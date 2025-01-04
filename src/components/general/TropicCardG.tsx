import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');

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
    <TouchableOpacity style={styles.topicBox} onPress={onPress}>
      <Text style={styles.topicText}>{item.title}</Text>
      <Text style={styles.totalQ}>{item.totalQ}</Text>
    </TouchableOpacity>
  );
};

export default TopicCardG;

const styles = StyleSheet.create({
  topicBox: {
    width: width * 0.8,
    height: 150,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 29,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: '#7df9ad',
  },
  topicText: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
  totalQ: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
});
