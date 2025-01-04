import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {COLORS} from '../../../constants';
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
    <TouchableOpacity style={styles.topicBox} onPress={onPress}>
      <Text style={styles.topicText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default TopicCardM;

const styles = StyleSheet.create({
  topicBox: {
    width: width * 0.8,
    height: 150,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 28,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: '#D9EAFD',
  },
  topicText: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
});
