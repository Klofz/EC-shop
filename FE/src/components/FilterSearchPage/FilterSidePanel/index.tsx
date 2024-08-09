//
import CategoryFilter from "@/components/FilterSearchPage/FilterSidePanel/CategoryFilter/CategoryFilter";
import BrandFilter from "@/components/FilterSearchPage/FilterSidePanel/BrandFilter";
import PriceFilter from "@/components/FilterSearchPage/FilterSidePanel/PriceFilter";

export default FilterSidePanel;

function FilterSidePanel() {
  return (
    <div className="max-h-[50vh] overflow-y-auto">
      <div className="pt-3">
        <PriceFilter />
      </div>
      <div className="border-t-1 pt-3">
        <CategoryFilter />
      </div>
      <div className="border-t-1 pt-3">
        <BrandFilter />
      </div>
    </div>
  );
}
