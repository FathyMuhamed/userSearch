import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import UserScreen from './src/screens/UserScreen';
import RepoScreen from './src/screens/RepoScreen';

const HomeStack = createStackNavigator()
export default function App() {
  return <NavigationContainer>
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="User" component={UserScreen} />
      <HomeStack.Screen name="Repo" component={RepoScreen} />
    </HomeStack.Navigator>
  </NavigationContainer>

}

