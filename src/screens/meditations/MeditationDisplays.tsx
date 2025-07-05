import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export const MeditationDisplays = () => {
  const handlePress = () => {
    // Handle the press event here
    console.log("Text pressed!");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      style={styles.scrollView}
      keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <Text variant="displayMedium" style={styles.quote}>
        "Time is your most valuable resource. And if you think about it, your only resource."
      </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Makes sure scrolling covers the full area
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    padding: 20,
  },
  scrollView: {
    flex: 1, // Ensures the scrollable area fills the screen
    backgroundColor: 'purple',
  },
  quote: {
    textAlign: 'center',
    color: '#fff',
    paddingHorizontal: 20,
  },
});



// // import { ScrollView, StyleSheet } from 'react-native';
// // import { Text } from 'react-native-paper';
// // import { TouchableOpacity } from 'react-native';

// export const MeditationDisplays = () => {
//   const handlePress = () => {
//     // Handle the press event here
//     console.log("Text pressed!");
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.scrollViewContainer}
//       style={styles.scrollView}
//       keyboardShouldPersistTaps="handled">
//       <TouchableOpacity onPress={handlePress}>
//         <Text variant="displayLarge" style={styles.quote}>
//           "Time is your most valuable resource. And if you think about it, your only resource."
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollViewContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'purple',
//   },
//   quote: {
//     textAlign: 'center',
//     color: '#fff',
//     paddingHorizontal: 20,
//   },
// });
