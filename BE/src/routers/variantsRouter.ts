import express from "express";
import variantsService from "../services/variantsService";

const variantsRouter = express.Router();

variantsRouter.get("/", (_req, res) => {
  res.send(variantsService.getVariants());
});

export default variantsRouter;
