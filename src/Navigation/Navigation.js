import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen, SplashScreen } from '../Screens'
import BottomTabBar from './BottomTabBar'

const Stack = createStackNavigator()

const AuthStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Splash">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
)

const RootNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" options={{
        animationEnabled: false
      }} component={AuthStack} />
      <Stack.Screen name="Main" options={{
        animationEnabled: false
      }} component={BottomTabBar} />
    </Stack.Navigator>
  )
}


const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}


export default Navigation
