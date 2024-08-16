import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Crear(){

    const [state, setState] = useState({
        nombre: '',
        numero: ''
    });

    const handleChangeText = (name, value) =>{
        setState({...state, [name]: value});
    };


    return (
      <View style={styles.container}>
        <View style={styles.conteinerInput}>
            <TextInput placeholder='Nombre' onChange={(value) => handleChangeText('nombre', value)}/>
        </View>
        <View style={styles.conteinerInput}>
            <TextInput placeholder='Numero' onChange={(value) => handleChangeText('numero', value)}/>
        </View>
        <View style={styles.conteinerInput}>
            <Button title='Guardar' onPress={() => console.log(state)}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35
    },
    conteinerInput:{
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
    }
})