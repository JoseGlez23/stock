const mongoose = require('mongoose');

const esquemaComputadora = new mongoose.Schema({
  marca: String,
  modelo: String,
  numeroSerie: String,
  estado: { type: String, enum: ['disponible', 'no disponible'] },
  fechaCompra: Date
});

module.exports = mongoose.model('Computadora', esquemaComputadora);
