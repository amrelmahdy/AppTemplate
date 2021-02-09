import React, { Component } from "react";
import styles from "./Login.Styles";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Alert } from 'react-native';
import { Button } from './../../../Components';
import { storeItemToAsyncStorage, getItemFromAsyncStorage } from './../../../helper'
import AuthContainer from './../AuthContainer'
import { login } from './../../../Api/authServices';


class LoginScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    onLoginPress = async () => {
        this.setState({
            isLoading: true
        })
        const { email, password } = this.state
        login(email, password).then(async res => {
            this.setState({
                isLoading: false
            })
            const { code, desc, token } = res.data.Error
            switch (code) {
                case 200:
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
            Alert.alert("Internal server error", desc)
        })
        //this.props.navigation.replace("Main")
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

        const { isLoading } = this.state
        return (
            <AuthContainer onFooterTextPress={this.navigateToRegister}>
                <View style={styles.inputView}>
                    <TextInput onChangeText={this.onChangeEmail} placeholder="Email" placeholderTextColor="#c4c3cb" style={styles.formTextInput} />
                </View>
                <View style={styles.inputView} >
                    <TextInput onChangeText={this.onChangePassword} placeholder="Password" placeholderTextColor="#c4c3cb" style={styles.formTextInput} secureTextEntry={true} />
                </View>
                <View style={{width: '100%', paddingHorizontal: 20 }}>
                    <Button isLoading={isLoading} title="Log in" onPress={this.onLoginPress} />
                </View>
            </AuthContainer>
        );
    }
}

export default LoginScreen