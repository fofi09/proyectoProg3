import axios from './axios.js'

export const getHistorialClinico=()=>axios.get('/historial');//comillas dobles

export const idHistorialClinico=(id)=> axios.get(`/historial/${id}`);

export const createHistorialClinico=(historial)=>axios.post('/historial', historial);

export const updateHistorialClinico=(historial)=>axios.put(`/historial/${historial._id}`, historial);

export const deleteHistorialClinico=(id)=>axios.delete(`/historial/${id}`);