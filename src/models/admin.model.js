import mongoose from "mongoose";

// Definir el esquema para el modelo de Administrador
const adminSchema = new mongoose.Schema({
    administrador: {
        type: String,
        required: true,
    },
    emailAdmin: {
        type: String,
        required: true,
        unique: true,
    },
    claveAdmin: {
        type: String,
        required: true
    }
    
});

// Modelo para Administrador

export default mongoose.model('administradores', adminSchema)