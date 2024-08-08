//
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import queryService from "@/services/db_queries";
import { useQuery } from "@tanstack/react-query";
import useAppStore from "@/services/Store";

export default BrandFilter;

function BrandFilter() {
  const { choosenBrands, updateChoosenBrands } = useAppStore();

  const resultBrands = useQuery({
    queryKey: ["getBrands"],
    queryFn: queryService.getAll_Brands,
  });

  if (resultBrands.isLoading) {
    return <div>loading data...</div>;
  }

  const brands = resultBrands.data ?? [];

  const brandToggles = brands.map((brand) => {
    return (
      <ToggleGroupItem
        className="bg-slate-100"
        size="sm"
        key={brand.id}
        value={brand.id}
        aria-label={`Toggle brand ${brand.name}`}
      >
        {brand.name}
      </ToggleGroupItem>
    );
  });

  return (
    <div>
      <h6 className="text-lg font-bold text-foreground">Marcas:</h6>
      <ToggleGroup
        className="justify-start flex-wrap m-2"
        // className="h-20 justify-start overflow-x-auto overflow-y-hidden"
        type="multiple"
        value={choosenBrands}
        onValueChange={updateChoosenBrands}
        //This is cancer, why cant i make this thing the height of its tallest element
      >
        {brandToggles}
      </ToggleGroup>
    </div>
  );
}
