import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

function MyHome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/myhome.jpg')} style={{ width: 200, height: 150 }} />
        <Text style={styles.title}>When agents compete, you win!</Text>
        <Text style={styles.description}>
          RealChoice™ Selling analyzes thousands of local agents and finds the best to compete for you.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Compare agents</Text>
        </TouchableOpacity>
        <View style={styles.trackContainer}>
          <Text style={styles.trackTitle}>Track the <Text style={styles.redText}>RealValue™</Text> of your home with multiple estimates</Text>
          <Text style={styles.trackDescription}>
            View multiple home value estimates, track your equity, and see local market trends
          </Text>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Claim your home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MyHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    width: 260,
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    width: 310,
  },
  button: {
    backgroundColor: 'black',
    padding: 6,
    borderRadius: 25,
    paddingHorizontal:10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 6,
    borderRadius: 25,
    borderWidth: 0.6,
    paddingHorizontal:10
  },
  buttonText1: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trackContainer: {
    marginTop: 60,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 310,
    color: '#000',
  },
  redText: {
    color: 'red',
  },
  trackDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    width: 310,
  },
});
