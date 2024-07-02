// Notification.js

import React,{useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

const Notification = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        return unsubscribe;
      }, []);
      const getDeviceToken = async () => {
        const token = await messaging().getToken();
      
        console.log('Device Token:', token);
    };

    getDeviceToken();

    return (
        <View style={styles.container}>
            <View  style={styles.title}>
                <Text style={styles.title}>Get notifications</Text>
                <Text style={styles.notifyText}>Be the first to know about the listings and price reductions</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        alignItems: 'center',
        display: 'flex',
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000'
    },
    notifyText:{
        width:270,
        alignContent:'center',
        textAlign:'center'
    }
});

export default Notification;
