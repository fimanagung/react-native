import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NoteFormScreen from './screens/NoteFormScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Catatan Harian Anak Kos',
            headerTitleStyle: {
              fontSize: 50,
              fontWeight: 'bold',
              color: '#333',
            },
          }} 
        />
        <Stack.Screen 
          name="AddNote" 
          component={NoteFormScreen} 
          options={{ 
            title: 'Tambah / Edit Catatan',
            headerTitleStyle: {
              fontSize: 70,
              fontWeight: 'bold',
              color: '#333',
            },
          }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{ 
            title: 'Detail Catatan',
            headerTitleStyle: {
              fontSize: 40,
              fontWeight: 'bold',
              color: '#333',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
