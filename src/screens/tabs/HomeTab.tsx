import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import TopicsListG, {topicsData} from '../../components/general/TropicsListG';
import {TopicG} from '../../components/general/TropicCardG';
import TopicsListM from '../../components/mock/TropicsListM';
import {TopicM} from '../../components/mock/TropicCardM';

const {width} = Dimensions.get('window');

const HomeTab = () => {
  const handleTopicPressG = (topic: TopicG) => {
    // Handle topic press
    console.log('Topic pressed:', topic);
  };
  const handleTopicPressM = (topic: TopicM) => {
    // Handle topic press
    console.log('Topic pressed:', topic);
  };

  return (
    <LinearGradient
      colors={['#243642', '#2b436a', '#243642']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.headerPartOne}>
            <Text style={styles.greeting}>Hello,</Text>
            <TextInput style={styles.input} placeholder="Type name" />
          </View>
          <View style={styles.profileCircle}></View>
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
        {/* Mini Nots  */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mini Notes</Text>
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
  },
  //Flatlist
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingLeft: 8,
    color: '#F8FAFC',
  },
  topicBox: {
    width: width * 0.8,
    height: 150, // Adjust width for the carousel item
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    fontSize: 16,
    color: '#F2F9FF',
  },
  carousel: {
    paddingVertical: 16,
  },
});
