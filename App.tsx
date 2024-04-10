/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Lab07 from './src/screen/Lab07';
import Lab0703 from './src/screen/Lab0703';
import Lab08 from './src/screen/Lab08';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lab07"
          component={Lab07}
          options={{
            title: 'Lab 07',
          }}
        />
        <Stack.Screen
          name="Lab0703"
          component={Lab0703}
          options={{
            title: 'Lab 07 - Đăng nhập với Google',
          }}
        />

        <Stack.Screen
          name="Lab08"
          component={Lab08}
          options={{
            title: 'Lab 08',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
