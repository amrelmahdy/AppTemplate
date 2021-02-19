import React, { useEffect } from 'react';
import {
  View, Text
} from 'react-native';
import styles from './Splash.Styles'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace("Auth")
    }, 3000)
  })


  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoStyle}>App Name</Text>
    </View>
  );
};


export default Splash;
