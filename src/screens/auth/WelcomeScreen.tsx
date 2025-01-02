import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import Swiper from 'react-native-swiper';
import WSButton from '../../components/WSButton';
import {StackScreenProps} from '@react-navigation/stack';
import RootStackParamList from '../../navigation/RootStackParamList';

const onBoardImg = [
  {
    id: 1,
    title: 'No Ads',
    description: 'Enjoy this app without ads.',
    uri: 'https://firebasestorage.googleapis.com/v0/b/course90-b95d3.appspot.com/o/onboarding1.png?alt=media&token=d21bd7b8-1466-487c-abdb-08dae8500e33',
  },
  {
    id: 2,
    title: 'Safe and secure ',
    description: 'No personal data is collected by this app',
    uri: 'https://firebasestorage.googleapis.com/v0/b/course90-b95d3.appspot.com/o/onboarding2.png?alt=media&token=ead2c52e-2e2f-46ce-9e74-8e89da046058',
  },
  {
    id: 3,
    title: 'Specific Content System',
    description:
      'This app facilitates communication between you and the educational center.',
    uri: 'https://firebasestorage.googleapis.com/v0/b/course90-b95d3.appspot.com/o/Gemini_Generated_Image_u9tpazu9tpazu9tp-removebg.png?alt=media&token=2158332b-cecb-4bbd-92ae-fc02f9b9c2a4',
  },
];

type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onBoardImg.length - 1;
  const handleNext = () => {
    if (isLastSlide) {
      navigation.navigate('LogInScreen'); // Navigate to your main screen after the last slide
    } else {
      swiperRef.current?.scrollBy(1); // Move to the next slide
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dotOne} />}
        activeDot={<View style={styles.dotTwo} />}
        onIndexChanged={index => setActiveIndex(index)}>
        {onBoardImg.map(item => (
          <View key={item?.id} style={styles.slide}>
            <Image
              source={{uri: item?.uri}}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.titleContainer}>
              <Text style={styles.insideTitleCont}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <WSButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={handleNext}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F8',
  },
  skipButton: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  skipText: {
    color: '#686D76',
    fontSize: 15,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  insideTitleCont: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#323643',
    marginHorizontal: 20,
  },
  description: {},
  dotOne: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 9999,
  },
  dotTwo: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: '#0286FF',
    borderRadius: 9999,
  },
});
