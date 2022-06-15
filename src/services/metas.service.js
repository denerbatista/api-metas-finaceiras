import { Metas } from "../models/metas.js";

export const findMetasService = async () => {
  const metas = await Metas.find();
  return metas;
};

export const findMetaByIdService = async (id) => {
  const metaSeach = await Metas.findById(id);
  return metaSeach;
};

export const createMetaService = async ({ valor, status, meta, parcial }) => {
  const newMeta = {
    valor,
    status,
    meta,
    parcial
  };
  const metaCreate = await Metas.create(newMeta);
  return metaCreate;
};

export const updateMetaService = async ({ id, valor, status, meta, parcial }) => {
  const metaEdited = {
    valor,
    status,
    meta,
    parcial
  };
  await Metas.updateOne({ _id: id }, metaEdited);
  const metaUpdate = await Metas.findById(id);
  return metaUpdate;
};

export const deleteMetaService = async (id) => {
  return await Metas.findByIdAndDelete(id);
};
