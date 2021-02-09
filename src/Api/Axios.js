import axios from 'axios'
import { getItemFromAsyncStorage } from './../helper'



export const configureAxiosInterceptors = () => {
    axios.interceptors.request.use(async req => {
        const token = await getItemFromAsyncStorage("@auth-token")
        req.headers.Authorization = token;
        return req;
    });
}

export const authAxiosInstance = axios.create({
    baseURL: 'https://book-store-users-app.herokuapp.com/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})


