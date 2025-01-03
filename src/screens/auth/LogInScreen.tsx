import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path, Circle, G, Line} from 'react-native-svg';

const {width, height} = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#243642', '#2b436a', '#243642']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}>
          <View style={styles.svgContainer}>
            <Svg width={width} height={300} style={styles.svg}>
              <G opacity={0.5}>
                {/* Organic Curves */}
                <Path
                  d="M0,100 Q75,50 150,100 T300,100"
                  stroke="#4a5af5"
                  strokeWidth="1.5"
                  fill="none"
                  scale={2}
                />
                <Path
                  d="M0,200 Q75,150 150,200 T300,200"
                  stroke="#4a5af5"
                  strokeWidth="1.5"
                  fill="none"
                  scale={2}
                />
                <Path
                  d="M0,150 Q75,100 150,150 T300,150"
                  stroke="#4a5af5"
                  strokeWidth="1"
                  fill="none"
                  scale={2}
                />
                <Path
                  d="M0,50 Q75,75 150,50 T300,50"
                  stroke="#8f72f7"
                  strokeWidth="1"
                  fill="none"
                  scale={1.5}
                  transform="rotate(5, 150, 50)"
                />
                <Path
                  d="M0,250 Q75,225 150,250 T300,250"
                  stroke="#8f72f7"
                  strokeWidth="1"
                  fill="none"
                  scale={1.5}
                  transform="rotate(-5, 150, 250)"
                />

                {/* Floating Elements */}
                <Circle cx="75" cy="125" r="6" fill="#6f8bf7" opacity="0.7" />
                <Circle cx="225" cy="175" r="6" fill="#6f8bf7" opacity="0.7" />
                <Circle cx="150" cy="75" r="6" fill="#6f8bf7" opacity="0.7" />
                <Circle cx="300" cy="125" r="6" fill="#6f8bf7" opacity="0.7" />
                <Circle cx="100" cy="225" r="6" fill="#6f8bf7" opacity="0.7" />

                {/* Additional Elements */}
                <Line
                  x1="75"
                  y1="125"
                  x2="100"
                  y2="225"
                  stroke="#6f8bf7"
                  strokeWidth="0.5"
                />
                <Line
                  x1="225"
                  y1="175"
                  x2="300"
                  y2="125"
                  stroke="#6f8bf7"
                  strokeWidth="0.5"
                />
                <Circle cx="50" cy="100" r="3" fill="#b4c8f7" />
                <Circle cx="275" cy="200" r="3" fill="#b4c8f7" />
                <Circle cx="200" cy="50" r="2" fill="#b4c8f7" />
                <Circle cx="250" cy="250" r="2" fill="#b4c8f7" />
              </G>
            </Svg>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Welcome to course90</Text>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Please enter the passkey</Text>
              <TextInput
                style={styles.passkeyInput}
                placeholder="provided by your educational center"
                placeholderTextColor="#666"
                secureTextEntry
              />
              <TouchableOpacity style={styles.buttonLogin} onPress={() => {}}>
                <Text style={styles.buttonText}>Login to continue...</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  svgContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  svg: {
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: -60, // Adjust this value to control overlap with SVG
  },
  welcomeText: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#FFFFFF',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  passkeyInput: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    marginBottom: 25,
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  buttonLogin: {
    backgroundColor: '#4a5af5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default LoginScreen;
