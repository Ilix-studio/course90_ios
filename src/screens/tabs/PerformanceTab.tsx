import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants';

const PerformanceTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerPartOne}>
            <Text style={styles.companyName}>Course90</Text>
          </View>
          <ICONS.CircleUserRound size={24} style={styles.profileCircle} />
        </View>
      </SafeAreaView>
      <ScrollView>
        {/* Motivation Quote Section */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteTitle}>motivation Quote</Text>
          <Text style={styles.quoteText}>
            "Success is not final, failure is not fatal: it is the courage to
            continue that counts."
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {/* Total Solve */}
          <View style={styles.statsBox}>
            <Text style={styles.statsTitle}>Total Solve</Text>
            <Text style={styles.statsValue}>150</Text>
          </View>

          {/* Average Time */}
          <View style={styles.statsBox}>
            <Text style={styles.statsTitle}>Average time</Text>
            <Text style={styles.statsValue}>25 min</Text>
          </View>

          {/* Additional Stats Boxes */}
          <View style={styles.statsBox}>
            <Text style={styles.statsTitle}>Completion Rate</Text>
            <Text style={styles.statsValue}>85%</Text>
          </View>

          <View style={styles.statsBox}>
            <Text style={styles.statsTitle}>Streak</Text>
            <Text style={styles.statsValue}>7 days</Text>
          </View>
        </View>

        {/* Contribution Calendar */}
        <View style={styles.calendarContainer}>
          <Text style={styles.calendarTitle}>Contribution Calendar</Text>
          {/* Add your calendar component here */}
          <View style={styles.placeholderCalendar}>
            <Text>Calendar View</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerformanceTab;

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
  quoteContainer: {
    padding: 20,
    backgroundColor: '#1E1E1E', // Slightly lighter than background
    margin: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#629584',
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#E0E0E0', // Light grey for better contrast
  },
  quoteText: {
    fontSize: 16,
    color: '#B0B0B0', // Slightly dimmer than titles
    fontStyle: 'italic',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'space-between',
  },
  statsBox: {
    width: '45%',
    backgroundColor: '#1E1E1E',
    padding: 16,
    margin: 8,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#333333',
  },
  statsTitle: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 8,
  },
  statsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0E0E0',
  },
  calendarContainer: {
    backgroundColor: '#1E1E1E',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#333333',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#E0E0E0',
  },
  placeholderCalendar: {
    height: 200,
    backgroundColor: '#252525', // Slightly lighter than cards
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  placeholderText: {
    color: '#B0B0B0',
  },
});
