import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';


export default function Crear(props) {
    const initialState = {
        nombre: "",
        numero: ""
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveContact = async () => {
        if (state.nombre === "") {
            alert("Por favor Agregue Caracteres");
        } else {
            try {
                await db.collection("contact").add({
                    nombre: state.nombre,
                    numero: state.numero
                });

                console.log(db);

                props.navigation.navigate("Home");
            } catch (error) {
                console.log("Error al guardar el contacto: ", error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput 
                    placeholder='Nombre'
                    value={state.nombre} 
                    onChangeText={(value) => handleChangeText('nombre', value)}
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput 
                    placeholder='Numero' 
                    value={state.numero}
                    onChangeText={(value) => handleChangeText('numero', value)}
                />
            </View>
            <View style={styles.containerInput}>
                <Button title='Guardar' onPress={saveContact} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    containerInput: {
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
    }
});
