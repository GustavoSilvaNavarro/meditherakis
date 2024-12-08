import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const TapButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.circleButton} onPress={onPress}>
      <Text style={styles.buttonText}>Tap</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 150, // Diameter of the circle
    height: 150,
    borderRadius: 100, // Half of width/height to make it a circle
    backgroundColor: 'rgba(255, 255, 2555, 0.05)', // Subtle white-to-grayish color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Optional: Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  buttonText: {
    color: '#fff', // Darker text for contrast
    fontSize: 18,
  },
});
