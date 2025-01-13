import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ToastAndroid } from 'react-native';
import axios from 'axios';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Registration from './Registration';


const Dashboard = ({ navigation, theme }) => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [registeredEvent, setRegisteredEvent] = useState(null);

useEffect(() => {
    axios.get('https://677ff4e90476123f76a8e8ba.mockapi.io/events/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter(event =>
    (event.eventName && event.eventName.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (event.eventVenue && event.eventVenue.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  const handleRegister = async (eventId) => {
    try {
      const event = events.find(e => e.id === eventId);
      if (event) {
        await AsyncStorage.setItem(`registration_${eventId}`, JSON.stringify(event));
        ToastAndroid.show('Registered successfully!', ToastAndroid.SHORT);
        // Update the event state to reflect the registration
        setEvents(events.map(e => e.id === eventId ? { ...e, isRegistered: true } : e));
        // Set the registered event to show the Registration screen
        setRegisteredEvent(event);
      }
    } catch (error) {
      console.error('Error saving registration:', error);
    }
  };

  if (registeredEvent) {
    return <Registration event={registeredEvent} />;
  }
  const handleBack = () => {
    setRegisteredEvent(null);
  };

  if (registeredEvent) {
    return <Registration event={registeredEvent} onBack={handleBack} />;
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Event Dashboard</Text>
      <SearchBar style={[{ color: theme.placeholder }]} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <Text style={[{textAlign: 'center'}, { color: theme.text }]}>Loading events...</Text>
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id || Math.random().toString()}
          renderItem={({ item }) => (
            <EventCard event={item} navigation={navigation} onRegister={handleRegister} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Dashboard;