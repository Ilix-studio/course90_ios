import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopicCardG, {TopicG} from './TropicCardG';

interface TopicsListPropsG {
  data: TopicG[];
  onTopicPress?: (topic: TopicG) => void;
}

export const topicsData: TopicG[] = [
  {id: '1', title: 'Topic 1'},
  {id: '2', title: 'Topic 2'},
  {id: '3', title: 'Topic 3'},
  {id: '4', title: 'Topic 4'},
  {id: '5', title: 'Topic 5'},
];

const TopicsListG: React.FC<TopicsListPropsG> = ({data, onTopicPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TopicCardG item={item} onPress={() => onTopicPress?.(item)} />
      )}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}
      pagingEnabled
    />
  );
};

export default TopicsListG;

const styles = StyleSheet.create({
  carousel: {
    paddingVertical: 16,
  },
});
