import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('hello this is awesome');
  return (
    <View style={styles.container}>
      <Text>{ outputText }</Text>
      <Button title='Change Text' onPress={ () => setOutputText('The text changed')} />
      <StatusBar style="auto"s />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
