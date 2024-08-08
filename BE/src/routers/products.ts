import express from "express";
import productsService from "../services/productsService";

const productsRouter = express.Router();

productsRouter.get("/", (_req, res) => {
  res.send(productsService.getProducts());
});

export default productsRouter;
