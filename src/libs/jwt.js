import jwt from 'jsonwebtoken'
import { TOKEN_SECRETO } from "../config.js";
import { idHistorial } from '../controllers/historial.js';//este esta mal creo
export function createAccessToken(payload){//crea un TOKEN DE ACCESO
   return new Promise((resolve, reject)=>{
jwt.sign(
    payload,
    // "secret123",
    TOKEN_SECRETO,
    {
     expiresIn: 60//////////////////////////////,
    // id:usuarioGuardado._id
    },
      (err, token)=>{
        if(err) reject(err);
        resolve(token)
          
}
);
});
}