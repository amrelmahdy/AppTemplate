import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        width: 10,
        height: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 9,
        backgroundColor: "transparent",
        overflow: "hidden",
    },
    buttonSelected: {
        opacity: 1,
        backgroundColor: "#DDD"
    },
    customSlide: {
        backgroundColor: 'grey',
    },
});