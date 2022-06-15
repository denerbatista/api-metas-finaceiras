import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MetasSchema = new Schema(
  {
    meta: { type: String, required: true },
    status: { type: String, required: true },
    valor: { type: Number, required: true },
    parcial: { type: Number, required: true },
  },
  { versionKey: false }
);

export const Metas = model("metas", MetasSchema);
