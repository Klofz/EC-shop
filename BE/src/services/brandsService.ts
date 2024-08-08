import { Brand } from "../types";
import { brandArr } from "../../data/brands";

const getBrands = (): Brand[] => {
  return brandArr;
};

const brandsService = { getBrands };
export default brandsService;
