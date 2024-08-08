import express from "express";
import variantCategoriesService from "../services/variantCategoriesService";

const variantCategoriesRouter = express.Router();

variantCategoriesRouter.get("/", (_req, res) => {
  res.send(variantCategoriesService.getVariantCategories());
});

export default variantCategoriesRouter;
