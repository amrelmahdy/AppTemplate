import React, { useEffect, useState } from 'react'
import { View, Text, Alert, ActivityIndicator } from 'react-native'
import styles from './Profile.Styles'
import { getProfile, logout } from './../../Api/authServices'
import { Button } from './../../Components'

function ProfileScreen(props) {

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getProfile().then(res => {
            setIsLoading(false)
            const { code } = res.data.Error
            switch (code) {
                case 200:
                    setUser(res.data.Response)
                    break
                default:
                    Alert.alert("Whoops", "Something went wrong")
            }

        }).catch(err => {
            setIsLoading(false)
            Alert.alert("Whoops", "Something went wrong")
        })
    }, [])

    const handleLogout = async () => {
        setIsLoading(true)
        const { navigation } = props
        await logout()
        navigation.replace("Auth")
    }

    const renderPageBody = () => {
        if (isLoading) {
            return <View style={styles.loadingContainer}>
                <ActivityIndicator />
            </View>
        }

        return <View style={styles.container}>
            <Text style={styles.text}>Welcome {user?.name}</Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Button onPress={handleLogout} title="logout" />
            </View>
        </View>

    }

    return (
        <View style={{ flex: 1 }}>
            {renderPageBody()}
        </View>
    )
}

export default ProfileScreen