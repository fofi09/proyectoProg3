import {useForm} from "react-hook-form" //instalo npm install react-hook-form

function RegistroAdmin(){
    const {register, handleSubmit}= useForm();//handLeSubmit y registerviene con lo q instalaste
    return(
        <div>
            <form onSubmit={handleSubmit((values)=>{
                console.log(values);
            } )}>
            <input type="text" {...register("administrador", { required:true, placeholder:"poij"})}/>
            <input type="email" {...register("emailAdmin", { required:true})}/>
            <input type="password" {...register("claveAdmin", { required:true})}/>
                
            <button type="submit">
                RegistroAdmin
            </button>
            </form>
        </div>
    )
}
export default RegistroAdmin