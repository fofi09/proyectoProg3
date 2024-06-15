import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {AuthProvider} from './contexto/validarContexto'

import RegistroPag from './paginas/registroPag'//no seria clinica?
import LoginPag from './paginas/loginPag'
import RegistroAdmin from './paginas/registroAdmin'

import RegistroSecretarias from './paginas/registroSecretarias';
function app(){
  return(
    <AuthProvider>
        <BrowserRouter>
    <Routes>
    <Route path='/' element={<h1>pagina principal</h1>}></Route>
    <Route path='/RegistroAdmin' element={<RegistroAdmin/>}></Route> 
    <Route path='/loginAdmin' element={<h1>perfil enfermeras</h1>}></Route>
    <Route path='/RegistroUsuario' element={<RegistroPag/>}></Route> 
    <Route path='/loginUsuario' element={<LoginPag/>}></Route>
    <Route path='/RegistroSecretarias' element={<RegistroSecretarias />} ></Route> {/* Ruta para registro de secretarias */}
    <Route path='/historial' element={<h1>historial</h1>}></Route>
    <Route path='/agregarHistorial' element={<h1>agregar historil</h1>}></Route>
    <Route path='/historial/:id' element={<h1>actualizar historial</h1>}></Route>
    <Route path='/perfil' element={<h1>perfil</h1>}></Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  
  )
}
export default app