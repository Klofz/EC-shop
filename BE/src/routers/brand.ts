import express from "express";
import brandService from "../services/brandsService";

const brandRouter = express.Router();

brandRouter.get("/", (_req, res) => {
  res.send(brandService.getBrands());
});

export default brandRouter;
