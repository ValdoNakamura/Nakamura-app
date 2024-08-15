import 'react-native-gesture-handler'; //nos servira para el manejo de distintas paginas de la app
import { StyleSheet } from 'react-native';

//importacion de los componentes para el enrutamiento
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//importamos nuestros componentes
import Login from './src/Pages/Login';
import Home from './src/Pages/Home';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          title: 'Iniciar Sesion',
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
