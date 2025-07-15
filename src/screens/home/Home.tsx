import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { TapButton } from '@/components';
import { RootStackParamList } from '@/types';

const meditationHomeScreenImg = require('@/assets/images/mediation-home-screen.jpg');

export const Home = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground source={meditationHomeScreenImg} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.text} variant="displaySmall">
          My Meditation Moment
        </Text>
        <View style={styles.buttonContainer}>
          <TapButton onPress={() => navigation.navigate('MeditationDisplays')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  text: {
    color: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
  },
});
