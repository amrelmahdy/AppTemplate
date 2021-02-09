import React from "react";
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import styles from "./Button.Styles";

const Button = ({
    title,
    onPress,
    isLoading
}) => {
    return (
        <TouchableOpacity
            disabled={isLoading}
            buttonStyle={styles.loginButton}
            onPress={onPress}
            style={{ width: '100%', paddingHorizontal: 0 }}
        >
            <View style={styles.container}>
                <Text style={styles.text(isLoading)}>{title}</Text>
                {isLoading && <ActivityIndicator color="#FFF" />}
            </View>
        </TouchableOpacity>
    );
}

Button.defaultProps = {
    onPress: () => { }
}

export default Button 