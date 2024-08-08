import React from 'react';
import {Text, View} from 'react-native';
import Routes from './src/routes/Routes';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
