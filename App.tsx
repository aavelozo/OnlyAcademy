/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme, adaptNavigationTheme, ActivityIndicator } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './src/views/pages/AppStack';
import PaymentStack from './src/views/pages/Payment';
import { ToastProvider } from 'react-native-toast-notifications';
const InitialStack = createNativeStackNavigator();

const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

const linking = {
  prefixes: ["onlyacademy://"],
  config: {
    initialRouteName: 'PaymentStack',
    screens: {
      PaymentStack: {
        path: 'PaymentStack'
      },
      AppStack: {
        path: 'AppStack'
      },
      checkout_success: {
        path: 'checkout/success'
      }
    }
  }
};

function App(): React.JSX.Element {
  const [payment,setPayment] = useState(null);
  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaProvider>
        <ToastProvider> 
          <NavigationContainer theme={LightTheme} linking={linking} fallback={<ActivityIndicator color="blue" size="large" />}>
            <InitialStack.Navigator 
              initialRouteName='PaymentStack' 
              screenOptions={{headerShown: false}}
            >
              <InitialStack.Screen name='PaymentStack' component={PaymentStack} />
              <InitialStack.Screen name='AppStack' component={AppStack} />
              <InitialStack.Screen name='checkout_success' component={AppStack} />
            </InitialStack.Navigator>
          </NavigationContainer>
        </ToastProvider> 
      </SafeAreaProvider>      
    </PaperProvider>
  );
}

export default App;
