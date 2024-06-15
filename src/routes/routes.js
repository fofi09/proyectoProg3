import {Router} from 'express';
import {loginUsuario, registroAdmin, loginAdmin, registroUsuario,registroSecretarias, loginSecretarias, cerrarSesion,perfil,} from '../controllers/controller.js';

import {autentocacionRequerida} from '../rutasProtegidas/validarToken.js'
import { validarSchema } from '../rutasProtegidas/validarRutas.js';
import { validarRegAdmin, validarLoginAdmin, validarRegSecretaria, validarLoginSecretaria, } from '../validaciones/autenticar.js';


const router= Router();

router.post('/registroAdmin', validarSchema(validarRegAdmin), registroAdmin);//register
router.post('/registroUsuario', autentocacionRequerida, registroUsuario);//yo le agrego 
router.post('/loginUsuario', loginUsuario);
router.post('/loginAdmin', validarSchema(validarLoginAdmin), loginAdmin);

router.post('/registroSecretarias', validarSchema(validarRegSecretaria), registroSecretarias);
router.post('/loginSecretaria', validarSchema(validarLoginSecretaria), loginSecretarias);
/////////////////////////////////////

/////////////////////////////////////

router.post('/cerrarSesion', cerrarSesion);

router.get('/perfil', autentocacionRequerida, perfil); //profile
//aqui antes de entrar y asi en perfil aqui se ejecuta (req, res, NEXT)
//por lo tanto va a entrar a la autenticacion del token, si no estas registrado no entrasss
//y si si esta autentificado recien entra
////////////////////////////////////////


export default router