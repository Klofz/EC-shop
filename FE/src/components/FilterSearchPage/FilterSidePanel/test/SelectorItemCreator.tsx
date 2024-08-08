import { SelectItem } from "@/components/ui/select";
import { FilterObject } from "@/types";
import { Rabbit } from "lucide-react";

interface Props {
  filter: FilterObject;
}

export default SelectorItemCreator;

function SelectorItemCreator({ filter }: Props) {
  return (
    <SelectItem value={filter.value}>
      <div className="flex items-start gap-3 text-muted-foreground">
        <Rabbit className="size-5" />
        <div className="grid gap-0.5">
          <p>
            <span className="font-medium text-foreground">
              {filter.name}
            </span>
          </p>
          <p className="text-xs" data-description>
            This is {filter.name}.
          </p>
        </div>
      </div>
    </SelectItem>
  );
}
