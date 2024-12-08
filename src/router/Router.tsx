import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './RootStack';

export const Router = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
