import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import {normalize, spacing, fontSizes} from '../../../../utils/dimensions';
import {ArrowLeft, Play, Pause, RefreshCw} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import Svg, {Line, Rect, Text as SvgText, G, Polygon} from 'react-native-svg';

interface Option {
  id: string;
  text: string;
  correct?: boolean;
}

const PersonalLabScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  // Position markers for the SVG visualization
  const positionMarkers = [0, 1, 2, 3, 4];

  // Sample question data
  const question: {
    text: string;
    options: Option[];
  } = {
    text: 'A force of 50N is applied to a 10kg object on a frictionless surface. What is its acceleration?',
    options: [
      {id: 'A', text: '0.5m/s²'},
      {id: 'B', text: '5m/s²', correct: true},
      {id: 'C', text: '10m/s²'},
      {id: 'D', text: '50m/s²'},
    ],
  };

  // State management
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [animationState, setAnimationState] = useState<
    'playing' | 'paused' | 'reset'
  >('paused');
  const [simulationTime, setSimulationTime] = useState<number>(0);
  const [objectPosition, setObjectPosition] = useState<number>(100);
  const [objectVelocity, setObjectVelocity] = useState<number>(0);

  // Animation ref for handling frame updates
  const animationRef = useRef<number | null>(null);

  // Parameters for simulation
  const mass = 10; // kg
  const force = 50; // N
  const acceleration = force / mass; // m/s²
  const frictionCoefficient = 0;
  const svgWidth = normalize(350);
  const svgHeight = normalize(200);
  const maxDistance = normalize(300); // maximum visual distance in pixels
  const maxSimulationTime = 5; // seconds

  // Handle option selection
  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
    setShowFeedback(true);
  };

  // Animation controls
  const handlePlayPause = () => {
    if (animationState === 'playing') {
      setAnimationState('paused');
    } else {
      setAnimationState('playing');
    }
  };

  const resetSimulation = () => {
    setAnimationState('reset');
    setSimulationTime(0);
    setObjectPosition(100);
    setObjectVelocity(0);
  };

  // Animation effect
  useEffect(() => {
    if (animationState === 'reset') {
      setAnimationState('paused');
      return;
    }

    const timeStep = 0.02; // seconds per frame

    const updateAnimation = () => {
      if (animationState === 'playing') {
        // Update time
        const newTime = simulationTime + timeStep;

        // Calculate new velocity: v = v₀ + at
        const newVelocity = objectVelocity + acceleration * timeStep;

        // Calculate new position: x = x₀ + v₀t + ½at²
        const deltaPosition =
          objectVelocity * timeStep + 0.5 * acceleration * timeStep * timeStep;
        const newPosition = objectPosition + deltaPosition * 15; // Scale factor for visualization

        // Update state
        setSimulationTime(newTime);
        setObjectVelocity(newVelocity);
        setObjectPosition(Math.min(newPosition, maxDistance)); // Limit to max visual distance

        // Stop animation when time limit reached or object reaches edge
        if (newTime >= maxSimulationTime || newPosition >= maxDistance) {
          setAnimationState('paused');
        } else {
          animationRef.current = requestAnimationFrame(updateAnimation);
        }
      }
    };

    if (animationState === 'playing') {
      animationRef.current = requestAnimationFrame(updateAnimation);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animationState, simulationTime, objectPosition, objectVelocity]);

  // Check if selected answer is correct
  const isCorrectAnswer = (): boolean => {
    if (!selectedOption) return false;
    const selected = question.options.find(opt => opt.id === selectedOption);
    return selected?.correct === true;
  };

  // Force arrow width calculation
  const forceArrowWidth = Math.min(50, force);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Lab</Text>
        <View style={{width: normalize(24)}} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Simulation area */}
        <View style={styles.simulationCard}>
          <Text style={styles.simulationTitle}>Craft Mentor AI</Text>

          {/* Parameter display */}
          <View style={styles.parametersContainer}>
            <View style={styles.parameterRow}>
              <Text style={styles.parameterLabel}>
                Mass: <Text style={styles.parameterValue}>{mass}kg</Text>
              </Text>
              <Text style={styles.parameterLabel}>
                Force: <Text style={styles.parameterValue}>{force}N</Text>
              </Text>
            </View>
            <View style={styles.parameterRow}>
              <Text style={styles.parameterLabel}>
                Acceleration:{' '}
                <Text style={styles.parameterValue}>{acceleration}m/s²</Text>
              </Text>
              <Text style={styles.parameterLabel}>
                Friction:{' '}
                <Text style={styles.parameterValue}>{frictionCoefficient}</Text>
              </Text>
            </View>
            {animationState === 'playing' && (
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>
                  Time:{' '}
                  <Text style={styles.parameterValue}>
                    {simulationTime.toFixed(2)}s
                  </Text>
                </Text>
                <Text style={styles.parameterLabel}>
                  Velocity:{' '}
                  <Text style={styles.parameterValue}>
                    {objectVelocity.toFixed(2)}m/s
                  </Text>
                </Text>
              </View>
            )}
          </View>

          {/* SVG visualization area */}
          <View style={styles.svgContainer}>
            <Svg
              width={svgWidth}
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
              {/* Surface line */}
              <Line
                x1="30"
                y1={svgHeight / 2}
                x2={svgWidth - 30}
                y2={svgHeight / 2}
                stroke="#333"
                strokeWidth="2"
              />

              {/* Object */}
              <G x={objectPosition} y={svgHeight / 2 - 40}>
                {/* Box representing the object */}
                <Rect width="50" height="50" fill="#3B82F6" rx="4" />

                {/* Mass label */}
                <SvgText
                  x="25"
                  y="30"
                  textAnchor="middle"
                  fill="white"
                  fontWeight="bold"
                  fontSize="14">
                  {mass}kg
                </SvgText>

                {/* Force arrow */}
                <G x={-60} y="25">
                  <Line
                    x1="0"
                    y1="0"
                    x2={forceArrowWidth}
                    y2="0"
                    stroke="#EF4444"
                    strokeWidth="6"
                  />
                  <Polygon
                    points={`${forceArrowWidth},0 ${forceArrowWidth - 12},-6 ${
                      forceArrowWidth - 12
                    },6`}
                    fill="#EF4444"
                  />
                  <SvgText
                    x={forceArrowWidth / 2}
                    y="-10"
                    textAnchor="middle"
                    fill="#EF4444"
                    fontWeight="bold"
                    fontSize="12">
                    {force}N
                  </SvgText>
                </G>

                {/* Acceleration label */}
                <SvgText
                  x="25"
                  y="65"
                  textAnchor="middle"
                  fill="#3B82F6"
                  fontWeight="bold"
                  fontSize="12">
                  {acceleration}m/s²
                </SvgText>
              </G>

              {/* Position markers */}
              {positionMarkers.map((marker: number) => (
                <G key={marker} x={100 + marker * 50} y={svgHeight / 2 + 10}>
                  <Line x1="0" y1="0" x2="0" y2="10" stroke="#666" />
                  <SvgText x="0" y="25" textAnchor="middle" fontSize="10">
                    {marker}m
                  </SvgText>
                </G>
              ))}
            </Svg>
          </View>

          {/* Formula display */}
          <View style={styles.formulaContainer}>
            <Text style={styles.formulaTitle}>Newton's Second Law: F = ma</Text>
            <Text style={styles.formulaText}>
              {force}N = {mass}kg × a
            </Text>
            <Text style={styles.formulaText}>
              a = {force}N ÷ {mass}kg = {acceleration}m/s²
            </Text>
          </View>

          {/* Simulation controls */}
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={[
                styles.controlButton,
                animationState === 'playing'
                  ? styles.pauseButton
                  : styles.playButton,
              ]}
              onPress={handlePlayPause}>
              {animationState === 'playing' ? (
                <Pause size={20} color="#ffffff" />
              ) : (
                <Play size={20} color="#ffffff" />
              )}
              <Text style={styles.controlButtonText}>
                {animationState === 'playing' ? 'Pause' : 'Play'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.controlButton,
                styles.resetButton,
                animationState === 'playing' && styles.disabledButton,
              ]}
              onPress={resetSimulation}
              disabled={animationState === 'playing'}>
              <RefreshCw size={20} color="#ffffff" />
              <Text style={styles.controlButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: spacing.xs,
  },
  headerTitle: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    textAlign: 'center',
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  questionText: {
    fontSize: fontSizes.lg,
    marginBottom: spacing.md,
    lineHeight: normalize(24),
  },
  optionsContainer: {
    marginBottom: spacing.md,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedOptionButton: {
    backgroundColor: '#4895ef',
    borderColor: '#4895ef',
  },
  correctOptionButton: {
    backgroundColor: '#4E9F3D',
    borderColor: '#4E9F3D',
  },
  incorrectOptionButton: {
    backgroundColor: '#ef476f',
    borderColor: '#ef476f',
  },
  optionText: {
    fontSize: fontSizes.md,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: '500',
  },
  correctFeedback: {
    backgroundColor: '#e1fae1',
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: '#4E9F3D',
  },
  incorrectFeedback: {
    backgroundColor: '#fdeff3',
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: '#ef476f',
  },
  feedbackTitle: {
    fontSize: fontSizes.md,
    fontWeight: '600',
    marginBottom: spacing.xs,
    color: '#333',
  },
  feedbackText: {
    fontSize: fontSizes.sm,
    color: '#555',
    lineHeight: normalize(20),
  },
  simulationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  simulationTitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    marginBottom: spacing.md,
    color: '#333',
  },
  parametersContainer: {
    backgroundColor: '#f8f9fa',
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
  },
  parameterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  parameterLabel: {
    fontSize: fontSizes.sm,
    color: '#555',
  },
  parameterValue: {
    fontWeight: '600',
    color: '#333',
  },
  svgContainer: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: spacing.md,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: spacing.md,
  },
  formulaContainer: {
    backgroundColor: '#e6f2ff',
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  formulaTitle: {
    fontSize: fontSizes.md,
    fontWeight: '600',
    marginBottom: spacing.xs,
    color: '#0066cc',
  },
  formulaText: {
    fontSize: fontSizes.sm,
    color: '#333',
    marginTop: spacing.xs,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.sm,
    gap: spacing.md,
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
    minWidth: normalize(100),
    justifyContent: 'center',
    gap: spacing.xs,
  },
  playButton: {
    backgroundColor: '#4E9F3D',
  },
  pauseButton: {
    backgroundColor: '#ffc300',
  },
  resetButton: {
    backgroundColor: '#6c757d',
  },
  disabledButton: {
    opacity: 0.5,
  },
  controlButtonText: {
    fontSize: fontSizes.sm,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default PersonalLabScreen;
