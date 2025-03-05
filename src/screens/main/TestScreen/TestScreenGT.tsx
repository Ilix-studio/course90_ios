import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import {
  normalize,
  spacing,
  screenWidth,
  fontSizes,
} from '../../../../utils/dimensions';

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    'Being In A Relationship',
  );

  const options = [
    'Being Sick',
    "Telling Someone That You're Listening When You Aren't",
    'Being In A Relationship',
    'Being "Five Minutes Away"',
  ];

  return (
    <SafeAreaView style={styles.testGTcontainer}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Topic Name</Text>
        <View style={{width: normalize(24)}} />
      </View>

      {/* Progress indicator */}
      <View style={styles.progressContainer}>
        <Text style={styles.questionNumber}>
          Question 3<Text style={styles.totalQuestions}>/10</Text>
        </Text>
        <View style={styles.paginationButtons}>
          <Text style={styles.paginationButton}>{'<'}</Text>
          <Text style={styles.paginationButton}>{'>'}</Text>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
      </View>

      {/* Question */}
      <Text style={styles.question}>
        What is the worst thing you've ever lied about?
      </Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && styles.selectedOptionButton,
            ]}
            onPress={() => setSelectedOption(option)}>
            <Text
              style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText,
              ]}>
              {option}
            </Text>
            <View style={styles.radioContainer}>
              {selectedOption === option ? (
                <View style={styles.radioSelected}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  testGTcontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: Platform.OS === 'ios' ? spacing.sm : spacing.md,
    paddingVertical: Platform.OS === 'ios' ? spacing.sm : spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    height: normalize(44),
  },
  backButton: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: normalize(22),
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  questionNumber: {
    fontSize: fontSizes.sm,
    fontWeight: '600',
  },
  totalQuestions: {
    fontSize: fontSizes.sm,
    fontWeight: 'normal',
    color: '#888',
  },
  paginationButtons: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  paginationButton: {
    fontSize: fontSizes.md,
    color: '#888',
  },
  progressBarContainer: {
    marginBottom: spacing.md,
  },
  progressBarBackground: {
    height: Platform.OS === 'ios' ? 5 : 6,
    backgroundColor: '#e9ecef',
    borderRadius: 3,
  },
  progressBarFill: {
    width: '30%', // 3/10 questions
    height: '100%',
    backgroundColor: '#4E9F3D',
    borderRadius: 3,
  },
  question: {
    fontSize: Platform.OS === 'ios' ? fontSizes.xl - 1 : fontSizes.xl,
    fontWeight: '600',
    marginBottom: spacing.lg,
    lineHeight: Platform.OS === 'ios' ? normalize(26) : normalize(28),
  },
  optionsContainer: {
    flex: 1,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: Platform.OS === 'ios' ? spacing.md - 2 : spacing.md,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: '#e9ecef',
    minHeight: normalize(48),
  },
  selectedOptionButton: {
    backgroundColor: '#4E9F3D',
    borderColor: '#0dd3b9',
  },
  optionText: {
    fontSize: fontSizes.sm,
    flex: 1,
    paddingRight: spacing.sm,
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: '500',
  },
  radioContainer: {
    width: normalize(24),
    height: normalize(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioUnselected: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(10),
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  radioSelected: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(10),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#4E9F3D',
    fontSize: fontSizes.sm,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: Platform.OS === 'ios' ? spacing.md : spacing.sm,
  },
  continueButton: {
    backgroundColor: '#1C1427',
    borderRadius: 25,
    paddingVertical: spacing.md,
    alignItems: 'center',
    width: '100%',
  },
  continueButtonText: {
    color: 'white',
    fontSize: fontSizes.md,
    fontWeight: '500',
  },
});

export default QuizScreen;
