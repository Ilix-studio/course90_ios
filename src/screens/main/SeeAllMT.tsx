import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface Topic {
  id: number;
  title: string;
}

const SeeAllMT: React.FC = () => {
  const topics: Topic[] = [
    {id: 1, title: 'Topic 1'},
    {id: 2, title: 'Topic 2'},
    {id: 3, title: 'Topic 3'},
    {id: 4, title: 'Topic 4'},
    {id: 5, title: 'Topic 5'},
    {id: 6, title: 'Topic 6'},
    {id: 7, title: 'Topic 7'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <View style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Topic"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <View style={styles.topicsContainer}>
        {topics.map(topic => (
          <TouchableOpacity key={topic.id} style={styles.topicButton}>
            <Text style={styles.topicText}>{topic.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SeeAllMT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  profileButton: {
    padding: 8,
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  topicsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  topicButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  topicText: {
    fontSize: 16,
    color: '#000',
  },
  footer: {
    padding: 16,
  },
  nextButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
