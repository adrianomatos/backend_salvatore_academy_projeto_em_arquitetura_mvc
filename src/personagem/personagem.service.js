const { ObjectId } = require("mongodb");
const { getDatabase } = require("../db/database-connection");

function getCollection() {
  return getDatabase().collection("personagem");
}

function readAll() {
  return getCollection().find().toArray();
}

/**
 * @param {string} id
 * @returns
 */
function readById(id) {
  return getCollection().findOne({ _id: new ObjectId(id) });
}

function create(novoItem) {
  return getCollection().insertOne(novoItem);
}

/**
 * @param {string} id
 * @returns
 */
async function updateById(id, novoItem) {
  await getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: novoItem }
  );
}

function deleteById() {}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
