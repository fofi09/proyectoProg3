import {useForm} from "react-hook-form" //instalo npm install react-hook-form

function RegistroPag(){
    const {RegistroPag, handleSubmit}= useForm()//handLeSubmit viene con lo q instalaste
    return(
        <div>
            <form onSubmit={handleSubmit((values)=>{
                console.log(values);
            } )}>
                {/* en vez de name=nombre con la libreria hook hago asi */}
            <input type="text" {...RegistroPag("nombre", { required:true})}/>
            <input type="text" {...RegistroPag("apellido", { required:true})}/>
            <input type="text" {...RegistroPag("familiar", { required:true})}/>
            <input type="email" {...RegistroPag("email", { required:true})}/>
            <input type="password" {...RegistroPag("claveSegura", { required:true})}/>
                
            <button type="submit">
                registroPag
            </button>
            </form>
        </div>
    )
}
export default RegistroPag