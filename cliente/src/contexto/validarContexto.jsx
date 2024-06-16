//authContext.jsx
import {createContext, useState, useContext } from "react"; 
//createContext es una funcion GLOBAL de react no le cambies el nombre 
import {registroA, registroSecretarias, loginSecretari, registroFamiliares} from '../api/autenticacion'

export const ValidarContexto= createContext();

export const useAuth=()=>{
      const contexto= useContext(ValidarContexto)
      if(!contexto)
        {
            throw new Error("frase rara");
        }
        return contexto;
}; 
// const { signup, signupSecretaria, sesionSecretaria, user, autenticado, errors } = contexto;


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

    const signupSecretaria = async (user) => {
        try {
            const res = await registroSecretarias(user); // Llama a la función registroSecretarias del archivo api/autenticacion.js
            console.log(res.data); // Verifica si res.data está definido
            setUser(res.data);
            setAutenticado(true);
        } catch (error) {
            // Manejo de errores
            // console.error('Error al registrar secretaria:', error);
            setErrors(error.response.data); // Asigna los errores desde la respuesta
        }
    };

    const sesionSecretaria= async(user)=>{
        try{
            const res= await loginSecretari(user)
            console.log(res);
        }
        catch(error){
            console.log(error);
        }
    }

    const signupFamiliar = async (user) => {
        try {
            const res = await registroFamiliares(user); // Llama a la función registroSecretarias del archivo api/autenticacion.js
            console.log(res.data); // Verifica si res.data está definido
            setUser(res.data);
            setAutenticado(true);
        } catch (error) {
            // Manejo de errores
            // console.error('Error al registrar secretaria:', error);
            setErrors(error.response.data); // Asigna los errores desde la respuesta
        }
    };

    return(
        <ValidarContexto.Provider value={{
            signup,
            signupSecretaria,
            sesionSecretaria,
            signupFamiliar,
            user,
            autenticado,
            errors
        }}>
            {children}
        </ValidarContexto.Provider>
    );
};