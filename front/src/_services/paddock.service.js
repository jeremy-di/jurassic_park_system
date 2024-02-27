import Axios from '@/_services/caller.service'

let addPaddock = () => {
    return Axios.post('/paddock/new')
}

let getAllPaddocks = () => {
    return Axios.get('/paddock/get_all')
}

let getOnePaddock = (id) => {
    return Axios.get(`/paddock/get_one/${id}`)
}

let updatePaddock = (id) => {
    return Axios.put(`/paddock/update/${id}`)
}

let deletePaddock = (id) => {
    return Axios.delete(`/paddock/delete/${id}`)
}

export const paddockService = {
    addPaddock, getAllPaddocks, getOnePaddock, updatePaddock, deletePaddock
}