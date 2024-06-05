//epecificarle a mongodb que vamos a estar guardando
import mongoose from "mongoose";
'fazt@gmail.com'
const userSchema= new mongoose.Schema({
    //esquema que da un objeto que permite epecificar lo que voy a guardar
    nombre:{
        type: String,
        required: true
    
    },
    apellido:{
        type: String,
        required: true
    
    },
    email:{
        type: String,
        required: true,
       unique: true //para que no se repita el email

    },
   claveSegura:{
        type: String,
        required: true
    }
},
{
    timestamps: true //para que me guarde la fecha de creacion y actualizacion
})
   
export default mongoose.model('familiares directos', userSchema) 



//user
//interactua con la base de datos con los metodos