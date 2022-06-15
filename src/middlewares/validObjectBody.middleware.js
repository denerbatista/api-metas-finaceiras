export const validObjectBody = (req, res, next) => {
  const metas = req.body;
  if (
    !metas ||
    !metas.valor ||
    !metas.status ||
    !metas.meta ||
    !metas.parcial
  ) {
    console.log(metas);
    console.log(
      `${metas.valor}, ${metas.status}, ${metas.meta}, ${metas.parcial}`
    );
    return res
      .status(422)
      .send({ message: "Envie o todos os campos da meta!" });
  }
  next();
};
