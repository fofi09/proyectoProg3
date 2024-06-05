import jwt from 'jsonwebtoken'
import {TOKEN_SECRETO} from '../config.js'

export const autentocacionRequerida=(req, res, next)=>//next en lugar de retornarle una respuesta al cliente yo le digo 
    {
    //     const cookies= req.cookies;
    //     console.log(cookies);
    const {token}= req.cookies
    if(!token) return res.status(401).json({message: "Denegado, es solo para personal autorizado"})

        jwt.verify(token, TOKEN_SECRETO, (err, user)=>{

            if(err) return res.status(403).json({message: "usuario invalido"})
              req.user= user//tmb se puede guardar solo el id
            next()
            })
        }; 