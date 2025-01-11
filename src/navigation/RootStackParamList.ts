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
};
export default RootStackParamList;
