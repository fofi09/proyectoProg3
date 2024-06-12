//authContext.jsx
import {createContext, useState, useContext } from "react"; 
//createContext es una funcion GLOBAL de react no le cambies el nombre 
import {registroA} from '../api/autenticacion'

export const ValidarContexto= createContext();

export const useAuth=()=>{
      const contexto= useContext(ValidarContexto)
      if(!contexto)
        {
            throw new Error("frase rara");
        }
        return contexto;
}; 

export const AuthProvider= ({children}) =>{
    const [user, setUser]= useState(null);
    const [autenticado, setAutenticado]= useState(false);
    const [errors, setErrors]= useState([]);

    const signup= async(user)=>{
        try{
        const res= await registroA(user);
        console.log(res.data);
        setUser(res.data);
        setAutenticado(true);
        }catch(error){
           // console.log(error.response);//creo q aqui podes poner o hacer algo para q diga q el admin ya esta registrado
            setErrors(error.response.data);
        }
    };

    return(
        <ValidarContexto.Provider value={{
            signup,
            user,
            autenticado,
            errors
        }}>
            {children}
        </ValidarContexto.Provider>
    )
}