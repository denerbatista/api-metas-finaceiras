import { findMetasService } from "../services/metas.service.js";

export const validExistence = async (req, res, next) => {
  const allMetas = await findMetasService();
  if (allMetas.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhuma meta cadastrada!" });
  }
  next();
};
