import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Modal, Button, Keyboard, TextInput, Alert, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import RoundButton from './RoundButton';
import {colors} from '../utils/colors'

const AddCityModal = props => {

    const [textCity, setTextCity] = useState('')

    const changeTextHandler = (text) => {
        setTextCity(text)
    }

    const memorizedHandleClick = () => {
        if (textCity.trim() === '') {
            Alert.alert('Attenzione', 'Devi inserire il nome di una città')
            return
        }
        props.addCity(textCity)
        setTextCity('')
    }


    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Aggiungi una città</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                        <TextInput autoCorrect={false} placeholder='Aggiungi una città' onChangeText={changeTextHandler} value={textCity} style={styles.textInput} />
                        <RoundButton add={memorizedHandleClick} />
                    </View>
                    <TouchableOpacity onPress={props.closeModal}>
                        <View style={styles.containerRoundB}>
                            <Image style={styles.tinyLogo} source={require('../assets/closeb.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderBottomWidth: 1,
        width: '80%',
        marginHorizontal: 10,
        borderBottomColor: colors.mainOrange,
        paddingHorizontal: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 25
    },
    containerRoundB: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },
})

export default AddCityModal