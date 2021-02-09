import React, { Component } from "react";
import styles from "./AuthContainer.Styles";
import { Keyboard, Text, View, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';


class AuthContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { children, onFooterTextPress } = this.props
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.screenContainer}>
                        <View style={styles.formView}>
                            <Text style={styles.logoText}>App Name</Text>
                            { children }
                            <View style={styles.register}>
                                <TouchableWithoutFeedback onPress={onFooterTextPress}>
                                    <Text style={styles.registerText}>Create a new account</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default AuthContainer