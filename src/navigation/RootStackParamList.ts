import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  LogInScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SeeAllGT: undefined;
  SeeAllMT: undefined;
  SeeAllMini: undefined;
  TestScreenGT: {
    topicName: string;
    question: string;
    options: Array<{
      id: string;
      text: string;
    }>;
  };
  TestScreenMT: undefined;
  PersonalLab: undefined;
};

export default RootStackParamList;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen' // Replace with the screen you're navigating to
>;
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LogInScreen' // Replace with the screen you're navigating to
>;
