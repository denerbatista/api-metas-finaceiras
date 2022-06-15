import {
  findMetasService,
  findMetaByIdService,
  createMetaService,
  updateMetaService,
  deleteMetaService,
} from "../services/metas.service.js";

export const findMetasController = async (req, res) => {
  const allMetas = await findMetasService();
  res.status(200).send(allMetas);
};

export const findMetaByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenMeta = await findMetaByIdService(idParam);
  if (!chosenMeta) {
    return res.status(404).send({ message: "Meta não encontrada!" });
  }
  res.status(200).send(chosenMeta);
};

export const createMetaController = async (req, res) => {
  const { valor, meta, status, parcial } = req.body;
  const newMeta = await createMetaService({ meta, status, valor, parcial });
  return res.status(200).send(newMeta);
};

export const updateMetaController = async (req, res) => {
  const { id } = req.params;
  const { valor, meta, status, parcial } = req.body;
  const updatedMeta = await updateMetaService({
    id,
    valor,
    meta,
    status,
    parcial,
  });
  res.status(200).send(updatedMeta);
};

export const deleteMetaController = async (req, res) => {
  const idParam = req.params.id;
  await deleteMetaService(idParam);
  res.status(200).send({ message: "Meta deletada com sucesso!" });
};
