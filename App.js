import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider style={{paddingTop: 24}}>
      <StatusBar style="light" backgroundColor="#000" />
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
