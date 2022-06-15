import {
  findMetasController,
  findMetaByIdController,
  createMetaController,
  updateMetaController,
  deleteMetaController,
} from "../controllers/metas.controller.js";
import { validId } from "../middlewares/validId.middleware.js";
import { validObjectBody } from "../middlewares/validObjectBody.middleware.js";
import { validExistence } from "../middlewares/validExistence.middleware.js";
import { Router } from "express";

export const routerMetas = Router();

routerMetas.get("/find-metas", validExistence, findMetasController);
routerMetas.get("/find-meta/:id", validId, findMetaByIdController);
routerMetas.post("/create", validObjectBody, createMetaController);
routerMetas.put(
  "/update/:id",
  validId,
  validObjectBody,
  updateMetaController
);
routerMetas.delete("/delete/:id", validId, deleteMetaController);
