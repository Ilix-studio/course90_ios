import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {normalize, spacing} from '../../../utils/dimensions';
import {
  ArrowDownNarrowWide,
  ArrowLeft,
  Bookmark,
  Search,
} from 'lucide-react-native';
import {ICONS} from '../../../constants';
import {SUBJECTS} from '../../mockData';

const SeeAllGT: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Physics');
  const [searchQuery, setSearchQuery] = useState('');
  const [subjects, setsubjects] = useState(SUBJECTS);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastOffsetY = useRef(0);

  // Function to handle subject selection
  const handleSelectsubject = (id: any) => {
    const updatedsubjects = subjects.map(subject => {
      if (subject.id === id) {
        return {...subject, selected: !subject.selected};
      }
      return subject;
    });
    setsubjects(updatedsubjects);
  };

  // Handle scroll events for showing/hiding the bottom nav
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffsetY = event.nativeEvent.contentOffset.y;

    // Show bottom nav when scrolling down, hide when scrolling up
    if (currentOffsetY < lastOffsetY.current) {
      // Scrolling up (finger moving down) - hide the nav
      setShowBottomNav(false);
    } else if (currentOffsetY > lastOffsetY.current) {
      // Scrolling down (finger moving up) - show the nav
      setShowBottomNav(true);
    }

    lastOffsetY.current = currentOffsetY;
  };

  // Render subject item
  const rendersubjectItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.subjectItem}
      onPress={() => handleSelectsubject(item.id)}>
      <View style={styles.subjectInfo}>
        <View style={styles.nameContainer}>
          <Text style={styles.subjectName}>{item.name}</Text>
        </View>
        <Text style={styles.subjectPhone}>{item.phoneNumber}</Text>
      </View>
      <View style={styles.checkboxContainer}>
        {item.selected && <Bookmark />}
      </View>
    </TouchableOpacity>
  );

  // Render tab item
  const renderTab = (tabName: any): any => (
    <TouchableOpacity
      onPress={() => setActiveTab(tabName)}
      style={[styles.tab, activeTab === tabName && styles.activeTab]}>
      <Text
        style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>
            <ArrowLeft />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <ICONS.CircleUserRound size={24} style={styles.profileCircle} />
        </TouchableOpacity>
      </View>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>
          {renderTab('Physics')}
          {renderTab('Chemistry')}
          {renderTab('Mathematics')}
          {renderTab('Computer Science')}
        </View>
      </View>
      {/* Search  */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>
            {' '}
            <Search />
          </Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by names"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* subjects List */}
      <View
        style={[
          styles.listContainer,
          !showBottomNav && styles.listContainerFullHeight,
        ]}>
        <FlatList
          data={subjects}
          renderItem={rendersubjectItem}
          keyExtractor={(item, index) => `subject-${item.id}-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          onScroll={handleScroll}
          scrollEventThrottle={16} // Important for smooth scroll detection
        />
      </View>

      {/* Filter container moved to the bottom */}
      {showBottomNav && (
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterText}>Sort</Text>
            <ArrowDownNarrowWide size={15} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SeeAllGT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: normalize(8),
  },
  backButtonText: {
    fontSize: normalize(24),
    color: '#000',
  },
  profileButton: {
    padding: 8,
  },
  profileCircle: {
    width: normalize(35),
    height: normalize(30),
    borderRadius: normalize(20),
    backgroundColor: '#ccc',
    marginLeft: spacing.sm,
    marginRight: spacing.sm,
  },
  // tab
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
  },
  tabs: {
    flexDirection: 'row',
    flex: 1,
  },
  tab: {
    paddingVertical: normalize(12),
    marginRight: normalize(16),
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4F46E5',
  },
  tabText: {
    fontSize: normalize(16),
    color: '#94A3B8',
  },
  activeTabText: {
    color: '#1E293B',
    fontWeight: '600',
  },
  //search
  searchContainer: {
    paddingHorizontal: normalize(16),
    marginTop: normalize(16),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: normalize(24),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(12),
  },
  searchIcon: {
    marginRight: normalize(8),
    fontSize: normalize(16),
  },
  searchInput: {
    flex: 1,
    fontSize: normalize(16),
    color: '#1E293B',
  },
  //See all topic sort by newest/oldest
  subjectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(12),
  },
  checkboxContainer: {
    width: normalize(24),
    height: normalize(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(10),
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  avatarContainer: {
    marginLeft: normalize(8),
  },
  avatar: {
    width: normalize(48),
    height: normalize(48),
    borderRadius: normalize(24),
  },
  subjectInfo: {
    marginLeft: normalize(12),
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subjectName: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#1E293B',
  },

  subjectPhone: {
    fontSize: normalize(14),
    color: '#94A3B8',
    marginTop: normalize(4),
  },

  //
  indexItem: {
    width: normalize(16),
    height: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexText: {
    fontSize: normalize(12),
    color: '#94A3B8',
  },

  // Filter container styling - moved to bottom of screen
  filterContainer: {
    flexDirection: 'row',
    paddingVertical: Platform.OS === 'ios' ? 24 : 12,
    borderTopWidth: Platform.OS === 'ios' ? 3 : 1, // Slightly reduced for consistency
    borderTopColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    elevation: 5, // Keeps the shadow for Android
    shadowColor: '#000',
    shadowOpacity: 0.1, // Added slight shadow for iOS
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2}, // Helps define the shadow better on iOS
    zIndex: 100,
  },
  filterOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
  },
  filterText: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#e0e0e0',
  },

  // List container with two different styles based on bottom nav visibility
  listContainer: {
    flex: 1,
    paddingHorizontal: normalize(16),
    marginTop: normalize(16),
    marginBottom: Platform.OS === 'ios' ? 70 : 50, // Bottom margin when filter bar is visible
  },
  listContainerFullHeight: {
    marginBottom: 0, // No bottom margin when filter bar is hidden
  },
  listHeader: {
    fontSize: normalize(14),
    color: '#94A3B8',
    marginBottom: normalize(12),
  },
  listContent: {
    paddingBottom: normalize(20),
  },
});
