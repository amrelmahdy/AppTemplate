import React, { Component } from "react";
import styles from "./Register.Styles";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from './../../../Components';
import AuthContainer from './../AuthContainer/'
import { register } from './../../../Api/authServices';
import { storeItemToAsyncStorage, getItemFromAsyncStorage } from './../../../helper'


class RegisterScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isLoading: false
        }
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
        this.setState({
            isLoading: true
        })
        const { name, email, password } = this.state
        register(name, email, password).then(async res => {
            this.setState({
                isLoading: false
            })
            const { code, desc, token } = res.data.Error
            switch (code) {
                case 201:
                    await storeItemToAsyncStorage("@auth-token", token)
                    this.props.navigation.replace("Main")
                    break
                case 409:
                    Alert.alert("Validation", desc)
                    break
                case 401:
                    Alert.alert("Validation", desc)
                    break
                default:
                    Alert.alert("Whoops", "Something went wrong")
            }

        }).catch(err => {
            console.log(err)
            Alert.alert("Internal server error", JSON.stringify(err))
        })
    }


    navigateToLogin = () => {
        this.props.navigation.navigate("Login")
    }

    render() {
        const { isLoading } = this.state
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
                    <Button isLoading={isLoading} title="Register" onPress={this.onRegisterPress} />
                </View>
            </AuthContainer>
        );
    }
}

export default RegisterScreen