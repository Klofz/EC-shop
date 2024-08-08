import { Product_Category } from "../types";
import { productCategoryArr } from "../../data/products_categories";

const getProductCategories = (): Product_Category[] => {
  return productCategoryArr;
};

const productCategoriesService = { getProductCategories };
export default productCategoriesService;
