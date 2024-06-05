import app from './app.js' //importa desde el archivo app.js q importe app
import { connectDB } from './db.js'

connectDB(); 
app.listen(4000)
console.log('servidor en el puerto 4000...')