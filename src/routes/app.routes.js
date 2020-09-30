import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator 
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#000',
      // headerStyle: {
      //   backgroundColor: '#ccc'
      // },
      // cardStyle: {
      //   backgroundColor: '#ccc'
      // }
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;