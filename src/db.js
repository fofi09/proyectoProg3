import mongoose from "mongoose";

export const connectDB= async ()=>{
    try{
await mongoose.connect('mongodb://localhost:27017/registroUsuariosdb')

console.log("conectado a mongoDB");
    }
    catch(error)
    {
        console.log(error);
    }
}

// "estadoAnimo":"orgullosa de mi",
//     "actividades":"trabajo final de prog",
//    "observaciones":"encaminada"

// {
//     "nombre":"sofi",
//   "apellido":"lulu",
//   "familiar":"mm",
//   "email":"luc@gmail.com",
//   "claveSegura":"exitosa"
    

//"_id": "665d1688d43496cbe2100bd8",
//usuario: "665be3b8b9c7a13672a345ea",
//        665be3b8b9c7a13672a345ea"
//   }
// "administrador":"yop",
//   "emailAdmin":"yo@gmail.com",
//   "claveAdmin":"12345"
// // {
//     "estadoAnimo":"feliz",
//     "actividades":"terapia grupal",
//     "observaciones":"mejor comportamiento"
//    }