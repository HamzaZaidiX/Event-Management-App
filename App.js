import React, { useState } from 'react';
import { View, Switch, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/Dashboard';
import Registration from './screens/Registration';
import Feedback from './screens/Feedback';
import { NavigationIndependentTree } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from './components/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const scheme = useColorScheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <NavigationIndependentTree>
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
    {/* Theme Toggle */}
    <View style={[styles.switchContainer, { backgroundColor: currentTheme.background }]}>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </View>

    {/* Bottom Tabs */}
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hides default headers for screens
          tabBarStyle: {
            backgroundColor: currentTheme.background,
          },
          tabBarActiveTintColor: currentTheme.text,
          tabBarInactiveTintColor: isDarkMode ? '#888' : '#aaa',
        
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = 'home-outline';
            }  else if (route.name === 'Feedback') {
              iconName = 'chatbubble-ellipses-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
      <Tab.Screen name="Dashboard" children={() => <Dashboard theme={currentTheme} />} />
      
      <Tab.Screen name="Feedback" children={() => <Feedback theme={currentTheme} />} />
    </Tab.Navigator>
  </NavigationContainer>
  </NavigationIndependentTree>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  switchContainer: {
    alignItems: 'flex-end',
    padding: 10,
  }
});