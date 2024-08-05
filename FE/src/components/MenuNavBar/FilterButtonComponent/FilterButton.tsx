//

import { Button } from "@/components/ui/button";

export default FilterToggle;

function FilterToggle() {
  const showFilter = () => {
    console.log("shows filter");
  };

  return (
    <div className="w-1/4 flex 	justify-end">
      <Button onClick={showFilter} variant={"ghost"} size={"sm"}>
        Filter
      </Button>
    </div>
  );
}
