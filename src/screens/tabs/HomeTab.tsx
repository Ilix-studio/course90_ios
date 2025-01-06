import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React, {useRef} from 'react';
import TopicsListG, {topicsData} from '../../components/general/TropicsListG';
import {TopicG} from '../../components/general/TropicCardG';
import TopicsListM from '../../components/mock/TropicsListM';
import {TopicM} from '../../components/mock/TropicCardM';
import {ICONS} from '../../../constants';
import {Notebook} from 'lucide-react-native';

const HomeTab = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const handleTopicPressG = (topic: TopicG) => {
    console.log('Topic pressed:', topic);
  };
  const handleTopicPressM = (topic: TopicM) => {
    console.log('Topic pressed:', topic);
  };

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      contentContainerStyle={{flexGrow: 1}}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}>
      <SafeAreaView style={styles.homeTabContainer}>
        <View style={styles.header}>
          <View style={styles.headerPartOne}>
            <Text style={styles.companyName}>Course90</Text>
          </View>
          <ICONS.CircleUserRound size={24} style={styles.profileCircle} />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.instituteText}>
            <Text style={styles.boldText}>ilix institute's presents</Text>
          </Text>
          <Text style={styles.courseText}>
            general, mock test and mini notes
          </Text>
        </View>
        {/* Mini Notes  */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mini Notes</Text>

          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.miniContainer}>
            <View style={styles.leftSection}>
              <Notebook color="#fff" size={32} />
              <Text style={styles.iconText}>Notes</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>See all</Text>
            </TouchableOpacity>
          </LinearGradient>
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
        <View style={styles.space}></View>
      </SafeAreaView>
    </Animated.ScrollView>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  homeTabContainer: {
    flex: 1,
    backgroundColor: '#152A38',
  },
  //company name and user profile
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    padding: 8,
    justifyContent: 'space-between',
  },
  headerPartOne: {flexDirection: 'row', alignItems: 'center'},
  companyName: {
    fontFamily: 'LeagueSpartan',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#F8FAFC',
  },
  // Raleway Oswald
  profileCircle: {
    width: 35,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginLeft: 8,
    marginRight: 8,
  },
  //Text Container
  text_container: {
    marginVertical: 48,
    gap: 8,
  },
  instituteText: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: 500,
    color: '#ffffff',
    fontFamily: 'Oswald',
  },
  boldText: {
    fontWeight: '800',
  },
  courseText: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
  },
  // Mini Notes
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    height: 170,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  //Flatlist  && Mini Notes
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
  //Mini Notes

  //space
  space: {
    paddingVertical: 26,
  },

  carousel: {
    paddingVertical: 16,
  },
});
