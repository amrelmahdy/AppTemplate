import axios from 'axios';
import { removeItemFromAsyncStorage } from './../helper'

const baseURL = "https://book-store-users-app.herokuapp.com/auth"

export const login = async (email, password) => {
    const response = await axios.post(`${baseURL}/login`, { email, password })
    return response
}

export const register = async (name, email, password) => {
    const response = await axios.post(`${baseURL}/register`, { name, email, password })
    return response
}

export const getProfile = async () => {
    const response = await axios.post(`${baseURL}/profile`, {})
    return response
}


export const logout = async () => {
    try {
        return await removeItemFromAsyncStorage('@auth-token')
    } catch (e) {
        // 
    }

} 