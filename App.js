import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Crear from './src/Pages/Crear';
import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
import Register from './src/Pages/Register';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          title: 'Iniciar Sesión',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#525FE1' }
        }}/>

        <Stack.Screen name="Register" component={Register} 
        options={{
          title: 'Registro',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#525FE1' }
        }}/>

        <Stack.Screen name="Home" component={Home} 
        options={{
          title: 'Home',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#525FE1' }
        }}/>

        <Stack.Screen name="Crear" component={Crear}
        options={{
          title: 'Agregar Contacto',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#525FE1' }
        }}/>

      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
