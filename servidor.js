const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const puerto = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect('mongodb+srv://mongoomongo465:xw5jacjU8kqFOUfR@cluster0.chcllyw.mongodb.net/inventario?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error de conexión a la base de datos', err);
});

// Rutas
const rutasComputadoras = require('./rutas/computadoraRutas');
app.use('/api/computadoras', rutasComputadoras);

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor está corriendo en http://localhost:${puerto}`);
});
