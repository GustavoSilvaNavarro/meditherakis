import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home,MeditationDisplays } from '@/screens';

const MediStack = createNativeStackNavigator();

export const MeditationStack = () => {
  return (
    <MediStack.Navigator initialRouteName="Home">
      <MediStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <MediStack.Screen name="MeditationDisplays" component={MeditationDisplays} options={{ headerTitle: '' }} />
    </MediStack.Navigator>
  );
};
