const { ObjectId } = require('mongodb');
const { getDatabase } = require('../db/database-connection');

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

function updateById() {}

function deleteById() {}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
