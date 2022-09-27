/* 
* Archivo de configuración de la aplicación
* En este archivo se configuran los parámetros de la aplicación
* como ser: el puerto, variables de entorno, rutas y middlewares 
*/

const express = require('express') // Importando librería express
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('ejs');
const dbConnect = require('./db'); // Importando archivo de conexión a la base de datos

const app = express(); // Inicializando express
dbConnect();

// Configuración de variables de entorno
const port = process.env.PORT || 4000;

// Para que el servidor comprenda datos con formato json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Otros middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Importando rutas
app.use(require('./routes/tasks.routes')); // Importando rutas
app.use(require('./routes/home.routes')); // Importando rutas

// Configurando puerto
app.listen(port, () => console.log(`Servidor escuchando en http://127.0.0.1:${port}`));

// Ejecutar con: npm run dev
// Para detener el servidor: Ctrl + C