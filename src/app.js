import express from 'express';
import morgan from 'morgan';
//morgan: modulo que me ayuda a ver las peticiones que van llegando al backend
import cookieParser from 'cookie-parser';
//permite que cada que nos llegue una cookie convertirla a json
import cors from 'cors';

import routes from './routes/routes.js';//le puse routes
import historial from './routes/historial.js'


const app=express();

app.use(cors({
    origin: 'http://localhost:5173', 
}));

app.use(morgan('dev'));//muestra peticion por consola
app.use(express.json());//convierte los req.body en formato json

app.use(cookieParser());

app.use("/clinica",routes);//aqui uso routes 

 app.use("/clinica",historial);


export default app; 
//ya inicie app ahora lo exporto