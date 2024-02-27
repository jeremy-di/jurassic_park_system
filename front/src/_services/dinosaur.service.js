import Axios from '@/_services/caller.service'

let addDino = () => {
    return Axios.post('/dino/new')
}

let getAllDinos = () => {
    return Axios.get('/dino/get_all')
}

let getOneDino = (id) => {
    return Axios.get(`/dino/get_one/${id}`)
}

let updateDino = (id) => {
    return Axios.put(`/dino/update/${id}`)
}

let deleteDino = (id) => {
    return Axios.delete(`/dino/delete/${id}`)
}

export const dinoService = {
    addDino, getAllDinos, getOneDino, updateDino, deleteDino
}