import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';

const Nav = createNativeStackNavigator();

const Routes = () => (
  <Nav.Navigator screenOptions={{headerShown: false}}>
    <Nav.Screen name="Tabs" component={Tabs} />
  </Nav.Navigator>
);

export default Routes;
