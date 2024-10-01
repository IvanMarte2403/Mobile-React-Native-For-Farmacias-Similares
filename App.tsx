import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importa el GestureHandlerRootView

// Navegation View 
import LoginScreen from './src/screens/SessionScreen/Login'; // Importa la vista de login
import RegisterScreen from './src/screens/SessionScreen/Register'
// styles
const Stack = createStackNavigator();

export default function App() {

  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
          name="Login"
          component={LoginScreen} 
          options = {{headerShown: false}} 
          />
          <Stack.Screen name="Register"
           component={RegisterScreen} 
           options={{headerShown: false}}
           />


        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
