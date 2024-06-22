import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./contexto/validarContexto"

function ProtegerRutas(){
    const {loading, autenticado}= useAuth();
    console.log(loading, autenticado)

    if(loading) return <h1>Cargando...</h1>
    if(!loading && !autenticado) return <Navigate to="/loginSecretarias" replace/>
  
        return <Outlet />;
    
}
export default ProtegerRutas;