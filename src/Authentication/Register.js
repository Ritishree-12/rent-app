import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(true);
    const navigation = useNavigation();
 

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleEmailChange = (text) => {
        console.log("Email changed:", text);
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        console.log("Password changed:", text);
        setPassword(text);
    };

  const createUser=()=>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    Alert.alert('Sign Up Success', 'You are registered successfully! Please login',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ])
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert('That email address is already in use!')
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Sign up</Text> */}

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    // placeholder="Email"
                    value={email}
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.passwordContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.passwordInput}
                    value={password}
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={handlePasswordChange}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
                    <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSubscribed}
                    onValueChange={setIsSubscribed}
                />
                <Text style={styles.checkboxLabel}>Send me Realtor.com® emails that include news, tips and promotions.</Text>
            </View>

            <TouchableOpacity style={styles.signUpButton} onPress={createUser}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>

            <TouchableOpacity style={styles.socialButton}>
                <Icon name="google" size={24} color="#DB4437" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <Icon name="facebook" size={24} color="#4267B2" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Already have an account? Log in</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>By using the Realtor.com® app, you agree to our <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.realtor.com/terms-of-service')}>Terms of Use</Text> and <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.realtor.com/privacy-policy')}>Privacy Notice</Text></Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backButton: {
        alignSelf: 'flex-start',
    },
    backButtonText: {
        fontSize: 24,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: '#000',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
        marginBottom: 20,
    },
    passwordInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        paddingRight: 40, 
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: '70%',
        transform: [{ translateY: -12 }],
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 14,
        flex: 1,
    },
    signUpButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
        color: '#777',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        marginBottom: 10,
        borderRadius: 25,
        borderWidth: 1,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 40,
        marginLeft:20
    },
    socialButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
        fontSize: 14,
    },
    termsText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 12,
        marginTop: 20,
    },
    linkText: {
        color: '#000',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
});

export default Register;