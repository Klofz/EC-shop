//
import { Merch } from "@/types";

const applyFilters = (
  merchArr: Merch[],
  filters: string[] | undefined,
): Merch[] => {
  if (!filters || filters.length == 0) {
    return merchArr;
  }

  const filteredmerch = merchArr.filter((merch) =>
    merch.tags_array.some((tag) => filters.includes(tag)),
  );

  return filteredmerch;
};

const filtersUtility = {
  applyFilters,
};

export default filtersUtility;
