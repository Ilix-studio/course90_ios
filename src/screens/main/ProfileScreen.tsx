import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react-native';

interface MenuItemProps {
  title: string;
  onPress: () => void;
  icon?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({title, onPress, icon}) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={onPress}
    activeOpacity={0.7}>
    <View style={styles.menuItemContent}>
      <Text style={styles.menuItemText}>{title}</Text>
      <ChevronRight size={20} color="#666" />
    </View>
  </TouchableOpacity>
);

const ProfileScreen: React.FC = () => {
  const handleBackPress = () => {
    // Handle navigation back
    console.log('Back pressed');
  };

  const handleMenuItemPress = (item: string) => {
    console.log(`${item} pressed`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <MenuItem
          title="Save your name"
          onPress={() => handleMenuItemPress('Save your name')}
        />
        <MenuItem
          title="About the course"
          onPress={() => handleMenuItemPress('About the course')}
        />
        <MenuItem
          title="Announcement"
          onPress={() => handleMenuItemPress('Announcement')}
        />
        <MenuItem
          title="Total Days Left to expire"
          onPress={() => handleMenuItemPress('Total Days Left to expire')}
        />
        <MenuItem
          title="Profile switch"
          onPress={() => handleMenuItemPress('Profile switch')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  menuContainer: {
    paddingTop: 16,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
});
