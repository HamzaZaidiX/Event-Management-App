import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions, useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const goBackToDashboard = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0, // Focus on the first screen
        routes: [{ name: 'Dashboard' }], // Navigate directly to Dashboard
      })
    );
  };

  return (
    <TouchableOpacity onPress={goBackToDashboard} style={styles.backButton}>
      <Icon name="arrow-back" size={24} color="#888888" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: 10,
  },
});

export default BackButton;
