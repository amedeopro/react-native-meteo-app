import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';


const RoundButton = props => {
    return (
        <TouchableOpacity onPress={props.add}>
            <View style={styles.container}>
                <Image style={styles.tinyLogo} source={require('../assets/plus.png')} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35
    },
    tinyLogo: {
        width: 30,
        height: 30,
        tintColor: 'white'
    },

})

export default RoundButton