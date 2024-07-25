import axios from "axios";
import { apiBaseUrl } from "../constants";

import { Merch } from "@/types";

const getAll = async () => {
  const { data } = await axios.get<Merch[]>(
    `${apiBaseUrl}/merch`,
  );
  return data;
};

const merchService = {
  getAll,
};

export default merchService;
