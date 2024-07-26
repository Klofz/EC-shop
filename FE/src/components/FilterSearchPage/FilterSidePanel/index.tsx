import { useQuery } from "@tanstack/react-query";

import filtersService from "@/services/filters";
import RangedBased from "./RangedBased";
import SelectBasedFilters from "./SelectBasedFilters";
import ValueBased from "./ValueBased";

export default FilterSidePanel;

function FilterSidePanel() {
  const result = useQuery({
    queryKey: ["filtersAll"],
    queryFn: filtersService.getAllFilters,
  });

  const resultCurrentFilters = useQuery({
    queryKey: ["currentFilters"],
    queryFn: filtersService.getCurrentFilters,
  });

  const currentFilter = resultCurrentFilters.data ?? [];

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  //Guaranties that filtersArr is an array at least
  const filtersArr = result.data ? result.data : [];

  //This is just a palce holder
  //There might be many kind of filters, some by selectors others by range and it coudl lead to various types of filter arrays being deployed as a result
  const selectFiltersArr = filtersArr;

  return (
    <div className="flex-col items-start gap-8 md:flex">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Filter
          </legend>

          <SelectBasedFilters
            filtersArr={selectFiltersArr}
            currentFilter={currentFilter}
          />
          <ValueBased />
          <RangedBased />
        </fieldset>
      </form>
    </div>
  );
}
