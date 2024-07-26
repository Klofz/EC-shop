import { FilterObject } from "../types";
import { filtersTagArr_mock } from "../../data/filterTagsData";

const getFilters = (): FilterObject[] => {
  return filtersTagArr_mock;
};

const filtersService = { getFilters };
export default filtersService;
