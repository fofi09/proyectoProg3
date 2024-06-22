import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {AuthProvider} from './contexto/validarContexto'
import Contacto from './contacto'; // Importa el componente Contacto
import Servicios from './servicio'; 

//import RegistroPag from './paginas/registroPag'//no seria clinica?
import LoginPag from './paginas/loginPag'
import RegistroAdmin from './paginas/registroAdmin'

import RegistroSecretarias from './paginas/registroSecretarias';
import LoginSecretarias from './paginas/loginSecretaria'

import FormularioHistorial from './paginas/historialClinico';
import Perfil from './paginas/perfil'
import RegistroFamiliar from './paginas/regFamiliarDirecto'; 
import Menu from './componentes/menu';
import HistorialClinico from './paginas/historial';
import { HistorialProvide } from './contexto/historialContexto';
import ProtegerRutas from './protegerRutas';

function app(){
  return( 
    <AuthProvider>
      <HistorialProvide>
        <BrowserRouter>
        <Menu/>
    <Routes>
    <Route path='/' element={<h1>pagina principal</h1>}></Route>
    <Route path='/RegistroAdmin' element={<RegistroAdmin/>}></Route> 
    <Route path='/loginAdmin' element={<h1>en este perfil se podra registrar admin, secretarias, familiarDiecto y sacar turnos</h1>}></Route>
    {/* <Route path='/RegistroUsuario' element={<RegistroPag/>}></Route>  */}
    <Route path='/registroFamiliar' element={<RegistroFamiliar />} /> {/* Ajustado a RegistroFamiliar */} 

    <Route path='/loginUsuario' element={<LoginPag/>}></Route>
    <Route path='/RegistroSecretarias' element={<RegistroSecretarias />} ></Route> {/* Ruta para registro de secretarias */}
    <Route path='/loginSecretarias' element={<LoginSecretarias/>}></Route>


    <Route element={<ProtegerRutas/>}>
    <Route path='/historial' element={<HistorialClinico/>}></Route>
    <Route path='/agregarhistorial' element={<FormularioHistorial/>}></Route>
    <Route path='/historial/:id' element={<FormularioHistorial/>}></Route>
    <Route path='/perfil' element={<Perfil/>}></Route>
    <Route path="/contacto" element={<Contacto />} ></Route>
    <Route path="/servicios" element={<Servicios />} ></Route>
    </Route>
    
    </Routes>
    </BrowserRouter>
    </HistorialProvide>
    </AuthProvider>
  
  )
}
export default app