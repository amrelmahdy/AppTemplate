import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenContainer: {
        width: Dimensions.get('screen').width,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontSize: 40,
        color: '#FFF',
        fontWeight: "800",
        marginBottom: 30,
        textAlign: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: "400",
        //marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },
    formView: {
        flex: 1,
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputView: {
        width: "90%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
   
    Button: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    register: {
        marginTop: 20
    },
    registerText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF'
    }
})