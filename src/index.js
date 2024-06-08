require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./db/database-connection");

// Rotas
const personagemRouter = require("./personagem/personagem.router");

async function main() {
  await connectToDatabase();

  // Express start
  const app = express();

  // Midleware do Express usando JSON no body
  app.use(express.json());

  // Endpoint HOME
  app.get("/", function (req, res) {
    res.send("Hello World");
  });

  // Router de personagens
  app.use("/personagens", personagemRouter);

  app.listen(3000, () =>
    console.log("Servidor rodando em http://localhost:3000")
  );
}

main();
