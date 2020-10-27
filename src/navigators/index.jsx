import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import theme from '../styles/theme.style';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.PRIMARY_COLOR,
        },
        headerTintColor: theme.TEXT_LIGHT,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
