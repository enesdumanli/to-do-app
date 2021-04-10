import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './screens/Details';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Do These!', headerStyle: {
              backgroundColor: '#f4511e',
            }
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

