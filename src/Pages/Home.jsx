import { Text, Image, View, StyleSheet } from 'react-native'
import React from 'react'
import ContactList from '../Components/ContactList'


export default function Home() {
  return (
    <View>  
      <ContactList/>
    </View>
  )
}

const styles = StyleSheet.create({
  cuadroInfo:{
    width:200,
    height:300,
    justifyContent:'center',
    alignItems:'center'
  }
})