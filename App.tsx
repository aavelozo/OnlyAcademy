/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserProfile from './src/views/pages/UserProfile';
const BottomTabNavigator = createMaterialBottomTabNavigator();
const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });


function App(): React.JSX.Element {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={LightTheme}>
          <BottomTabNavigator.Navigator initialRouteName="Home">
            <BottomTabNavigator.Screen name="Home" component={Home} />
            <BottomTabNavigator.Screen name="UserProfile" component={UserProfile} />
            <BottomTabNavigator.Screen name="CameraView" component={CameraView} />
          </BottomTabNavigator.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
