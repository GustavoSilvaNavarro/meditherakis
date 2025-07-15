import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './stack';

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
