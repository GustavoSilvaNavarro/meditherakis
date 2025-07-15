import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RecordQuotePage } from '@/screens';

import { MeditationStack } from '../stack';

const HomeTab = createBottomTabNavigator();

export const HomeTabNavigation = () => {
  return (
    <HomeTab.Navigator screenOptions={{ headerShown: false }}>
      <HomeTab.Screen name="HomeTab" component={MeditationStack} options={{ title: 'Home' }} />
      <HomeTab.Screen name="RecordTab" component={RecordQuotePage} options={{ title: 'Record' }} />
    </HomeTab.Navigator>
  );
};
