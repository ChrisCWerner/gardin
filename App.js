import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Huffleton from './components/OnOffButton'

export default function App() {
  return (
    <View style={styles.container}>
      <Huffleton
        textOn="Ligado"
        textOff="Desligado"
        colorOn="green"
        colorOff="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
