import axios from "axios";
import { apiBaseUrl } from "../constants";

import { FilterTag } from "@/types";

let currentFilters: FilterTag[] = [];

const getCurrentFilters = async () => {
  return currentFilters;
};

const setCurrentFilters = async (
  newFilters: FilterTag[],
) => {
  currentFilters = newFilters;
  return currentFilters;
};

const getAllFilters = async () => {
  const { data } = await axios.get<FilterTag[]>(
    `${apiBaseUrl}/filters`,
  );
  return data;
};

const filtersService = {
  getAllFilters,
  getCurrentFilters,
  setCurrentFilters,
};

export default filtersService;
