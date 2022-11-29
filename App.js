import * as React from 'react';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PageLogIn } from './pages/page-login';
import { PageUser } from './pages/page-main';
import { PageReg } from './pages/page-reg';





const Stack = createNativeStackNavigator();

export default function App() {
  return (    
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Главная страница">
      <Stack.Screen options={{headerShown: true}} name="Главная страница" component={PageLogIn} />
      <Stack.Screen options={{headerShown: true}} name="Регистрация" component={PageReg} />
      <Stack.Screen options={{headerShown: false}} name="Окно пользователя" component={PageUser} />
    </Stack.Navigator>
    
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

