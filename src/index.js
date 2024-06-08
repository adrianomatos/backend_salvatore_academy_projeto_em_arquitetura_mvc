require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./db/database-connection");
const personagemRouter = require("./personagem/personagem.router");
// const { MongoClient, ObjectId } = require("mongodb");

async function main() {
  await connectToDatabase();
  // const collection = db.collection("personagem");
  const app = express();
  app.use(express.json());

  app.get("/", function (req, res) {
    res.send("Hello World Nodemon!");
  });

  app.use("/personagens", personagemRouter);

  app.listen(3000, () =>
    console.log("Servidor rodando em http://localhost:3000")
  );
}

main();
