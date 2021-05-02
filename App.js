/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';

const Stack = createStackNavigator();

export default class App extends React.Component { 
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              headerTitle: "Instagram", 
              headerTitleAlign: 'center',
              headerLeft: () =>  <Icon name='camera-sharp' style={{ paddingLeft: 11 }} />,
              headerRight: () => <Icon style={{ paddingRight: 10 }} name='send' />
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

