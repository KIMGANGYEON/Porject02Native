import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Book from './screens/Tabs/Book';
import Search from './screens/Tabs/Search';
import Mypage from './screens/Tabs/Mypage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="Book" component={Book} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
};

export default Tabs;
