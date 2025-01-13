import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FeedbackForm = ({ eventId }) => {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const submitFeedback = async () => {
    const feedback = { eventId, rating, comments };
    try {
      await AsyncStorage.setItem(`feedback_${eventId}`, JSON.stringify(feedback));
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Event Rating (1–5 stars):</Text>
      <TextInput
        style={styles.input}
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <Text>Comments:</Text>
      <TextInput
        style={styles.input}
        value={comments}
        onChangeText={setComments}
      />
      <Button title="Submit Feedback" onPress={submitFeedback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});

export default FeedbackForm;