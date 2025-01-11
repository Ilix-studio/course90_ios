import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopicCardM, {TopicM} from './TopicCardM';

interface TopicsListPropsM {
  data: TopicM[];
  onTopicPress?: (topic: TopicM) => void;
}

export const topicsData: TopicM[] = [
  {id: '1', title: 'Topic 1'},
  {id: '2', title: 'Topic 2'},
  {id: '3', title: 'Topic 3'},
  {id: '4', title: 'Topic 4'},
  {id: '5', title: 'Topic 5'},
];

const TopicsListM: React.FC<TopicsListPropsM> = ({data, onTopicPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TopicCardM item={item} onPress={() => onTopicPress?.(item)} />
      )}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}
      pagingEnabled
    />
  );
};

export default TopicsListM;

const styles = StyleSheet.create({
  carousel: {
    paddingVertical: 3,
  },
});
