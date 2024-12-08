import { RootStack } from './RootStack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};