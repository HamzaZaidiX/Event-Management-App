import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Rating } from 'react-native-ratings';

const Feedback = ({ route, theme }) => {
//   const scheme = useColorScheme();
//   const isDarkMode = scheme === 'dark';
//   const theme = {
//     backgroundColor: isDarkMode ? '#000' : '#fff',
//     textColor: isDarkMode ? '#fff' : '#000',
//     borderColor: isDarkMode ? '#888' : '#ccc',
//   };

  const eventId = route?.params?.eventId || 'Unknown'; // Safely access eventId
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const submitFeedback = async () => {
    try {
      const feedback = {
        eventId,
        rating,
        comments,
      };

      // Save feedback to AsyncStorage (or send it to the backend)
      await AsyncStorage.setItem(`feedback_${eventId}`, JSON.stringify(feedback));

      // Show a confirmation message
      alert('Thank you for your feedback!');


    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
        <Text style={[styles.heading, { color: theme.text }]}>Event Feedback</Text>

        {/* Event Rating */}
        <Text style={[styles.label, { color: theme.text }]}>Rate the Event:</Text>
        <Rating
            type="star"
            startingValue={0}
            ratingCount={5}
            imageSize={30}
            onFinishRating={setRating}
        />

        {/* Comments */}
        <Text style={[styles.label, { color: theme.text }]}>Comments:</Text>
        <TextInput
            style={[
                styles.input,
                {
                    borderColor: theme.borderColor,
                    color: theme.text,
                },
            ]}
            placeholder="Write your comments here..."
            placeholderTextColor={theme.placeholder}
            multiline
            value={comments}
            onChangeText={setComments}
        />

        {/* Submit Button */}
        <View style={{ borderRadius: 5, marginTop: 10 }}>
            <Button title="Submit Feedback" onPress={submitFeedback} />
        </View>
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    height: 80,
    textAlignVertical: 'top',
  },
});

export default Feedback;
