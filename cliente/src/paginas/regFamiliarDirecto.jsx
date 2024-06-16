import {useForm} from "react-hook-form" //instalo npm install react-hook-form

//import {registroA} from '../api/autenticacion'
import {useAuth} from '../contexto/validarContexto';
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";//funcion de react dom
 
function RegistroFamiliar(){
    const {register, 
        handleSubmit,
         formState:{errors},
     }= useForm();//handLeSubmit y registerviene con lo q instalaste
    const {signupFamiliar, autenticado, errors:registerErrors}= useAuth();

   // const Navigate= useNavigate();
    // useEffect(()=>{
    //     if(autenticado) Navigate('/loginAdmin')//aqui vas a tener q ver a donde haces q entre
    // },[autenticado])
    const navigate = useNavigate();

    useEffect(() => {
        if (autenticado) {
            navigate('/perfil'); // Redirige al perfil de la secretaria después del registro
        }
    }, [autenticado]);

    const onSubmit= handleSubmit(async(values)=>{
      signupFamiliar(values);
     } );

 
        return (
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                {
                    registerErrors.map((error, i)=>(
                     
                        <div className="bg-white text-black" key={i}>
                            {error}
                        </div>
                    ))
                }
           
            <form onSubmit={onSubmit}>

            <input type="text" 
            {...register("nombre", { required:true})}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre del familiar"
             />
                {
                errors.nombre && <p className="text-red-500">Debe ingresar su nombre</p>
            }

            <input type="text" 
            {...register("apellido", { required:true})}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="apellido del familiar"
             />
                {
                errors.apellido && <p className="text-red-500">Debe ingresar su nombre</p>
            }

            <input type="email" 
            {...register("email", { required:true})}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
             placeholder="Email"
            />
             {
                    errors.email && <p className="text-red-500">Debe ingresar su email</p>
                }
           
            <input type="password" {...register("claveSegura", { required:true})}
                 className="w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                 placeholder="Clave Segura"
                />
                {
                    errors.claveSegura && <p className="text-red-500">Debe ingresar una contraseña</p>
                }
        
                
            <button type="submit" className="text-white  bg-zinc-600">
                Registrar a un familiar directo
            </button>
            </form>
        </div>
    )
}
export default RegistroFamiliar