import {Router} from 'express';
import {loginUsuario, registroAdmin, loginAdmin, registroUsuario, cerrarSesion,perfil,} from '../controllers/controller.js';

import {autentocacionRequerida} from '../rutasProtegidas/validarToken.js'
const router= Router();

router.post('/registroAdmin', registroAdmin);//register
router.post('/registroUsuario', autentocacionRequerida, registroUsuario);//yo le agrego 
router.post('/loginUsuario', loginUsuario);
router.post('/loginAdmin', loginAdmin);

router.post('/cerrarSesion', cerrarSesion);

router.get('/perfil', autentocacionRequerida, perfil); //profile
//aqui antes de entrar y asi en perfil aqui se ejecuta (req, res, NEXT)
//por lo tanto va a entrar a la autenticacion del token, si no estas registrado no entrasss
//y si si esta autentificado recien entra

export default router