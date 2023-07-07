import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import Details from './src/screens/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsScreenBottom = () => (
  <Tab.Navigator>
    <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name='Details' component={Details} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tabs' component={TabsScreenBottom}  options={{ headerShown: false }}/>
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

