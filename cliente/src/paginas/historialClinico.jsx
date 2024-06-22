import { useForm } from "react-hook-form"
import { useHistorial } from "../contexto/historialContexto";


function FormularioHistorial(){
   const {register, handleSubmit}= useForm();
   const {createHistorial}=useHistorial();
 

const onSubmit=handleSubmit((data)=>{
    createHistorial(data);
}
);
    return(
       
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
     <h1>Formulario del historial clinico</h1>
     <form onSubmit={onSubmit}>
        <input type="text" placeholder="Estado de animo"
        {...register('estadoAnimo')}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        autoFocus />
        <textarea rows="3" placeholder="Actividades"
        {...register('Actividades')}
         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          > </textarea>
        <textarea rows="3" placeholder="Estado de salud"
         {...register('estadoSalud')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        ></textarea>
        <textarea rows="5" placeholder="Observaciones" 
         {...register('Observaciones')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
        ></textarea>
        
        <button>Guardar</button>
        </form>
        </div>
    )
}
export default FormularioHistorial