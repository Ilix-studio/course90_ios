import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'auth';

export const savePasskey = async (passkey: string) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({passkey}));
  } catch (error) {
    console.error('Failed to save passkey:', error);
  }
};

export const loadPasskey = async () => {
  try {
    const authState = await AsyncStorage.getItem(STORAGE_KEY);
    if (authState) {
      const {passkey} = JSON.parse(authState);
      return passkey;
    }
  } catch (error) {
    console.error('Failed to load passkey:', error);
  }
  return null;
};

export const clearPasskey = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear passkey:', error);
  }
};
