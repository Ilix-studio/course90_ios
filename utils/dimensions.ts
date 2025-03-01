import {Dimensions, PixelRatio, Platform} from 'react-native';

// Get the window dimensions
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Base width used as a reference (standard iPhone 8/SE size)
const baseWidth = 375;

// Scale factor based on screen width
const scale = SCREEN_WIDTH / baseWidth;

/**
 * Normalizes a size across different device screens
 * @param size - The size to normalize
 * @returns The normalized size for the current device
 */
export const normalize = (size: number): number => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  // Small adjustment for Android to account for differences in rendering
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

/**
 * Standard spacing units to maintain consistent layout
 */
export const spacing = {
  xs: normalize(4),
  sm: normalize(8),
  md: normalize(16),
  lg: normalize(24),
  xl: normalize(32),
  xxl: normalize(48),
};

/**
 * Font sizes that scale appropriately across devices
 */
export const fontSizes = {
  xs: normalize(12),
  sm: normalize(14),
  md: normalize(16),
  lg: normalize(18),
  xl: normalize(20),
  xxl: normalize(24),
  xxxl: normalize(30),
};

/**
 * Device size detection helpers
 */
export const isSmallDevice = SCREEN_WIDTH < 375;
export const isMediumDevice = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 768;
export const isLargeDevice = SCREEN_WIDTH >= 768;

/**
 * Screen dimensions for easy access
 */
export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;
