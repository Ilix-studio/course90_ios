import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// interface TestOption {
//   id: string;
//   text: string;
// }

// interface TestScreenProps {
//   topicName: string;
//   question: string;
//   options: TestOption[];
//   onSkip?: () => void;
//   onNext?: () => void;
// }

const TestScreenGT: React.FC = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topicName}>topicName</Text>
        <View style={styles.circle} />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>question</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Text style={styles.footerButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TestScreenGT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  topicName: {
    fontSize: 20,
    fontWeight: '500',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  questionContainer: {
    padding: 16,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '500',
  },
  optionsContainer: {
    padding: 16,
    gap: 16,
  },
  optionButton: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  optionText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 'auto',
  },
  footerButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
