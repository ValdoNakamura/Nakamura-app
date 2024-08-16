import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

import appFirebase from '../../firebase-config'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function Register(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const registrar = async () => {
    if (email === '' || password === '') {
      setErrorMessage('Por favor ingrese todos los campos.')
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      Alert.alert('Registro exitoso', 'La cuenta ha sido creada exitosamente.')
      props.navigation.navigate('Login')
    } catch (error) {
      console.log(error)
      let message = 'No se pudo crear la cuenta.'
      if (error.code === 'auth/email-already-in-use') {
        message = 'Este correo ya está en uso.'
      } else if (error.code === 'auth/invalid-email') {
        message = 'Correo electrónico inválido.'
      } else if (error.code === 'auth/weak-password') {
        message = 'La contraseña es demasiado débil.'
      }
      setErrorMessage(message)
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Caballero.jpeg')} style={styles.profileImage} />
      <View style={styles.card}>
        <Text style={styles.title}>Registro</Text>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TextInput 
          placeholder='Correo Electrónico' 
          style={styles.input} 
          onChangeText={(text) => setEmail(text)} 
        />
        <TextInput 
          placeholder='Contraseña' 
          style={styles.input} 
          secureTextEntry={true} 
          onChangeText={(text) => setPassword(text)} 
        />
        <TouchableOpacity style={styles.button} onPress={registrar}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.loginLink}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
    borderColor: '#525FE1',
    borderWidth: 2,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#525FE1',
  },
  input: {
    height: 50,
    borderColor: '#525FE1',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
    color: '#525FE1',
    textAlign: 'center',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
})
