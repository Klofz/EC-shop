import { FilterTag } from "../types";
import { filtersTagArr_mock } from "../../data/filterTagsData";

const getFilters = (): FilterTag[] => {
  return filtersTagArr_mock;
};

const filtersService = { getFilters };
export default filtersService;
