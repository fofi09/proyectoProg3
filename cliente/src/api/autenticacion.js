import axios from './axios' //npm i axios
// const API= 'http://localhost:4000/clinica' //asi conectas al puerto de node

export const registroA=(user) => axios.post(`registroAdmin`, user);

export const registroSecretarias = (user) => axios.post(`/registroSecretarias`, user);

export const loginSecretari= (user) => axios.post(`/loginSecretaria`, user);

export const registroFamiliares = (user) => axios.post(`/registroFamiliar`, user);

export const verificarToken=()=> axios.get('/verify')