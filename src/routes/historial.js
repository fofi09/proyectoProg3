import { Router } from "express";
import { autentocacionRequerida } from "../rutasProtegidas/validarToken.js";

import {obtenerHistorial,idHistorial,crearHistorial,actualizarHistorial,borrarHistorial} from '../controllers/historial.js'
 
export const router= Router()

router.get('/historial',autentocacionRequerida, obtenerHistorial);

router.get('/historial/:id',autentocacionRequerida, idHistorial);

router.post('/historial',autentocacionRequerida, crearHistorial);

router.delete('/historial/:id',autentocacionRequerida, borrarHistorial);

router.put('/historial/:id',autentocacionRequerida, actualizarHistorial);

export default router