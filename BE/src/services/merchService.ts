import { Merch } from "../types";
import { merchandiseArr_mock } from "../../data/merchandiseData";

const getMerch = (): Merch[] => {
  return merchandiseArr_mock;
};

const merchService = { getMerch };
export default merchService;
