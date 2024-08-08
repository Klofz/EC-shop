import express from "express";
import productCategoriesService from "../services/productCategoriesService";

const productCategoriesRouter = express.Router();

productCategoriesRouter.get("/", (_req, res) => {
  res.send(productCategoriesService.getProductCategories());
});

export default productCategoriesRouter;
