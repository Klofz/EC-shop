//
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import FilterSidePanel from "@/components/FilterSearchPage/FilterSidePanel/index";
import useAppStore from "@/services/Store";

export default SheetContainer;

function SheetContainer() {
  const {
    showFilterSettings,
    updateChoosenBrands,
    updateChoosenProductCategories,
    updateChoosenProductCategories_Map,
    updateChoosenPriceRange,
    updateShowFilterSettings,
  } = useAppStore();

  const resetFilters = () => {
    updateChoosenBrands([]);
    updateChoosenProductCategories([]);
    updateChoosenProductCategories_Map(
      new Map<string, string[]>(),
    );
    updateChoosenPriceRange(["0", "1000"]);
  };

  return (
    <Sheet
      open={showFilterSettings}
      onOpenChange={updateShowFilterSettings}
    >
      <SheetTrigger asChild>
        {/* <Button variant="outline">The future filter button</Button> */}
      </SheetTrigger>
      <SheetContent
        className="min-w-80 p-0"
        side={"bottom"}
      >
        <div className="max-w-screen-lg">
          <SheetHeader className="flex-row text-start p-6 border-b-1">
            <div className="w-4/5 space-y-2">
              <SheetTitle>Opciones de filtrado</SheetTitle>
              <SheetDescription>
                Seleccione los filtros que desea aplicar
                para la busqueda:
              </SheetDescription>
            </div>
            <div className="w-1/5 flex items-center justify-center">
              <Button onClick={resetFilters} size={"sm"}>
                Reset
              </Button>
            </div>
          </SheetHeader>
          {/* Here is the filter panel */}
          <div className="mx-3">
            <FilterSidePanel />
          </div>
          {/* Here it ends, rest is bluff and bloat */}
          <SheetFooter className="items-center pb-3 pt-2 border-t-1 border-gray-300 sm:space-x-0 sm:px-6">
            <div className="w-0 sm:w-4/5"></div>
            <div className="w-auto flex items-center justify-center sm:w-1/5 ">
              <SheetClose asChild>
                <Button className="w-36 " type="submit">
                  Save changes
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
