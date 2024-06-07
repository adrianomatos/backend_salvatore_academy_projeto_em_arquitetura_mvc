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

  /*
  app.post("/personagens", async function (req, res) {
    const novoItem = req.body;
    if (!novoItem || !novoItem.nome) {
      return res.status(400).send("ALERTA: Falta propriedade NOME");
    }

    await collection.insertOne(novoItem);
    res.status(201).send(novoItem);
  });


  app.put("/personagens/:id", async function (req, res) {
    const id = req.params.id;
    const novoItem = req.body;

    if (!novoItem || !novoItem.nome) {
      return res.status(400).send("ALERTA: Falta propriedade NOME");
    }

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: novoItem });
    res.send(novoItem);
  });


  app.delete("/personagens/:id", async function (req, res) {
    const id = req.params.id;
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.send("Ítem removido com sucesso: " + id);
  });
*/

  app.listen(3000, () =>
    console.log("Servidor rodando em http://localhost:3000")
  );
}

main();
