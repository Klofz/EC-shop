//

import { Button } from "@/components/ui/button";
import useAppStore from "@/services/Store";

export default FilterToggle;

function FilterToggle() {
  const { showFilterSettings, updateShowFilterSettings } =
    useAppStore();

  const showFilterHandler = () => {
    updateShowFilterSettings(!showFilterSettings);
  };

  return (
    <div className="w-1/4 flex 	justify-end">
      <Button
        onClick={showFilterHandler}
        variant={"ghost"}
        size={"default"}
      >
        Filter
      </Button>
    </div>
  );
}
