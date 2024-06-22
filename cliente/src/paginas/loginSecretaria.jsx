import { useForm } from "react-hook-form"
import { useAuth } from "../contexto/validarContexto";
import {Link} from 'react-router-dom'

function LoginSecretarias(){
    const { register,
         handleSubmit,  
         formState:{errors},
        } = useForm();
       const {sesionSecretaria, errors:signinErrors}= useAuth();

    const onSubmit= handleSubmit((data)=>{
        sesionSecretaria(data);
    });

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {
              signinErrors.map((error, i)=>(
                    <div className="bg-white text-black" key={i}>
                        {error}
                    </div>
                ))
            }
       
                <h1 className="text-2xl font-bold">loginSecretaria</h1>

        <form onSubmit={onSubmit}>

        <input type="email" 
        {...register("emailSecretaria", { required:true})}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
         placeholder="Email"
        />
         {
                errors.emailSecretaria && <p className="text-red-500">Debe ingresar su email</p>
            }
       
        <input type="password" {...register("claveSecretaria", { required:true})}
             className="w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             placeholder="Clave Segura"
            />
            {
                errors.claveSecretaria && <p className="text-red-500">Debe ingresar una contraseña</p>
            }
    
            
        <button type="submit" className="text-white  bg-zinc-600">
            iniciar sesion 
        </button>
        </form>
        <p className="flex gap-x-2 justify-between">
           <Link to="/registroSecretarias" className="text-sky-500">Registrarse</Link> 
            </p>
    </div>
    </div>
)
}
export default LoginSecretarias