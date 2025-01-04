import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import TopicsListG, {topicsData} from '../../components/general/TropicsListG';
import {TopicG} from '../../components/general/TropicCardG';
import TopicsListM from '../../components/mock/TropicsListM';
import {TopicM} from '../../components/mock/TropicCardM';
import {FONTS, ICONS} from '../../../constants';

const {width} = Dimensions.get('window');

const HomeTab = () => {
  const handleTopicPressG = (topic: TopicG) => {
    console.log('Topic pressed:', topic);
  };
  const handleTopicPressM = (topic: TopicM) => {
    console.log('Topic pressed:', topic);
  };

  return (
    <LinearGradient
      colors={['#243642', '#2b436a', '#243642']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.headerPartOne}>
            <Text style={styles.greeting}>Course90</Text>
          </View>
          <ICONS.CircleUserRound size={24} style={styles.profileCircle} />
        </View>
        {/* Mini Nots  */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mini Notes</Text>
          <View style={styles.miniFlex}>
            <View style={styles.topicBoxx}>
              <Text>Accessibility</Text>
            </View>
            <View style={styles.topicBoxx}>
              <Text>Accessibility</Text>
            </View>
            <View style={styles.topicBoxx}>
              <Text>Accessibility</Text>
            </View>
            <View style={styles.topicBoxx}>
              <Text>Accessibility</Text>
            </View>
          </View>
        </View>
        {/* Generat Text  */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General Test</Text>
          <TopicsListG data={topicsData} onTopicPress={handleTopicPressG} />
        </View>
        {/* Mock Text  */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mock Test</Text>
          <TopicsListM data={topicsData} onTopicPress={handleTopicPressM} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    justifyContent: 'space-between',
  },
  headerPartOne: {flexDirection: 'row', alignItems: 'center'},
  greeting: {
    fontFamily: FONTS.Raleway,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#F8FAFC',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    width: 100,
  },
  profileCircle: {
    width: 35,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginLeft: 8,
    marginRight: 8,
  },
  //Flatlist
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingLeft: 8,
    color: '#F8FAFC',
  },
  miniFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 10,
  },
  topicBoxx: {
    width: width * 0.4,
    height: 70, // Adjust width for the carousel item
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 12,
    backgroundColor: '#789DBC',
  },
  topicText: {
    fontSize: 16,
    color: '#F2F9FF',
  },
  carousel: {
    paddingVertical: 16,
  },
});
