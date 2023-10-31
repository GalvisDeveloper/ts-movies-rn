import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer> 
      {/* <StackNavigator /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
