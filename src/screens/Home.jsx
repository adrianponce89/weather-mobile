import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#AAA',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Home;
