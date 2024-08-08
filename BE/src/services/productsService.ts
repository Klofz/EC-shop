import { Product } from "../types";
import { productArr } from "../../data/products";

const getProducts = (): Product[] => {
  return productArr;
};

const productsService = { getProducts };
export default productsService;
