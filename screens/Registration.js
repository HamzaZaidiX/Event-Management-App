import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, useColorScheme, Button  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import BackButton from '@/components/BackButton';


const Registration = ({ event }) => {
  const [registeredEvent, setRegisteredEvent] = useState(event);
  // const scheme = useColorScheme();
  // const isDarkMode = scheme === 'dark';
  // const theme = {
  //   backgroundColor: isDarkMode ? '#212121' : '#fff',
  //   textColor: isDarkMode ? '#fff' : '#000',
  //   borderColor: isDarkMode ? '#888' : '#ccc',
  // };
  useEffect(() => {
    if (!event) {
      fetchEvent();
    }
  }, []);

  const fetchEvent = async () => {
    try {
      const eventData = await AsyncStorage.getItem(`registration_${event.id}`);
      if (eventData) {
        setRegisteredEvent(JSON.parse(eventData));
      }
    } catch (error) {
      console.error('Error fetching event:', error);
    }
  };

  const navigation = useNavigation();

  const handleMarkAsComplete = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Feedback',
      })
    );
  };
  if (!registeredEvent) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>Registered Event</Text>
      <Text style={styles.title}>{registeredEvent.eventName}</Text>
      <Text>{registeredEvent.description}</Text>
      <Text>Venue: {registeredEvent.eventVenue}</Text>
      <Text>Date: {registeredEvent.eventDate}</Text>
      <Text>
        Status: {registeredEvent.isCompleted ? 'Completed' : 'Upcoming'}
      </Text>
      {/* Mark as Complete Button */}
      <Button style={styles.button} title="Event Completed" onPress={handleMarkAsComplete} />
    
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Registration;