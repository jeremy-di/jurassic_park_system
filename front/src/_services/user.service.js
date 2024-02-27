import Axios from '@/_services/caller.service'

let login = (credentials) => {
    return Axios.post('/login', credentials)
}

let register = (credentials) => {
    return Axios.post('/register', credentials)
}

let getAllUsers = () => {
    return Axios.get('/users/get_all')
}

let saveToken = (token => {
    localStorage.setItem('token', token)
})

let getToken = () => {
    return localStorage.getItem('token')
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let saveName = (name) => {
    localStorage.setItem('name', name)
}

let saveFirstName = (firstName) => {
    localStorage.setItem('firstName', firstName)
}

let getName = () => {
    let name = localStorage.getItem('name')
    return name
}

let getFirstName = () => {
    let firstName = localStorage.getItem('firstName')
    return firstName
}

export const userService = {
    login, register, getAllUsers, saveToken, getToken, logout, isLogged, saveName, saveFirstName, getName, getFirstName
}