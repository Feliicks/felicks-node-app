import express from 'express' //de ECMA script 6 equivaletne el require
import ejs from 'ejs'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js' 

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname,'views')); 

app.set ('view engine','ejs');
app.use(indexRoutes);

app.use(express.static(join(__dirname,'public')))

app.listen(process.env.PORT || 3000);
console.log ("Server is listening on port" , process.env.PORT || 3000);

//Routes, son las rutas peticiones que hace un cliente al servidor
//Un cliente hace una peticion de la ruta /contact, /help,/ informartion.
//El clietne hace una peticion a una DIRECCION del servidor y este 
//RESPONDE  con enviando un archivo y el navegador  se encarga de renderizarlo
