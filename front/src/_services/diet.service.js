import Axios from '@/_services/caller.service'

let getAllDiets = () => {
    return Axios.get('/diet/get_all')
}

export const dietService = {
    getAllDiets
}