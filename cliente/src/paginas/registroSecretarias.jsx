import { useForm } from "react-hook-form";
import { useAuth } from '../contexto/validarContexto';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistroSecretarias() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signupSecretaria, autenticado, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (autenticado) {
            navigate('/perfil'); // Redirige al perfil de la secretaria después del registro
        }
    }, [autenticado, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        try {
            await signupSecretaria(values); // Llama a la función signupSecretaria para registrar una secretaria
        } catch (error) {
            console.error('Error al registrar secretaria:', error);
        }
    });

    return (
        <div>
            <h2>Registro de Secretaria</h2>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("nombreSecretaria", { required: true })} placeholder="Nombre" />
                {errors.nombreSecretaria && <span>Este campo es requerido</span>}

                <input type="email" {...register("emailSecretaria", { required: true })} placeholder="Email" />
                {errors.emailSecretaria && <span>Este campo es requerido</span>}

                <input type="password" {...register("claveSecretaria", { required: true })} placeholder="Contraseña" />
                {errors.claveSecretaria && <span>Este campo es requerido</span>}

                <button type="submit">Registrarse como Secretaria</button>
            </form>

            {registerErrors && (
                <div>
                    <h3>Error en el registro:</h3>
                    <p>{registerErrors.message}</p>
                </div>
            )}
        </div>
    );
}

export default RegistroSecretarias;
