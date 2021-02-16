import React, { Component } from "react";
import styles from "./Login.Styles";
import { View, TextInput} from 'react-native';
import { Button } from './../../../Components';
import AuthContainer from './../AuthContainer'


class LoginScreen extends Component {

    constructor(props) {
        super(props)
    }

    onLoginPress = async () => {
        this.props.navigation.replace("Main")
    }


    navigateToRegister = () => {
        this.props.navigation.navigate("Register")
    }


    onChangeEmail = (text) => {
        this.setState({ email: text })
    }

    onChangePassword = (text) => {
        this.setState({ password: text })
    }

    render() {
        return (
            <AuthContainer onFooterTextPress={this.navigateToRegister}>
                <View style={styles.inputView}>
                    <TextInput onChangeText={this.onChangeEmail} placeholder="Email" placeholderTextColor="#c4c3cb" style={styles.formTextInput} />
                </View>
                <View style={styles.inputView} >
                    <TextInput onChangeText={this.onChangePassword} placeholder="Password" placeholderTextColor="#c4c3cb" style={styles.formTextInput} secureTextEntry={true} />
                </View>
                <View style={{width: '100%', paddingHorizontal: 20 }}>
                    <Button isLoading={false} title="Log in" onPress={this.onLoginPress} />
                </View>
            </AuthContainer>
        );
    }
}

export default LoginScreen