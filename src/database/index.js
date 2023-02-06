const mongoose = require("mongoose");

//connect
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1/apicpf", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Banco de Dados conectado!");
  })
  .catch((err) => {
    console.log("falha ao se conectar com o Mongo: " + err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
