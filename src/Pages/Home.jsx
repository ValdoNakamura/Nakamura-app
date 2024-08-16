import { Text, Image, View, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>  
      <Text>Hola mi nombre es valdo</Text>
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