import axios from 'axios'

const instance= axios.create({
    baseURL: 'http://localhost:4000/clinica',
    withCredentials: true
})

export default instance