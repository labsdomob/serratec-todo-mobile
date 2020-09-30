import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';

const BottomTab = createBottomTabNavigator();
// const App = createStackNavigator();

const AppRoutes = () => (
  <BottomTab.Navigator 
    initialRouteName="Dashboard"
  >
    <BottomTab.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="view-dashboard" color="#000" size={30} />
        ),
      }}
    />
    <BottomTab.Screen 
      name="Tarefas" 
      component={Tarefas} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="playlist-edit" color="#000" size={30} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default AppRoutes;