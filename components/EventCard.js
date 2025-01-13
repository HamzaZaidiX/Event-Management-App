import React from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EventCard = ({ event, navigation, onRegister, theme }) => {

  const handleRegister = async (eventId) => {
    try {
      // Save registration data locally
      await AsyncStorage.setItem(`registration_${eventId}`, JSON.stringify(event));
      // Show confirmation message
      ToastAndroid.show('Registered successfully!', ToastAndroid.SHORT);
      // Call the onRegister callback to navigate
      onRegister(event.id);
    } catch (error) {
      console.error('Error saving registration:', error);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.eventName}</Text>
      <Text>{event.description}</Text>
      <Text>Venue: {event.eventVenue}</Text>
      <Text>Date: {event.eventDate}</Text>
      <Text>Status: {event.isCompleted ? 'Completed' : 'Upcoming'}</Text>
      <View style={{ borderRadius: 5, marginTop: 10 }}>
      <Button title="Register" onPress={() => handleRegister(event.id)} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default EventCard;