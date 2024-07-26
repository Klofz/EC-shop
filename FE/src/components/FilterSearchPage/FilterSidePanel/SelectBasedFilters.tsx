//
import { FilterObject, FilterTag } from "@/types";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SelectorItemCreator from "./SelectorItemCreator";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import filtersService from "@/services/filters";

interface Props {
  filtersArr: FilterObject[];
  currentFilter: FilterTag[];
}

export default SelectBasedFilters;
function SelectBasedFilters({
  filtersArr,
  currentFilter,
}: Props) {
  //Right now there can only be one filter at a time, but perhaps this could change
  const selectedFilter = currentFilter[0];

  const queryClient = useQueryClient();
  const setCurrentFiltersMutation = useMutation({
    mutationFn: filtersService.setCurrentFilters,
    onSuccess: () => {
      //this peace of code is retarded
      //the linter is being literally retarded, that return is not needed yet shuts up the fucking linter about not handling the promise, as if that return wasn't implicit in the syntax
      return queryClient.invalidateQueries({
        queryKey: ["currentFilters"],
      });
    },
  });

  const updateFilters = (value: string) => {
    // setSelectedFilter(value);

    //lets see how I'll handle filtering in the future
    const filterSelection =
      value == "no filter" ? [] : [value];
    setCurrentFiltersMutation.mutate(filterSelection);
  };

  const selectorList = filtersArr.map((filter) => (
    <SelectorItemCreator
      key={filter.name}
      filter={filter}
    />
  ));

  return (
    <div className="grid gap-3">
      <Label htmlFor="model">Model</Label>
      <Select
        onValueChange={updateFilters}
        value={selectedFilter}
      >
        <SelectTrigger
          id="model"
          className="items-start [&_[data-description]]:hidden"
        >
          <SelectValue placeholder="Select a filter" />
        </SelectTrigger>
        <SelectContent>{selectorList}</SelectContent>
      </Select>
    </div>
  );
}
