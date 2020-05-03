import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useLinkProps, useNavigation } from '@react-navigation/native';



const City = ({route}) => {
    const navigation = useNavigation();
    const { title } = route.params
        return (
        <View style={styles.container}>
            <Text>Hello from {title}</Text>
            {/* <Button title='Torna Indietro' onPress={() => navigation.goBack()}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default City