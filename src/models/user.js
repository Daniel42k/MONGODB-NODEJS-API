const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Tipodedocumento: {
    type: String,
    required: true
  },
  DocumentodeIdentificaci├│n: {
    type: Number,
    required: true
  },
  Nombres: {
    type: String,
    required: true
  },
  Apellidos: {
    type: String,
    required: true
  },
  Direcci├│n: {
    type: String,Number,
    required: true
  },
  CorreoElectronico: {
    type: String,
    required: true
  },
  TelefonoFijo: {
    type: Number,
    required: true
  },
  TelefonoCelular: {
    type: Number,
    required: true
  },
  LinksAlcomprobanteDeConsignaci├│n: {
    type: String,
    required: true
  },
  CodigoICFES: {
    type: String,Number,
    required: true
  },
  EstudiaUnfamiliarEnestaUniversidad: {
    type: String,
    required: true
  },
  EstratoSocial: {
    type: Number,
    required: true
  },
  TipodecolegiodelqueseGraduo: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);