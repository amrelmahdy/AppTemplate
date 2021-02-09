import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#09B6CC',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    text: isLoading => ({
        marginRight: isLoading ? 10 : 0,
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#FFF'
    })
})