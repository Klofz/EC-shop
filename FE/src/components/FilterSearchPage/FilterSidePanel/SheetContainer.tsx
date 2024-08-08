//
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const { showFilterSettings, updateShowFilterSettings } = useAppStore();

  return (
    <Sheet open={showFilterSettings} onOpenChange={updateShowFilterSettings}>
      <SheetTrigger asChild>
        {/* <Button variant="outline">The future filter button</Button> */}
      </SheetTrigger>
      <SheetContent className="min-w-80" side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Opciones de filtrado</SheetTitle>
          <SheetDescription>
            Seleccione los filtros que desea aplicar para la busqueda:
          </SheetDescription>
        </SheetHeader>
        {/* <ContentTemp /> */}
        <FilterSidePanel />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
