import { Text, View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Repo from '../../data/contacts';

const ContactList = () => {
  return (
    <FlatList
      data={Repo}
      keyExtractor={(item) => item.nombre} // Usa 'nombre' como clave única para cada elemento
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>Nombre: {item.nombre}</Text>
          <Text style={styles.number}>Número: {item.numero}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Esto agrega una sombra en Android
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  number: {
    fontSize: 16,
    color: '#666',
  },
});

export default ContactList;
