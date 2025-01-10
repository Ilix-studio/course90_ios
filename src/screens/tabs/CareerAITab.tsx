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
import React, {useState} from 'react';
import {SendHorizontal} from 'lucide-react-native';

interface Message {
  content: string;
  role: 'user' | 'assistant';
}

const CareerAITab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const append = async ({content, role}: Message) => {
    setMessages(prev => [...prev, {content, role}]);
    // Implement your chat API logic here
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    void append({content: input, role: 'user'});
    setInput('');
  };

  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Basic AI Chatbot</Text>
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
          {messages.length ? <MessageList /> : <Header />}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask related to your course"
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
  headerTitle: {
    fontSize: 24,
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
