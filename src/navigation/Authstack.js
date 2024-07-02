import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login', }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Sign up' }}
      />
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
