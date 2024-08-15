import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

import appFirebase from '../../credenciales'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)


export default function Login(props) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const logueo = async()=>{
    try {
      await signInWithEmailAndPassword(auth, email, password)
      Alert.alert('Iniciando sesion', 'Accediendo...')
      props.navigation.navigate('Home')
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <View style={style.padre}>
      <View>
        <Image source={require('../../assets/Caballero.jpeg')} style={style.profile}/>
      </View>

      <View style={style.tarjeta}>
        <View style={style.cajatexto}>
          <TextInput placeholder='Correo Electronico' style={{paddingHorizontal:15}} onChangeText={(text)=>setEmail(text)}/>
        </View>

        <View style={style.cajatexto}>
          <TextInput placeholder='Contraseña' style={{paddingHorizontal:15}} secureTextEntry={true}  onChangeText={(text)=>setPassword(text)}/>
        </View>

        <View style={style.padreboton}>
          <TouchableOpacity style={style.cajaboton} onPress={logueo}>
            <Text style={style.textoboton}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  padre:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'pink'
  },
  profile:{
    width:100,
    height:100,
    borderRadius:50
  },
  tarjeta:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    width:'90%',
    padding:20,
    shadowColor:'#000',
    textShadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5
  },
  cajatexto:{
    paddingVertical:20,
    backgroundColor:'#cccccc60',
    borderRadius:30,
    marginVertical:10
  },
  padreboton:{
    alignItems:'center'
  },
  cajaboton:{
    backgroundColor:'#525FE1',
    borderRadius:30,
    paddingVertical:20,
    width:150,
    marginTop:20
  },
  textoboton:{
    textAlign:'center',
    color:'black'
  }
});