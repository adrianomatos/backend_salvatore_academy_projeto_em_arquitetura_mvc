const service = require("./personagem.service");

async function readAll(req, res) {
  const items = await service.readAll();
  res.send(items);
}

async function readById(req, res) {
  const id = req.params.id;
  const item = await service.readById(id);
  if (!item) {
    return res.status(404).send("ALERTA: Ítem não encontrado");
  }
  res.send(item);
}

async function create(req, res) {
  const novoItem = req.body;
  if (!novoItem || !novoItem.nome) {
    return res.status(400).send("ALERTA: Falta propriedade NOME");
  }
  await service.create(novoItem);
  res.status(201).send(novoItem);
}

function updateById(req, res) {
  res.send("Update By Id");
}

function deleteById(req, res) {
  res.send("Delete By Id");
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById,
};
