import { Variant_Category } from "../types";
import { variantCategoryArr } from "../../data/variant_categories";

const getVariantCategories = (): Variant_Category[] => {
  return variantCategoryArr;
};

const variantCategoriesService = { getVariantCategories };
export default variantCategoriesService;
