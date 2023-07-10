import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import Donation from './src/screens/Donation';
import Details from './src/screens/Details';
import DetailsScreen from './src/components/DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsScreenBottom = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Escolha o icone com base no nome da rota
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Details') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } else if (route.name === 'Donation') {
          iconName = focused ? 'ios-card' : 'ios-card-outline';
        }

        // Você pode retornar qualquer componente que gostaria de renderizar aqui.
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#3a4e5d',
      tabBarInactiveTintColor: 'gray'
    })}
  >
    <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name='Donation' component={Donation} options={{ headerShown: false }} />
    <Tab.Screen name='Details' component={Details} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Tabs' component={TabsScreenBottom} options={{ headerShown: false }} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name='Details' component={Details} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

