import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeItemToAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}

export const getItemFromAsyncStorage = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (e) {
        // saving error
    }
}

export const removeItemFromAsyncStorage = async (key) => {
    try {
        return await AsyncStorage.removeItem(key)
    } catch (e) {
        // saving error
    }
}

