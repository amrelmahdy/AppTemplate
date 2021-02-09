import React, { useEffect } from 'react';
import {
  View, Text
} from 'react-native';
import { getItemFromAsyncStorage } from './../../helper'
import styles from './Splash.Styles'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(async () => {
      const _isAuthenticated = await isAuthenticated()
      if (_isAuthenticated) {
        navigation.replace("Main")
      } else {
        navigation.replace("Auth")
      }
    }, 3000)
  })


  const isAuthenticated = async () => {
    const token = await getItemFromAsyncStorage("@auth-token")
    return token
  }

  return (
    <>
      <View style={styles.logoContainer}>
        <Text style={styles.logoStyle}>Book Store</Text>
      </View>
    </>
  );
};


export default Splash;
