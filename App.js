import React from 'react'
import { } from 'react-native'
import { NavigationContainer, StackActions, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import City from './screens/City'
import Header from './components/Header'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={'City'}> */}
      {/* <Stack.Navigator screenOptions={{header: () => <Header title='Meteo App' />}}> */}
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={({ route }) => ({title: route.params.cityName})} name="City" component={City} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App