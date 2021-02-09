import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import {  HomeScreen, LoginScreen, ProfileScreen, RegisterScreen, SplashScreen} from '../Screens'
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)




const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
)



const AuthStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Splash">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
)

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user'
          }
          return <Icon color={focused ? '#09B6CC' : '#333'} name={iconName} size={30} />
        },
      })}
      tabBarOptions={{
        labelStyle: { display: 'none' },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}



const RootNavigator = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" options={{
        animationEnabled: false
      }} component={AuthStack} />
      <Stack.Screen name="Main" options={{
        animationEnabled: false
      }} component={TabNavigator} />
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
