import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

export default function Home(props) {

  // Ejemplo de datos que podrías mostrar en una lista
  const data = [
    { id: '1', name: 'Contacto 1' },
    { id: '2', name: 'Contacto 2' },
    { id: '3', name: 'Contacto 3' },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenido a Nakamura App</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Tus Contactos</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => props.navigation.navigate('Crear')}
        >
          <Text style={styles.addButtonText}>Agregar Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  header: {
    padding: 20,
    backgroundColor: '#525FE1',
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#525FE1',
  },
  item: {
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  itemText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
