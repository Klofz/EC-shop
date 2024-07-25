import { SelectItem } from "@/components/ui/select";
import { FilterTag } from "@/types";
import { Rabbit } from "lucide-react";

interface Props {
  filter: FilterTag;
}

export default SelectorItemCreator;

function SelectorItemCreator({ filter }: Props) {
  return (
    <SelectItem value={filter}>
      <div className="flex items-start gap-3 text-muted-foreground">
        <Rabbit className="size-5" />
        <div className="grid gap-0.5">
          <p>
            <span className="font-medium text-foreground">
              {filter}
            </span>
          </p>
          <p className="text-xs" data-description>
            This is {filter}.
          </p>
        </div>
      </div>
    </SelectItem>
  );
}

{
  /* <SelectItem value="genesis">
      <div className="flex items-start gap-3 text-muted-foreground">
        <Rabbit className="size-5" />
        <div className="grid gap-0.5">
          <p>
            Neural{" "}
            <span className="font-medium text-foreground">
              Genesis
            </span>
          </p>
          <p className="text-xs" data-description>
            Our fastest model for general use cases.
          </p>
        </div>
      </div>
    </SelectItem> */
}

{
  /*  */
}
