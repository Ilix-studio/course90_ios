import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
const {width} = Dimensions.get('window');

export interface TopicG {
  id: string;
  title: string;
}

interface TopicCardPropsG {
  item: TopicG;
  onPress?: () => void;
}

const TopicCardG: React.FC<TopicCardPropsG> = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.topicBox} onPress={onPress}>
      <Text style={styles.topicText}>{item.title}</Text>
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
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
});
