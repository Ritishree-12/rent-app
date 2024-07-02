import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
    const filterButtons = [
        { id: '1', title: 'Filters' },
        { id: '2', title: 'Price' },
        { id: '3', title: 'Bed / Bath' },
        { id: '4', title: 'Property Type' },
    ];
    const propertyData = [
        {
            id: '1',
            name: 'Property 1',
            price: '$2,995,000',
            location: 'Porter Ranch, CA 91326',
            image: require('../../assets/home1.jpg'),
            details: '5 bd • 5.5 ba • 5,200 sqft • 9,522 sqft lot',
            address: '11740 Abbey Ln'
        },
        {
            id: '2',
            name: 'Property 2',
            price: '$2,995,000',
            location: 'Porter Ranch, CA 91326',
            image: require('../../assets/home2.jpg'),
            details: '5 bd • 5.5 ba • 5,200 sqft • 9,522 sqft lot',
            address: '11740 Abbey Ln'
        },
        {
            id: '3',
            name: 'Property 3',
            price: '$2,995,000',
            location: 'Porter Ranch, CA 91326',
            image: require('../../assets/home3.jpg'),
            details: '5 bd • 5.5 ba • 5,200 sqft • 9,522 sqft lot',
            address: '11740 Abbey Ln'
        },
        {
            id: '4',
            name: 'Property 4',
            price: '$2,995,000',
            location: 'Porter Ranch, CA 91326',
            image: require('../../assets/home4.jpg'),
            details: '5 bd • 5.5 ba • 5,200 sqft • 9,522 sqft lot',
            address: '11740 Abbey Ln'
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Los Angeles, CA"
                        onChangeText={(text) => { }}
                    />
                    <Text style={styles.mapText}>
                    <Icon name="search" size={24} color="gray" style={styles.searchIcon} /> 
                    Map
                    </Text>
                </View>
                <FlatList
                    style={styles.buttonList}
                    horizontal
                    data={filterButtons}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>{item.title}</Text>
                            {/* <Icon name="filter-list" size={16} color="#000" style={styles.buttonIcon} /> */}
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <FlatList
                style={styles.propertyList}
                data={propertyData}
                renderItem={({ item }) => (
                    <View style={styles.propertyItem}>
                        <Image source={item.image} style={styles.propertyImage} />
                        <View style={styles.propertyInfo}>
                            <Text style={styles.propertyPrice}>{item.price}</Text>
                            <Text style={styles.propertyName}>{item.name}</Text>
                            <Text style={styles.propertyDetails}>{item.details}</Text>
                            <View style={styles.propertyDetailsContainer}>
                                <View style={styles.propertyLocationContainer}>
                                    <Text style={styles.propertyLocation}>{item.location}</Text>
                                    <Text style={styles.propertyAddress}>{item.address}</Text>
                                </View>
                                <TouchableOpacity style={styles.contactButton}>
                                    <Text style={styles.contactButtonText}>Contact an agent</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        // width:200
    },
    mapText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    buttonList: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical: 4,
        paddingHorizontal: 15,
        marginRight: 10,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 0.6,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 5,
    },
    buttonIcon: {
        marginLeft: 5,
    },
    propertyList: {
        flex: 1,
        paddingHorizontal: 10,
    },
    propertyItem: {
        alignItems: 'center',
        marginBottom: 20,
    },
    propertyImage: {
        width: '95%',
        height: 260,
        borderRadius: 20,
        marginBottom: 10,
    },
    propertyInfo: {
        width: '95%',
        paddingHorizontal: 10,
    },
    propertyPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    propertyName: {
        fontSize: 16,
        color: '#333',
    },
    propertyDetails: {
        fontSize: 14,
        color: '#777',
    },
    propertyDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    propertyLocationContainer: {
        flex: 1,
    },
    propertyLocation: {
        fontSize: 14,
        color: '#777',
    },
    propertyAddress: {
        fontSize: 14,
        color: '#777',
    },
    contactButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    contactButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Search;
