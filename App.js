import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import styles from './components/Styles';
import HomePage from './components/HomePage';
import FirstQ from './components/FirstQ';
import { Button, View, Image, Text, Alert } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
          />
          <Stack.Screen
            name="Questions"
            component={FirstQ}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

