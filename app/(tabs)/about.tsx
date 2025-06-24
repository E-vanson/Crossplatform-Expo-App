import { Text, View, StyleSheet } from "react-native";

// Entry Point Of The App

export default function AboutScreen() {
  return (
        <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff',
  },
})
