//
import { useState } from "react";
import { FilterTag } from "@/types";

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
  filtersArr: FilterTag[];
}

export default SelectBased;
function SelectBased({ filtersArr }: Props) {
  const [selectedFilter, setSelectedFilter] =
    useState<string>("");

  const queryClient = useQueryClient();
  const setCurrentFiltersMutation = useMutation({
    mutationFn: filtersService.setCurrentFilters,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["currentFilters"],
      });
    },
  });

  const updateFilters = (value: string) => {
    setSelectedFilter(value);

    setCurrentFiltersMutation.mutate([value]);
  };

  const selectorList = filtersArr.map((filter) => (
    <SelectorItemCreator key={filter} filter={filter} />
  ));

  // console.log(selectedFilter);

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
