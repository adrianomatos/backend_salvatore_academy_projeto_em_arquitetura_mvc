const service = require("./personagem.service");

// READ ALL
async function readAll(req, res) {
  const items = await service.readAll();
  res.send(items);
}

// READ BY ID
async function readById(req, res) {
  const id = req.params.id;
  const item = await service.readById(id);
  if (!item) {
    return res.status(404).send("ALERTA: Ítem não encontrado");
  }
  res.send(item);
}

// CREATE
async function create(req, res) {
  const novoItem = req.body;
  if (!novoItem || !novoItem.nome) {
    return res.status(400).send("ALERTA: Falta propriedade NOME");
  }
  await service.create(novoItem);
  res.status(201).send(novoItem);
}

// UPDATE BY ID
async function updateById(req, res) {
  const id = req.params.id;
  const novoItem = req.body;
  if (!novoItem || !novoItem.nome) {
    return res.status(400).send("ALERTA: Falta propriedade NOME");
  }
  await service.updateById(id, novoItem);
  res.send(novoItem);
}

// DELETE DY ID (ÓBVIO)
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
