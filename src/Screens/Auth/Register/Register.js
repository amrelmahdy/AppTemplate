import React, { Component } from "react";
import styles from "./Register.Styles";
import { View, TextInput } from 'react-native';
import { Button } from './../../../Components';
import AuthContainer from './../AuthContainer/'


class RegisterScreen extends Component {

    constructor(props) {
        super(props)
    }

    onChangeName = (text) => {
        this.setState({ name: text })
    }


    onChangeEmail = (text) => {
        this.setState({ email: text })
    }

    onChangePassword = (text) => {
        this.setState({ password: text })
    }

    onRegisterPress = () => {
        this.props.navigation.replace("Main")
    }


    navigateToLogin = () => {
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <AuthContainer onFooterTextPress={this.navigateToLogin}>
                <View style={styles.inputView} >
                    <TextInput onChangeText={this.onChangeName} placeholder="Name" placeholderTextColor="#c4c3cb" style={styles.formTextInput} />
                </View>
                <View style={styles.inputView}>
                    <TextInput onChangeText={this.onChangeEmail} placeholder="Email" placeholderTextColor="#c4c3cb" style={styles.formTextInput} />
                </View>
                <View style={styles.inputView} >
                    <TextInput onChangeText={this.onChangePassword} placeholder="Password" placeholderTextColor="#c4c3cb" style={styles.formTextInput} secureTextEntry={true} />
                </View>
                <View style={{ width: '100%', paddingHorizontal: 20 }}>
                    <Button isLoading={false} title="Register" onPress={this.onRegisterPress} />
                </View>
            </AuthContainer>
        );
    }
}

export default RegisterScreen