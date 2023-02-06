const mongoose = require("../database/index");

// Schema
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  nascimento: {
    type: String,
    required: true,
  },
});

const Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = Cliente;
