const { MongoClient, ObjectId } = require("mongodb");

const dbUrl = process.env.DATABASE_URL;
const dbName = "mongodb_arquitetura_mvc";

async function connectToDatabase() {
  const client = new MongoClient(dbUrl);
  console.log("Conectando ao Banco de Dados...");
  await client.connect();
  console.log("Banco de Dados conectado com sucesso!");
  const db = client.db(dbName);
}

module.exports = {
  connectToDatabase,
};
