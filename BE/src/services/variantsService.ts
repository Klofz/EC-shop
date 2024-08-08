import { Variant } from "../types";
import { variantArr } from "../../data/variants";

const getVariants = (): Variant[] => {
  return variantArr;
};

const variantsService = { getVariants };
export default variantsService;
