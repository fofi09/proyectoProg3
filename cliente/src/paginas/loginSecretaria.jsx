import { useForm } from "react-hook-form"
import { useAuth } from "../contexto/validarContexto";

function LoginSecretarias(){
    const { register,
         handleSubmit, 
         formState:{errors},
        } = useForm();
       const {sesionSecretaria}= useAuth();

    const onSubmit= handleSubmit((data)=>{
        sesionSecretaria(data);
    });

    return(
        <div>
             <h2>login de Secretarias</h2>
            <form onSubmit={onSubmit}>
                <input type="email" {...register("emailSecretaria", { required: true })} placeholder="Email" />
                {errors.emailSecretaria && <span>Este campo es requerido</span>}

                <input type="password" {...register("claveSecretaria", { required: true })} placeholder="Contraseña" />
                {errors.claveSecretaria && <span>Este campo es requerido</span>}

                <button type="submit">loguarse como Secretaria</button>
            </form>

        </div>
    );
}
export default LoginSecretarias;