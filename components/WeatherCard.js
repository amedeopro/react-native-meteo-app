import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const WeatherCard = props => {
    return (
        <TouchableOpacity style={styles.card} onPress={props.remove}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 60,
        width: '80%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 12,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginBottom: 20,
        borderRadius: 8,
    },
    title: {
        color: 'black',
        fontSize: 22
    }

})

export default WeatherCard