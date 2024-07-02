import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropertyListScreen from './PropertyListScreen';
import Notification from './Notification';
import MyHome from './MyHome';
import More from './More';
import Search from './Search';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Search':
                            iconName = focused ? 'search' : 'search-outline';
                            break;
                        case 'My Listings':
                            iconName = focused ? 'list' : 'list-outline';
                            break;
                        case 'Notification':
                            iconName = focused ? 'notifications' : 'notifications-outline';
                            break;
                        case 'My Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'More':
                            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
                            break;
                        default:
                            iconName = 'circle';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="My Listings"
                component={PropertyListScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="My Home"
                component={MyHome}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="More"
                component={More}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default HomeScreen;
