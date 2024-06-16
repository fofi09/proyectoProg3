import axios from 'axios' //npm i axios
const API= 'http://localhost:4000/clinica' //asi conectas al puerto de node
export const registroA=user => axios.post(`${API}/registroAdmin`, user);

export const registroSecretarias = user => axios.post(`${API}/registroSecretarias`, user);

export const loginSecretari= user => axios.post(`${API}/loginSecretarias`, user);

export const registroFamiliares = user => axios.post(`${API}/registroFamiliar`, user);