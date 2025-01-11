import {
  Animated,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import TopicsListG, {topicsData} from '../../components/general/TopicsListG';
import {TopicG} from '../../components/general/TopicCardG';
import TopicsListM from '../../components/mock/TopicsListM';
import {TopicM} from '../../components/mock/TopicCardM';
import {ICONS} from '../../../constants';
import {Notebook, ChevronRight} from 'lucide-react-native';

type NavigationProps = {
  navigate: (screen: string) => void;
};

const HomeTab = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const handleTopicPressG = (topic: TopicG) => {
    console.log('Topic pressed:', topic);
    navigation.navigate('TestScreenGT');
  };
  const handleTopicPressM = (topic: TopicM) => {
    console.log('Topic pressed:', topic);
  };
  const handlePressSeeGT = () => {
    navigation.navigate('SeeAllGT'); // Replace 'NewComponent' with your route name
  };
  const handlePressSeeMT = () => {
    navigation.navigate('SeeAllMT'); // Replace 'NewComponent' with your route name
  };

  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerPartOne}>
            <Text style={styles.companyName}>Course90</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('ProfileScreen')}
            style={({pressed}) => [pressed && {opacity: 0.7}]}>
            <ICONS.CircleUserRound size={24} style={styles.profileCircle} />
          </Pressable>
        </View>
      </SafeAreaView>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{flexGrow: 1}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        <SafeAreaView style={styles.homeTabContainer}>
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

          {/* General Test  */}
          <View style={styles.section}>
            <View style={styles.twoSide}>
              <Text style={styles.sectionTitle}>General Test</Text>
              <Pressable
                style={styles.sectionSeeAll}
                onPress={handlePressSeeGT}>
                <Text style={styles.seeAllText}>See All</Text>
                <ChevronRight size={24} color="#888" />
              </Pressable>
            </View>
            <TopicsListG data={topicsData} onTopicPress={handleTopicPressG} />
          </View>

          {/* Mock Test  */}
          <View style={styles.section}>
            <View style={styles.twoSide}>
              <Text style={styles.sectionTitle}>Mock Test</Text>
              <Pressable
                style={styles.sectionSeeAll}
                onPress={handlePressSeeMT}>
                <Text style={styles.seeAllText}>See All</Text>
                <ChevronRight size={24} color="#888" />
              </Pressable>
            </View>
            <TopicsListM data={topicsData} onTopicPress={handleTopicPressM} />
          </View>
          <View style={styles.space}></View>
        </SafeAreaView>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152A38',
  },
  headerContainer: {
    backgroundColor: '#152A38',
    zIndex: 1,
  },
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
  headerPartOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyName: {
    fontFamily: 'LeagueSpartan',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#F8FAFC',
  },
  profileCircle: {
    width: 35,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginLeft: 8,
    marginRight: 8,
  },
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
  twoSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // ensures vertical alignment
    // other styles if needed
  },
  sectionSeeAll: {
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center', // Centers the text and icon vertically
  },
  seeAllText: {
    color: '#D1D4C9',
    marginRight: 5, // Adds spacing between text and icon
  },
  space: {
    paddingVertical: 26,
  },
  carousel: {
    paddingVertical: 16,
  },
});
