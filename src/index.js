const express = require("express");
const app = express();
//const {Mongoose} = require('./database/index')
const router = express.Router();
const Cliente = require("./models/schema");
const validacaocpf = require("./utils/index");

// Encoder URL
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.post("/cad", async (req, res) => {
  const { nome, cpf, nascimento } = req.body;
  //console.log(req.body);

  const arraycpf = cpf.toString().split("");
  const arraycpfnumber = [];

  for (var i = 0; i < arraycpf.length; i++) {
    arraycpfnumber.push(parseInt(arraycpf[i]));
  }
  //console.log(arraycpfnumber)

  const cpfregistrado = await Cliente.find({ cpf: cpf });
  if (cpfregistrado.length > 0) {
    res.status(422);
    res.send("CPF já existente.");
    console.log(cpfregistrado);
  } else {
    if (validacaocpf(cpf)) {
      const cliente = await Cliente.create({ nome, cpf, nascimento });

      res.send("Cliente criado.");
    } else {
      res.status(422);
      res.send("CPF inválido.");
    }
  }
});

app.get("/cads", async (req, res) => {
  var pagina = req.query.pagina;
  var limite = req.query.limite;
  if (pagina == undefined) pagina = 1;
  if (limite == undefined) limite = 10;

  var dbclientes = [];

  await Cliente.find(
    {},
    { cpf: 1, nome: 1, nascimento: 1 },
    { limit: limite, skip: limite * (pagina - 1) },
    (erro, clientes) => {
      dbclientes = clientes;
    }
  ).clone();
  res.status(200);
  res.send(dbclientes);
});
app.get("/card/:cpf", async (req, res) => {
  const { cpf } = req.params;

  const cliente = await Cliente.find({ cpf: cpf });
  if (cliente.length == 0) {
    res.status(404);
    res.send("Cliente não encontrado.");
  } else {
    res.send(cliente[0]);
    res.status(200);
  }
});

// Hospedar serivor
const PORT = 7777;
app.listen(PORT, () => {
  console.log("API rodando!");
});
