import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BringToFront, SendHorizontal} from 'lucide-react-native';

interface Message {
  content: string;
  role: 'user' | 'assistant';
}

const CareerAITab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState<'english' | 'assamese'>('english');

  // Reset messages when language changes
  useEffect(() => {
    setMessages([]);
  }, [language]);

  const append = async ({content, role}: Message) => {
    setMessages(prev => [...prev, {content, role}]);

    // If this is a user message, simulate an AI response
    if (role === 'user') {
      // Add a small delay to make it feel more natural
      setTimeout(() => {
        const aiResponse = {
          content: getAIResponse(content, language),
          role: 'assistant' as const,
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  // Simple function to simulate different AI responses based on language
  const getAIResponse = (userMessage: string, lang: 'english' | 'assamese') => {
    if (lang === 'english') {
      return `ChatGPT: I received your message: "${userMessage}". How can I help you further?`;
    } else {
      return `নাভদ্যুত: মই আপোনাৰ বাৰ্তা পালো: "${userMessage}". মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?`;
    }
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    void append({content: input, role: 'user'});
    setInput('');
  };

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>
          Assam Intelligence <BringToFront size={22} color="#D1D4C9" />
        </Text>
      </View>

      <View style={styles.languageButtons}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            language === 'english' && styles.activeLanguageButton,
          ]}
          onPress={() => setLanguage('english')}>
          <Text
            style={[
              styles.languageButtonText,
              language === 'english' && styles.activeLanguageButtonText,
            ]}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.languageButton,
            language === 'assamese' && styles.activeLanguageButton,
          ]}
          onPress={() => setLanguage('assamese')}>
          <Text
            style={[
              styles.languageButtonText,
              language === 'assamese' && styles.activeLanguageButtonText,
            ]}>
            Assamese
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const MessageList = () => (
    <ScrollView
      style={styles.messageContainer}
      contentContainerStyle={styles.messageContentContainer}>
      {messages.map((message, index) => (
        <View
          key={index}
          style={[
            styles.messageBase,
            message.role === 'user'
              ? styles.userMessage
              : styles.assistantMessage,
          ]}>
          <Text
            style={
              message.role === 'user'
                ? styles.userMessageText
                : styles.assistantMessageText
            }>
            {message.content}
          </Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <View style={styles.contentContainer}>
          {messages.length ? (
            <>
              <View style={styles.chatHeader}>
                <Text style={styles.chatHeaderText}>
                  {language === 'english' ? 'ChatGPT' : 'নাভদ্যুত (Navdyut)'}
                </Text>
              </View>
              <MessageList />
            </>
          ) : (
            <Header />
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder={
              language === 'english' ? 'Ask in English...' : 'অসমীয়াত সোধক...'
            }
            placeholderTextColor="#E2F1E7"
            multiline
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.7}>
            <SendHorizontal size={22} color="#D1D4C9" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CareerAITab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152A38',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    maxWidth: 384,
    alignSelf: 'center',
    gap: 20,
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#D1D4C9',
  },
  languageButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  languageButton: {
    backgroundColor: '#29435C',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3b5998',
  },
  activeLanguageButton: {
    backgroundColor: '#3b5998',
    borderColor: '#5d7cbd',
  },
  languageButtonText: {
    color: '#D1D4C9',
    fontSize: 14,
    fontWeight: '500',
  },
  activeLanguageButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  aiInfo: {
    fontSize: 12,
    color: '#8b9cb0',
    textAlign: 'center',
  },
  chatHeader: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#29435C',
    marginBottom: 8,
  },
  chatHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D1D4C9',
  },
  headerSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  highlightText: {
    color: '#000',
  },
  messageContainer: {
    flex: 1,
    marginVertical: 16,
  },
  messageContentContainer: {
    gap: 16,
    paddingBottom: 16,
  },
  messageBase: {
    maxWidth: '80%',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3b82f6',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFDF0',
  },
  userMessageText: {
    color: '#fff',
    fontSize: 14,
  },
  assistantMessageText: {
    color: '#000',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 57,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#29435C',
    borderRadius: 16,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingRight: 32,
    color: '#D1D4C9',
    ...Platform.select({
      ios: {
        paddingVertical: 8,
      },
      android: {
        paddingVertical: 4,
      },
    }),
  },
  submitButton: {
    position: 'absolute',
    right: 6,
    bottom: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
