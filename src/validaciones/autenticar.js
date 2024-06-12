import {z} from 'zod' //npm i zod

export const validarRegAdmin=z.object({
    administrador: z.string({
        required_error: 'El nombre del administrador es obligatorio'
    }),
    emailAdmin:z.string({
        required_error:'El email es obligatorio'
    }).email({
        message: 'Email invalido'
    }),
    claveAdmin: z.string({
        required_error:'Debe ingresar una contraseña'
    }).min(6, {
        message:"La contraseña debe tener al menos 6 caracteres",
    }),
});

export const validarLoginAdmin=z.object({
    emailAdmin: z.string({
        required_error:"Debe ingresar su email",
    }).email({
        message: "Email incorrecto", //aqui podes poner administrador no registado o algo asi
    }),
    claveAdmin: z.string({
        required_error: "debe ingresar su contraseña",
    }).min(6, {
        message: "Contraseña invalida",
    }),
});