import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const meditationHomeScreenImg = require('assets/images/mediation-home-screen.jpg');

export const Home = (): React.JSX.Element => {
  return (
    <ImageBackground source={meditationHomeScreenImg} style={styles.background} resizeMode="cover">
    <View style={styles.overlay}>
      <Text style={styles.text}>Welcome to Daily Meditation</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
});
