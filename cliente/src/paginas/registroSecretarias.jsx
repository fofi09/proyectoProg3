import { useForm } from "react-hook-form";
import { useAuth } from '../contexto/validarContexto';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistroSecretarias() {
    const { register,
         handleSubmit, 
         formState: { errors },
        } = useForm();

     const { signupSecretaria, autenticado, errors: registerErrors } = useAuth();
   // const { signupSecretaria, autenticado, errors: registerErrors = [] } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (autenticado) {
            navigate('/perfil'); // Redirige al perfil de la secretaria después del registro
        }
    }, [autenticado]);

    // const onSubmit = handleSubmit(async (values) => {
    //     try {
    //         await signupSecretaria(values); // Llama a la función signupSecretaria para registrar una secretaria
    //     } catch (error) {
    //         console.error('Error al registrar secretaria:', error);
    //     }
    // });
    const onSubmit= handleSubmit(async(values)=>{
        signupSecretaria(values);
    });

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
                registerErrors.map((error, i)=>(
                 
                    <div className="bg-white text-black" key={i}>
                        {error}
                    </div>
                ))
            }
                {/* <p key={i} className="text-red-500">{registerErrors}</p>  */}
 
            <form onSubmit={onSubmit}>
                <input type="text" {...register("nombreSecretaria", { required: true })} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Nombre" />
            {
                errors.nombreSecretaria && <p className="text-red-500">Debe ingresar su nombre</p>
            }
                {/* {errors.nombreSecretaria && <span>Este campo es requerido</span>} */}

                <input type="email" {...register("emailSecretaria", { required: true })} 
                     className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                     placeholder="Email"
                />
                {
                    errors.emailSecretaria && <p className="text-red-500">Debe ingresar su email</p>
                }
                {/* {errors.emailSecretaria && <span>Este campo es requerido</span>} */}

                <input type="password" {...register("claveSecretaria", { required: true })}
                 className="w-full  bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                 placeholder="Contraseña"
                />
                {
                    errors.claveSecretaria && <p className="text-red-500">Debe ingresar una contraseña</p>
                }
                {/* {errors.claveSecretaria && <span>Este campo es requerido</span>} */}

                <button type="submit" className="text-white  bg-zinc-600" >
                    Registrar Secretaria 
                    </button>
            </form>
        </div>
    );
}

export default RegistroSecretarias;
