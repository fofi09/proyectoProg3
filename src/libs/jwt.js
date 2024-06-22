import jwt from 'jsonwebtoken'
import { TOKEN_SECRETO } from "../config.js";

export function createAccessToken(payload){//crea un TOKEN DE ACCESO
   return new Promise((resolve, reject)=>{
jwt.sign(
    payload,
    TOKEN_SECRETO,
    {
     expiresIn: "1d",
    },
      (err, token)=>{
        if(err) reject(err);
        resolve(token)
          
}
);
});
}