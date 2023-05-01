import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>NeighborhoodNooks</Text>
            <Text style={styles.subtitle}>Discover local hidden gems</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SearchPage')}
            >
                <Text style={styles.buttonText}>Explore Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#00bcd4',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        color: '#757575',
    },
    button: {
        backgroundColor: '#00bcd4',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff',
    },
});

export default HomePage;
