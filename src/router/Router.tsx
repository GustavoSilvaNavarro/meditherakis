import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { RootStack } from './RootStack';

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
