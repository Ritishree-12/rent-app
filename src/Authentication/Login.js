import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { GoogleSigninButton } from 'react-native-google-signin'; 

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSignUp = () => {
        auth().signInWithEmailAndPassword(email, password).then(() => {
            Alert.alert("You are Logged In, Successfully")
            navigation.navigate('HomeScreen');
        }).catch(error => {
            console.log(error)
        })
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
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

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Log in</Text>
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

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.loginText}>Don't have an account?<Text style={styles.linkText}> Sign up</Text></Text>
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
        top: '65%',
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
        borderRadius: 25,
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
        alignItems:'center',
        textAlign:'center'
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

export default Login;
