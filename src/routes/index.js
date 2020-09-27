import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator 
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#000',
      // headerStyle: {
      //   backgroundColor: '#ccc'
      // },
      cardStyle: {
        backgroundColor: '#ccc'
      }
    }}
  >
    <Auth.Screen name="Login" component={Login} />
  </Auth.Navigator>
);

export default AuthRoutes;