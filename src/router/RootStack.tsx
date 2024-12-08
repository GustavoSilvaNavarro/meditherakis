import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home, MeditationDisplays } from '@/screens';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="MeditationDisplays" component={MeditationDisplays} />
    </Stack.Navigator>
  );
};
