import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/Authstack';



const App = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
};

export default App;
