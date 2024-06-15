import {useForm} from "react-hook-form" //instalo npm install react-hook-form

//import {registroA} from '../api/autenticacion'
import {useAuth} from '../contexto/validarContexto';
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";//funcion de react dom
 
function RegistroAdmin(){
    const {register, 
        handleSubmit,
         formState:{errors},
     }= useForm();//handLeSubmit y registerviene con lo q instalaste
    const {signup, autenticado, errors: registerErrors}= useAuth();
    const Navigate= useNavigate();

    
    useEffect(()=>{
        if(autenticado) Navigate('/loginAdmin')//aqui vas a tener q ver a donde haces q entre
    },[autenticado])


    const onSubmit= handleSubmit(async(values)=>{
      signup(values);
     } );

    return(
        <div>
           
            <form 
            onSubmit={onSubmit}
            >
            <input type="text" 
            {...register("administrador", { required:true})}
            
            />

           
            <input type="email" 
            {...register("emailAdmin", { required:true})}/>
           
            <input type="password" {...register("claveAdmin", { required:true})}/>
                
            <button type="submit">
                RegistroAdmin
            </button>
            </form>
        </div>
    )
}
export default RegistroAdmin