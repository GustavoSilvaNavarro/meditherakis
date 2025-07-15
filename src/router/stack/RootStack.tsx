import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeTabNavigation } from '../tabs/HomeTabNavigation';

const MainStack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainAppTabs" component={HomeTabNavigation} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
};
