import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const More = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User Logged out!');
        navigation.navigate('Login');
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.email}>abhimittal342@gmail.com</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.inviteContainer}>
        <Text style={styles.inviteTitle}>Buying or renting together?</Text>
        <Text style={styles.inviteDescription}>
          Like and sort your favorite homes. Comment on your saved listings. All in one shared space.
        </Text>
        <TouchableOpacity>
          <Text style={styles.inviteLink}>Invite a partner</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>General settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My home</Text>
        <TouchableOpacity>
          <Text style={styles.optionText}>Estimate my home value</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Sell My Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Compare agents</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>View home equity rates</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buying a home</Text>
        {/* Add your options here */}
      </View>

      <View style={styles.section}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Contact support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    // No need for marginBottom here as it's handled by the header container
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
  },
  inviteContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  inviteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inviteDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  inviteLink: {
    fontSize: 14,
    color: '#1e90ff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    paddingVertical: 10,
  },
});
