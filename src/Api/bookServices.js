import axios from 'axios';
import { removeItemFromAsyncStorage } from './../helper'

const baseURL = "https://book-store-books-app.herokuapp.com"

export const getAllBooks = async () => {
    const response = await axios.get(`${baseURL}/books`)
    return response
}


export const addBook = async (authorID, name, description) => {
    const response = await axios.post(`${baseURL}/books`, {
        name,
        description,
        authorID
    })
    return response
}



export const getBookDetails = async (id) => {
    const response = await axios.get(`${baseURL}/books/${id}`)
    return response
}


export const deleteBook = async (id) => {
    const response = await axios.delete(`${baseURL}/books/${id}`)
    return response
}

export const editBook = async (id, name, description) => {
   
    const response = await axios.put(`${baseURL}/books/${id}`, {
        name,
        description,
    })
    console.log(response)

    //console.log('++++++',response)
    return response
}
