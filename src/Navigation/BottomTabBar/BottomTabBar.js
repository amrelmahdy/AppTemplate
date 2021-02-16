import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import { HomeScreen, ProfileScreen } from '../../Screens'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

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


const BottomTabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home'
                            break
                        case 'Cart':
                            iconName = focused ? 'shoppingcart' : 'shoppingcart'
                            break
                        case 'Notifications':
                            iconName = focused ? 'notification' : 'notification'
                            break
                        case 'Profile':
                            iconName = focused ? 'user' : 'user'
                            break
                        case 'Settings':
                            iconName = focused ? 'setting' : 'setting'
                            break

                        default:
                        //     
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
            <Tab.Screen name="Cart" component={HomeStack} />
            <Tab.Screen name="Notifications" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
            <Tab.Screen name="Settings" component={HomeStack} />
        </Tab.Navigator>
    );
}

export default BottomTabBar