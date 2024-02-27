import axios from "axios";
import { userService } from '@/_services/user.service';

const Axios = axios.create({
    baseURL : "http://localhost:8080"
})

Axios.interceptors.request.use(request => {

    if(userService.isLogged()) {
        request.headers.Authorization = `bearer ${userService.getToken()}`
    }

    return request
})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status === 401) {
        userService.logout()
        window.location = '/login'
    } else {
        return Promise.reject(error)
    }
})

export default Axios